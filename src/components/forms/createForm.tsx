"use client";
import React, { useRef } from "react";
import FormButton from "../ui/form-button";
import FormLabel from "../ui/form-label";
import FormInput from "../ui/form-input";
import { createTodo } from "@/app/actions/actions";
import { icons } from "@/app/lib/icons";

const CreateForm = ({ userId }: { userId: string | undefined }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleAction = async (formdata: FormData) => {
    formRef.current?.reset();
    await createTodo(formdata);
  };
  return (
    <form
      action={handleAction}
      className="flex flex-col gap-4 items-center justify-center bg-blue-100 p-8 rounded-lg"
      ref={formRef}
    >
      <input type="text" name="userId" value={userId} hidden readOnly />
      <FormLabel label="title">Title</FormLabel>
      <FormInput type="text" label="title" placeholder="Title" />
      <FormLabel label="description">Description</FormLabel>
      <FormInput label="description" placeholder="Description" type="text" />
      <select name="tag" id="tag" className="p-2 rounded-md text-gray-400">
        {icons.map((icon) => (
          <option key={icon.id} value={icon.value}>
            {icon.title}
          </option>
        ))}
      </select>
      <FormButton>Add Todo</FormButton>
    </form>
  );
};

export default CreateForm;
