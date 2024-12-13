import { SVGProps } from "react";

const LoadingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/8000/svg"
    {...props}
  >
    <style>
      {
        "@keyframes spinner_GWy6{0%,50%{width:9px;height:9px}10%{width:11px;height:11px}}@keyframes spinner_BNNO{0%,50%{x:1.5px;y:1.5px}10%{x:.5px;y:.5px}}@keyframes spinner_pVqn{0%,50%{x:13.5px;y:1.5px}10%{x:12.5px;y:.5px}}@keyframes spinner_6uKB{0%,50%{x:13.5px;y:13.5px}10%{x:12.5px;y:12.5px}}@keyframes spinner_Qw4x{0%,50%{x:1.5px;y:13.5px}10%{x:.5px;y:12.5px}}"
      }
    </style>
    <rect
      className="fill-primary-800"
      x={1.5}
      y={1.5}
      rx={1}
      width={9}
      height={9}
      style={{
        animation:
          "spinner_GWy6 1.2s linear infinite,spinner_BNNO 1.2s linear infinite",
      }}
    />
    <rect
      className="fill-primary-900"
      x={13.5}
      y={1.5}
      rx={1}
      width={9}
      height={9}
      style={{
        animation:
          "spinner_GWy6 1.2s linear infinite,spinner_pVqn 1.2s linear infinite",
        animationDelay: ".15s",
      }}
    />
    <rect
      className="fill-primary-800"
      x={13.5}
      y={13.5}
      rx={1}
      width={9}
      height={9}
      style={{
        animation:
          "spinner_GWy6 1.2s linear infinite,spinner_6uKB 1.2s linear infinite",
        animationDelay: ".3s",
      }}
    />
    <rect
      className="fill-primary-900"
      x={1.5}
      y={13.5}
      rx={1}
      width={9}
      height={9}
      style={{
        animation:
          "spinner_GWy6 1.2s linear infinite,spinner_Qw4x 1.2s linear infinite",
        animationDelay: ".45s",
      }}
    />
  </svg>
);

export default LoadingIcon;
