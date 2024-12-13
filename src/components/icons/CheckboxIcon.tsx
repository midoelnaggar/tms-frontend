import { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  checked?: boolean;
}
const CheckboxIcon = ({ checked, ...props }: Props) =>
  checked ? (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={18} height={18} rx={5} fill="#0b529d" />
      <rect
        x={0.5}
        y={0.5}
        width={17}
        height={17}
        rx={4.5}
        stroke="#585857"
        strokeOpacity={0.2}
      />
      <path
        d="m5 8.83 2.83 2.83L13.5 6"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={18} height={18} rx={5} />
      <rect
        x={0.5}
        y={0.5}
        width={17}
        height={17}
        rx={4.5}
        stroke="#585857"
        strokeOpacity={0.2}
      />
    </svg>
  );

export default CheckboxIcon;
