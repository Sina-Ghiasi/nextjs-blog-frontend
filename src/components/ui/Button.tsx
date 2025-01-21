import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariants = "primary" | "secondary" | "outline" | "danger";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariants;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const btnType: Record<ButtonVariants, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
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
