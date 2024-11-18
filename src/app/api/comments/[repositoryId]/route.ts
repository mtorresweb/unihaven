import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RequestParams = {
  params: {
    repositoryId: string;
  };
};

// * Get comments by repositoryId
export const GET = async (request: Request, { params }: RequestParams) => {
  const { repositoryId } = params;
  const comments = await prisma.comment.findMany({
    where: {
      repositoryId: Number(repositoryId),
    },
  });
  return NextResponse.json(comments);
};
