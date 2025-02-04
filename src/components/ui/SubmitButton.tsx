import { useFormStatus } from "react-dom";
import Button from "./Button";
import MiniSpinner from "./MiniSpinner";
import { ButtonHTMLAttributes, ReactNode } from "react";

export default function SubmitButton({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={`flex items-center justify-center gap-x-4 py-4 ${className}`}
      {...rest}
    >
      {children}
      {pending && <MiniSpinner />}
    </Button>
  );
}
