"use client";
import { HTMLAttributes } from "react";

export default function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-16 lg:p-12 md:p-8 sm:p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
