import React, { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariants = "primary" | "secondary" | "outline" | "danger";

const btnType: Record<ButtonVariants, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...rest
}: {
  children: ReactNode;
  variant?: ButtonVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
