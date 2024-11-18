import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// * Update review
export const PUT = async (request: Request) => {
  const { id, content } = await request.json();
  const review = await prisma.review.update({
    where: {
      id: Number(id),
    },
    data: {
      content,
    },
  });
  return NextResponse.json(review);
};

// * Delete review
export const DELETE = async (request: Request) => {
  const { id } = await request.json();
  const review = await prisma.review.delete({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json(review);
};
