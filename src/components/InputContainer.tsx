import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  label?: string;
  id?: string;
  error?: string;
}
export default function InputContainer({ children, error, label, id }: Props) {
  return (
    <div
      className={`relative flex flex-col gap-2 capitalize [&_input]:hover:border-[#000000DE] [&_textarea]:hover:border-[#000000DE]`}
    >
      {label && <label htmlFor={id}>{label}</label>}
      {children}
      {error && (
        <span className="absolute top-full mt-0.5 text-xs text-[#FF3B30]">
          {error}
        </span>
      )}
    </div>
  );
}
