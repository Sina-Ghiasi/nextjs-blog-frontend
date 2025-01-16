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

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
