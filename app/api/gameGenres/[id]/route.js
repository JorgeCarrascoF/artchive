import connectMongoDB from "@/libs/mongodb";
import GameGenre from "@/models/gameGenre";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, description } = await request.json();
  await connectMongoDB();
  await GameGenre.findByIdAndUpdate(id, { name, description });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const gameGenre = await GameGenre.findById(id);
  return NextResponse.json({ gameGenre }, { status: 200 });
}