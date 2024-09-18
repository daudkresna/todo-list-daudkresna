"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";
import { redirect } from "next/navigation";

export async function signUpAction(formdata: FormData) {
  if (
    !formdata.getAll("name")[0] ||
    !formdata.getAll("username")[0] ||
    !formdata.getAll("password")[0]
  ) {
    return false;
  } else {
    const name = formdata.get("name") as string;
    const username = formdata.get("username") as string;
    const password = formdata.get("password") as string;
    await prisma.user.create({
      data: {
        name,
        username,
        hashedPassword: password,
      },
    });
    return redirect("/api/auth/signin");
  }
}

export const completeTodo = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const complete = formData.get("complete") as string;

  if (complete === "true") {
    await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        completed: false,
        completedAt: new Date(),
      },
    });
  } else {
    await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: {
        completed: true,
        completedAt: new Date(),
      },
    });
  }

  return redirect("/");
};

export const createTodo = async (formdata: FormData) => {
  const userId = formdata.get("userId") as string;
  const title = formdata.get("title") as string;
  const description = formdata.get("description") as string;
  const tag = formdata.get("tag") as string;
  await prisma.post.create({
    data: {
      title,
      content: description,
      tag: tag,
      authorId: userId,
    },
  });
  return redirect("/");
};

export async function revalidateSignIn() {
  return revalidatePath("/");
}
