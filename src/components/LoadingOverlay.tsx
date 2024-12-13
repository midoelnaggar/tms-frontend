import React, { HTMLAttributes } from "react";
import Loading from "./Loading";

export default function LoadingOverlay({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-[#FFFFFF80] ${
        className || ""
      }`}
      {...props}
    >
      <Loading />
    </div>
  );
}
