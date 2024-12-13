import { ButtonHTMLAttributes } from "react";

export default function LinkButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`text-sm font-light capitalize text-primary-600 underline hover:text-primary-700 disabled:text-gray-500 ${className}`}
      {...props}
    />
  );
}
