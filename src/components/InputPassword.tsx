"use client";
import { InputHTMLAttributes, useState } from "react";
import InputContainer from "./InputContainer";
import ShowPasswordIcon from "./icons/ShowPasswordICon";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function InputPassword({ label, error, ...props }: Props) {
  const [shown, setShown] = useState(false);
  return (
    <InputContainer label={label} id={props.id} error={error}>
      <div className="relative flex justify-end">
        <input
          className="w-full rounded border border-gray-200 py-3 pe-12 ps-4 text-sm outline-primary-600"
          {...props}
          type={shown ? "text" : "password"}
        />
        <div
          onClick={() => (props.disabled ? () => {} : setShown(!shown))}
          className="absolute top-1/2 me-2.5 -translate-y-1/2 rounded-full p-1 hover:bg-gray-100"
        >
          <ShowPasswordIcon shown={shown} />
        </div>
      </div>
    </InputContainer>
  );
}
