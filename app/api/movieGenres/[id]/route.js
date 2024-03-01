import connectMongoDB from "@/libs/mongodb";
import MovieGenre from "@/models/movieGenre";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {name, description} = await request.json();
    await connectMongoDB();
    await MovieGenre.findByIdAndUpdate(id, {name, description});
    return NextResponse.json({message: "Movie genre updated successfully"}, {status: 200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const movieGenre = await MovieGenre.findById(id);
    return NextResponse.json({movieGenre}, {status: 200});
}