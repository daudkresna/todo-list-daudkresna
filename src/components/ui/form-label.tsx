import React from "react";

const FormLabel = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <label htmlFor={label} className="font-bold text-lg self-start">
      {children}
    </label>
  );
};

export default FormLabel;
