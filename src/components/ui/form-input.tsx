"use client";
import React, { useState } from "react";

const FormInput = ({
  type = "text",
  label,
  placeholder = "",
  value = "",
}: {
  type: string;
  label: string;
  placeholder?: string;
  value?: string;
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <input
      onChange={handleChange}
      type={type}
      name={label}
      id={label}
      placeholder={placeholder}
      value={inputValue}
      className="p-2 rounded-md border-2 border-black"
      required
    />
  );
};

export default FormInput;
