import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { username: string; id: string } }
) {
  const todos = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
      author: {
        username: params.username.toString(),
      },
    },
  });
  return NextResponse.json({
    status: 200,
    data: todos,
  });
}
