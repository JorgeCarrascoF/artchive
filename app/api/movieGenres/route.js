import connectMongoDB from "@/libs/mongodb";
import MovieGenre from "@/models/movieGenre";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name, description} = await request.json();
    await connectMongoDB();
    await MovieGenre.create({name, description});
    return NextResponse.json({message: "Movie genre created successfully"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const movieGenres = await MovieGenre.find();
    return NextResponse.json({movieGenres});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await MovieGenre.findByIdAndDelete(id);
    return NextResponse.json({message: "Movie genre deleted successfully"}, {status: 200});
}