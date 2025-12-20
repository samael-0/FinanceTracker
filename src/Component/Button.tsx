import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Buttonn({
  children,
  variant = "primary",
  onClick,
  type,
}: ButtonProps) {
  const base = "px-4 py-2 rounded-md font-small transition";
  const styles =
    variant === "primary"
      ? "bg-pcolor hover:bg-blue-600 text-white hover:cursor-pointer w-full hover:scale-103"
      : "bg-red-500 hover:bg-blue-600 text-white  hover:cursor-pointer w-full hover:scale-103";
  return (
    <button className={`${base} ${styles}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
