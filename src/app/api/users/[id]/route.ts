import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RequestParams = {
  params: {
    id: string;
  };
};
// * Get single User
export async function GET(request: Request, { params }: RequestParams) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(user);
}

// * Update User
export async function PUT(request: Request, { params }: RequestParams) {
  const body = await request.json();
  const user = await prisma.user.update({
    where: { id: Number(params.id) },
    data: body,
  });
  return NextResponse.json(user);
}

// * Delete User
export async function DELETE(request: Request, { params }: RequestParams) {
  const user = await prisma.user.delete({ where: { id: Number(params.id) } });
  return NextResponse.json(user);
}
