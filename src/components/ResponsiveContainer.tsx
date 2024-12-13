import { HTMLAttributes } from "react";

export default function ResponsiveContainer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`px-32 py-12 lg:px-16 lg:py-6 md:px-8 sm:px-0 ${
        className || ""
      }`}
      {...props}
    />
  );
}
