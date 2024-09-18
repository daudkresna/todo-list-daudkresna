import CreateForm from "@/components/forms/createForm";
import { getServerSession } from "next-auth";
import React from "react";
import authOptions from "../api/auth/[...nextauth]/options";

const Create = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className="w-full px-16 h-full flex items-center justify-center">
        <CreateForm userId={session.user.id} />
      </div>
    );
  }
};

export default Create;
