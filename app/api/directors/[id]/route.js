import connectMongoDB from "@/libs/mongodb";
import Director from "@/models/director";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {firstName: first_name, familyName: family_name, dateOfBirth: date_of_birth, dateOfDeath: date_of_death, nacionality: nacionality} = await request.json();
    await connectMongoDB();
    await Director.findByIdAndUpdate(id, {first_name, family_name, date_of_birth, date_of_death, nacionality});
    return NextResponse.json({message: "Director updated successfully"}, {status: 200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const director = await Director.findById(id);
    return NextResponse.json({director}, {status: 200});
}