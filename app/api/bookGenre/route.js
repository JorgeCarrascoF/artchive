import connectMongoDB from "@/libs/mongodb";
import BookGenre from "@/models/bookGenre";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name, description} = await request.json();
    await connectMongoDB();
    await BookGenre.create({name, description});
    return NextResponse.json({message: "Book Genre created successfully"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const bookGenres = await BookGenre.find();
    return NextResponse.json({bookGenres});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await BookGenre.findByIdAndDelete(id);
    return NextResponse.json({message: "Book Genre deleted successfully"}, {status: 200});
}