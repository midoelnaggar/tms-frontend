"use client";
import { InputHTMLAttributes } from "react";
import InputContainer from "./InputContainer";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function InputMultiline({
  label,
  id,
  className,
  error,
  ...props
}: Props) {
  return (
    <InputContainer label={label} id={id} error={error}>
      <textarea
        id={id}
        rows={4}
        className={`rounded border border-gray-200 px-4 py-3 text-sm outline-primary-600 ${
          className || ""
        }`}
        {...props}
      />
    </InputContainer>
  );
}
