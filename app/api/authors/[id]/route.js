import connectMongoDB from "@/libs/mongodb";
import Author from "@/models/author";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {firstName: first_name, familyName: family_name, nacionality: nacionality, dateOfBirth: date_of_birth, dateOfDeath: date_of_death} = await request.json();
    await connectMongoDB();
    await Author.findByIdAndUpdate(id, {first_name, family_name, date_of_birth, date_of_death, nacionality});
    return NextResponse.json({message: "Author updated successfully"}, {status: 200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const author = await Author.findOne({_id: id});
    return NextResponse.json({author}, {status: 200});
}  