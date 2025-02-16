import { useFormStatus } from "react-dom";
import Button, { ButtonVariants } from "./Button";
import MiniSpinner from "./MiniSpinner";
import { ButtonHTMLAttributes, ReactNode } from "react";

export default function SubmitButton({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: ButtonVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={`flex items-center justify-center gap-x-4 py-3 ${className}`}
      {...rest}
    >
      {children}
      {pending && <MiniSpinner />}
    </Button>
  );
}
