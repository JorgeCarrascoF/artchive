import connectMongoDB from "@/libs/mongodb";
import Author from "@/models/author";
import { NextResponse } from "next/server";

export async function POST(request){
    const {firstName: first_name, familyName: family_name, nacionality: nacionality, dateOfBirth: date_of_birth, dateOfDeath: date_of_death} = await request.json();
    await connectMongoDB();
    await Author.create({first_name, family_name, date_of_birth, date_of_death, nacionality});
    return NextResponse.json({message: "Author created successfully"}, {status: 201});
}

export async function GET(request){
    await connectMongoDB();
    const authors = await Author.find();
    return NextResponse.json({authors});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Author.findByIdAndDelete(id);
    return NextResponse.json({message: "Author deleted successfully"}, {status: 200});
}