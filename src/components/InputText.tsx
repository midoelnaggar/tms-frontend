"use client";
import { InputHTMLAttributes } from "react";
import InputContainer from "./InputContainer";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function InputText({
  label,
  className,
  error,
  ...props
}: Props) {
  return (
    <InputContainer label={label} id={props.id} error={error}>
      <input
        className={`rounded border border-gray-200 px-4 py-3 text-sm outline-primary-600 ${
          className || ""
        }`}
        {...props}
      />
    </InputContainer>
  );
}
