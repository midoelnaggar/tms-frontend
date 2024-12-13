import { ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullwidth?: boolean;
  outline?: boolean;
}

export default function Button({
  fullwidth = false,
  className,
  outline,
  ...props
}: Props) {
  return (
    <button
      className={
        outline
          ? `${
              fullwidth ? "w-full" : "w-fit"
            } rounded border border-primary-950 bg-white p-4 capitalize leading-4 text-primary-950 outline-primary-200 hover:bg-primary-100 disabled:border-gray-200 disabled:bg-gray-300 disabled:text-white ${
              className || ""
            }`
          : `${
              fullwidth ? "w-full" : "w-fit"
            } rounded border-primary-950 bg-primary-950 px-6 py-3 capitalize leading-4 text-white outline-primary-200 hover:bg-primary-900 disabled:bg-gray-300 disabled:text-white ${
              className || ""
            }`
      }
      {...props}
    />
  );
}
