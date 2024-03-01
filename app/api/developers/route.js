import connectMongoDB from "@/libs/mongodb";
import Developer from "@/models/developer";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name, nacionality} = await request.json();
    await connectMongoDB();
    await Developer.create({name, nacionality});
    return NextResponse.json({message: "Developer created successfully"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const developers = await Developer.find();
    return NextResponse.json({developers});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Developer.findByIdAndDelete(id);
    return NextResponse.json({message: "Developer deleted successfully"}, {status: 200});
}