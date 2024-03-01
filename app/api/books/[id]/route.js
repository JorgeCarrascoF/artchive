import connectMongoDB from "@/libs/mongodb";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {title, ISBN, description, author, book_genre, year} = await request.json();
    await connectMongoDB();
    await Book.findByIdAndUpdate(id, {title, ISBN, description, author, book_genre, year});
    return NextResponse.json({message: "Book updated successfully"}, {status: 200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const book = await Book.findById(id).populate('book_genre').populate('author');
    return NextResponse.json({book}, {status: 200});
}