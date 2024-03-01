import connectMongoDB from "@/libs/mongodb";
import GameGenre from "@/models/gameGenre";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name, description} = await request.json();
    await connectMongoDB();
    await GameGenre.create({name, description});
    return NextResponse.json({message: "Game genre created successfully"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const gameGenres = await GameGenre.find();
    return NextResponse.json({gameGenres});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await GameGenre.findByIdAndDelete(id);
    return NextResponse.json({message: "Game genre deleted successfully"}, {status: 200});
}