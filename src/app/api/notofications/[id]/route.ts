import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RequestParams = {
  params: {
    id: string;
  };
};

// * Create notification
export const POST = async (request: Request, { params }: RequestParams) => {
  const { title, content } = await request.json();
  const notification = await prisma.notification.create({
    data: {
      title,
      content,
      userId: Number(params.id),
    },
  });
  return NextResponse.json(notification);
};

// * Get all notifications for a user
export const GET = async (request: Request, { params }: RequestParams) => {
  const notifications = await prisma.notification.findMany({
    where: {
      userId: Number(params.id),
    },
  });
  return NextResponse.json(notifications);
};
