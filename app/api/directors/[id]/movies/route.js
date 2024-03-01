import connectMongoDB from "@/libs/mongodb";
import Movie from "@/models/movie";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const movies = await Movie.find({director: id});
    return NextResponse.json({movies});
}