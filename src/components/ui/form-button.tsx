"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

const FormButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={`${
        pending ? "bg-gray-300" : "bg-sky-300"
      } p-2 rounded-lg inline-flex max-w-[150px] items-center justify-center`}
      disabled={pending}
      type="submit"
    >
      {pending ? (
        <h3 className="inline-flex items-center gap-4">
          {/* <span className="loading loading-spinner loading-xs"></span> */}
          <Loader2 className="h-4 w-4 animate-spin" />
          {children}
        </h3>
      ) : (
        children
      )}
    </button>
  );
};

export default FormButton;
