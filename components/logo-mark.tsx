import * as React from "react";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 48V36C18 26.058 25.163 18 34 18C42.837 18 50 26.058 50 36V48"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <path
        d="M18 48H50"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <path
        d="M26 48V37.5C26 31.701 30.477 27 36 27C41.523 27 46 31.701 46 37.5V48"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        opacity={0.6}
      />
    </svg>
  );
}
