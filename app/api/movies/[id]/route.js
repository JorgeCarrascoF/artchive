import connectMongoDB from "@/libs/mongodb";
import Movie from "@/models/movie";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {title, description, year: release_year, duration, director, movie_genre} = await request.json();
    await connectMongoDB();
    await Movie.findByIdAndUpdate(id, {title, description, release_year, duration, director, movie_genre});
    return NextResponse.json({message: "Movie updated successfully"}, {status: 200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const movie = await Movie.findById(id).populate('movie_genre').populate('director');
    return NextResponse.json({movie}, {status: 200});
}