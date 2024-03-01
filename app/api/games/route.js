import connectMongoDB from "@/libs/mongodb";
import Videogame from "@/models/videogame";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description, developer, game_genre, release_year, platforms} = await request.json();
    await connectMongoDB();
    await Videogame.create({title, description, developer, game_genre, release_year, platforms});
    return NextResponse.json({message: "Videogame created successfully"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const videogames = await Videogame.find();
    return NextResponse.json({videogames});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Videogame.findByIdAndDelete(id);
    return NextResponse.json({message: "Videogame deleted successfully"}, {status: 200});
}