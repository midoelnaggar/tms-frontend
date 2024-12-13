import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

export default function Title({ className, ...props }: Props) {
  return (
    <h1
      className={`text-2xl font-medium capitalize md:text-xl ${
        className || ""
      }`}
      {...props}
    />
  );
}
