import Card from "@/components/ui/card";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import authOptions from "./api/auth/[...nextauth]/options";
import { Todo } from "./types/types";
import { IconProps } from "@/components/ui/icon";

const Home = async () => {
  const session = await getServerSession(authOptions);
  // const todos = await prisma.post.findMany({
  //   where: {
  //     author: {
  //       username: session?.user.username,
  //     },
  //   },
  // });
  const res = await fetch(
    `${process.env.BASE_URL}/user/${session?.user.username}/todos`,
    {
      cache: "no-store",
    }
  );
  const todos = await res.json();
  return (
    <div className="relative w-full flex flex-col gap-8 items-center justify-center">
      <div className="w-3/4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">YOUR TODOS</h1>
        <Link
          href={"/create"}
          className="py-2 px-4 border-2 border-black rounded-md max-w-sm bg-white text-black font-bold text-2xl ease-in-out duration-300 hover:bg-gray-100"
        >
          +
        </Link>
      </div>
      {todos.data.length === 0 ? (
        <div className="w-full flex justify-center">
          <h1 className="text-center text-2xl">No todos found</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center w-3/4 gap-4 text-black">
          {todos.data.map((todo: Todo) => (
            <Link href={`/todo/${todo.id}`} key={todo.id}>
              {/* //eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Card
                date={todo.createdAt}
                description={todo.content}
                title={todo.title}
                icon={todo.tag as IconProps["name"]}
                completed={todo.completed}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
