import connectMongoDB  from "@/libs/mongodb";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const id = params.id;
    await connectMongoDB();
    const books = await Book.find({author: id});
    return NextResponse.json({books});
}