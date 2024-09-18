import { completeTodo } from "@/app/actions/actions";
import authOptions from "@/app/api/auth/[...nextauth]/options";
import { Todo } from "@/app/types/types";
import Icon from "@/components/ui/icon";
import { getServerSession } from "next-auth";
import React from "react";

const TodoPage = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const res = await fetch(
    `http://localhost:3000/api/user/${session?.user.username}/todo/${params.id}`
  );
  const todo: Todo = await res.json().then((data) => data.data);
  return (
    <div className="p-2 md:flex md:w-full md:justify-center">
      <div className="md:w-[300px] w-full max-w-full flex flex-col gap-4 p-4 border-2 rounded-lg border-black h-full">
        <h1 className="text-4xl">{todo.title}</h1>
        <h3 className="font-light text-gray-400">
          {new Date(todo.createdAt).toLocaleDateString()}
        </h3>
        <h3 className="font-light text-gray-400 text-balance">
          {todo.content}
        </h3>
        <div className="flex justify-between gap-2">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
          <Icon name={todo.tag as any} />
          <form action={completeTodo}>
            <input type="text" name="id" value={todo.id} hidden readOnly />
            <input
              type="text"
              name="complete"
              id="complete"
              value={todo.completed as unknown as string}
              hidden
              readOnly
            />
            <button type="submit" className="size-4">
              <Icon
                name="circle-check"
                color={todo.completed ? "green" : "black"}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
