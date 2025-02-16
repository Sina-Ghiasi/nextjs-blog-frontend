import {
  FieldErrors,
  UseFormRegister,
  RegisterOptions,
  FieldValues,
  Path,
} from "react-hook-form";

type RHFTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  isRequired?: boolean;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  validationSchema?: RegisterOptions<T, Path<T>>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function RHFTextField<T extends FieldValues>({
  name,
  label,
  type = "text",
  dir = "rtl",
  isRequired,
  register,
  errors,
  validationSchema = {},
  ...rest
}: RHFTextFieldProps<T>) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);

  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        &nbsp;
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        dir={dir}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {hasError && (
        <span className="text-red-600 block text-xs mt-2">
          {errorMessages?.message?.toString()}
        </span>
      )}
    </div>
  );
}
