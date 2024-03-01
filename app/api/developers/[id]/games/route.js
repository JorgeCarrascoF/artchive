import connectMongoDB from "@/libs/mongodb";
import Videogame from "@/models/videogame";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const videogames = await Videogame.find({developer: id});
    return NextResponse.json({videogames});
}