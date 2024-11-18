import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// * Create category
export const POST = async (request: Request) => {
  const { name } = await request.json();
  const category = await prisma.category.create({
    data: {
      name,
    },
  });
  return NextResponse.json(category);
};

// * Get all categories
export const GET = async () => {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
};
