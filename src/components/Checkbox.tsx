"use client";
import { InputHTMLAttributes, useState } from "react";
import CheckboxIcon from "./icons/CheckboxIcon";
import { Checkbox as MUICheckbox } from "@mui/material";

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  label?: string;
  checked?: boolean;
}

export default function Checkbox({
  label,
  checked,
  className,
  disabled,
  ...props
}: Props) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`} {...props}>
      {!disabled && (
        <div>
          <MUICheckbox
            sx={{ padding: 0 }}
            icon={<CheckboxIcon />}
            checkedIcon={<CheckboxIcon checked />}
          />
        </div>
      )}
      {label && <label className="text-sm">{label}</label>}
    </div>
  );
}
