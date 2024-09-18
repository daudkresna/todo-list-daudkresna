"use client";
import { signUpAction } from "@/app/actions/actions";
import React, { useRef } from "react";
import FormButton from "../ui/form-button";
import FormLabel from "../ui/form-label";
import FormInput from "../ui/form-input";

const SignUpForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (formdata: FormData) => {
    formRef.current?.reset();

    await signUpAction(formdata);
  };
  return (
    <form
      action={handleSubmit}
      className="flex flex-col gap-4 items-center justify-center bg-blue-100 p-8 rounded-lg"
      ref={formRef}
    >
      <FormLabel label="name">Name</FormLabel>
      <FormInput label="name" placeholder="Your Name" type="text" />
      <FormLabel label="username">Username</FormLabel>
      <FormInput label="username" placeholder="Your Username" type="text" />
      <FormLabel label="password">Password</FormLabel>
      <FormInput label="password" placeholder="Your Password" type="password" />
      <FormButton>Sign Up</FormButton>
    </form>
  );
};

export default SignUpForm;
