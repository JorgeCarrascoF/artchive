import connectMongoDB from "@/libs/mongodb";
import BookGenre from "@/models/bookGenre";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {name: name, description: description} = await request.json();
    await connectMongoDB();
    await BookGenre.findByIdAndUpdate(id, {name, description});
    return NextResponse.json({message: "Book Genre updated successfully"}, {status: 200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const bookGenre = await BookGenre.findOne({_id: id});
    return NextResponse.json({bookGenre}, {status: 200});
}