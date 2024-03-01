import connectMongoDB from "@/libs/mongodb";
import Director from "@/models/director";
import { NextResponse } from "next/server";

export async function POST(request){
    const {firstName: first_name, familyName: family_name, dateOfBirth: date_of_birth, dateOfDeath: date_of_death, nacionality: nacionality} = await request.json();
    await connectMongoDB();
    await Director.create({first_name, family_name, date_of_birth, date_of_death, nacionality});
    return NextResponse.json({message: "Director created successfully"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const directors = await Director.find();
    return NextResponse.json({directors});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Director.findByIdAndDelete(id);
    return NextResponse.json({message: "Director deleted successfully"}, {status: 200});
}