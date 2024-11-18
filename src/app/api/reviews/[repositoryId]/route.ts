import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RequestParams = {
  params: {
    repositoryId: string;
  };
};

// * Get reviews by repositoryId
export const GET = async (request: Request, { params }: RequestParams) => {
  const { repositoryId } = params;
  const reviews = await prisma.review.findMany({
    where: {
      repositoryId: Number(repositoryId),
    },
  });
  return NextResponse.json(reviews);
};

// * Create review
export const POST = async (request: Request) => {
  const { content, repositoryId, authorId } = await request.json();
  const review = await prisma.review.create({
    data: {
      content,
      repositoryId: Number(repositoryId),
      authorId: Number(authorId),
    },
  });
  return NextResponse.json(review);
};
