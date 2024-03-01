import connectMongoDB from "@/libs/mongodb";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, ISBN, description, author, book_genre, year} = await request.json();
    await connectMongoDB();
    await Book.create({title, ISBN, description, author, book_genre, year});
    return NextResponse.json({message: "Book created successfully"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const books = await Book.find();
    return NextResponse.json({books});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Book.findByIdAndDelete(id);
    return NextResponse.json({message: "Book deleted successfully"}, {status: 200});
}