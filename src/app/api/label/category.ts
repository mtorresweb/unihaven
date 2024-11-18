import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// * Create label category
export const POST = async (request: Request) => {
  const { name } = await request.json();
  const label = await prisma.label.create({
    data: {
      name,
    },
  });
  return NextResponse.json(label);
};

// * Get all label categories
export const GET = async () => {
  const labels = await prisma.label.findMany();
  return NextResponse.json(labels);
};
