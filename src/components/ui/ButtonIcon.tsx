import React, { ButtonHTMLAttributes, ReactNode } from "react";

type VariantType = "primary" | "secondary" | "outline" | "red" | "danger";

const btnType: Record<VariantType, string> = {
  primary:
    "bg-primary-100 text-primary-700 hover:bg-primary-900 hover:text-white",
  secondary:
    "bg-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:text-secondary-0",
  outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
  red: "bg-red-100 text-red-500 hover:bg-red-500 hover:text-white",
  danger: "border border-red-100 text-red-500",
};

type ButtonIconProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant: VariantType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonIcon({
  children,
  onClick,
  className,
  variant,
  ...rest
}: ButtonIconProps) {
  return (
    <button
      onClick={onClick}
      className={`
        ${btnType[variant]}
        ${className} flex items-center justify-center gap-x-1 rounded-md p-1
        [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-inherit
        text-xs lg:text-sm
        transition-all duration-300 ease-out`}
      {...rest}
    >
      {children}
    </button>
  );
}
