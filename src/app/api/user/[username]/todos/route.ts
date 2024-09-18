import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const todos = await prisma.post.findMany({
    where: {
      author: {
        username: params.username.toString(),
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json({
    status: 200,
    data: todos,
  });
}
