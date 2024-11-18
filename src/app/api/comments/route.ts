import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// * Create comment
export const POST = async (request: Request) => {
  const { content, repositoryId, authorId } = await request.json();
  const comment = await prisma.comment.create({
    data: {
      content,
      repositoryId: Number(repositoryId),
      authorId: Number(authorId),
    },
  });
  return NextResponse.json(comment);
};
