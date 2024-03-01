import connectMongoDB from "@/libs/mongodb";
import Videogame from "@/models/videogame";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {title, description, developer, game_genre, year: release_year, platforms} = await request.json();
    await connectMongoDB();
    await Videogame.findByIdAndUpdate(id, {title, description, developer, game_genre, release_year, platforms});
    return NextResponse.json({message: "Videogame created successfully"}, {status: 201});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const videogame = await Videogame.findById(id).populate('game_genre').populate('developer');
    return NextResponse.json({videogame}, {status: 200});
}