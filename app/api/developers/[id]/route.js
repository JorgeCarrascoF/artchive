import connectMongoDB from "@/libs/mongodb";
import Developer from "@/models/developer";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {name, nacionality} = await request.json();
    await connectMongoDB();
    await Developer.findByIdAndUpdate(id, {name, nacionality});
    return NextResponse.json({message: "Developer updated successfully"}, {status: 200});
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const developer = await Developer.findOne({_id: id});
    return NextResponse.json({developer}, {status: 200});
}