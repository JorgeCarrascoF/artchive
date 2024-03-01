import connectMongoDB from "@/libs/mongodb";
import Movie from "@/models/movie";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description, release_year, duration, director, movie_genre} = await request.json();
    await connectMongoDB();
    await Movie.create({title, description, release_year, duration, director, movie_genre});
    return NextResponse.json({message: "Movie created successfully"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const movies = await Movie.find();
    return NextResponse.json({movies});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Movie.findByIdAndDelete(id);
    return NextResponse.json({message: "Movie deleted successfully"}, {status: 200});
}