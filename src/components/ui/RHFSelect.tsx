import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldErrors,
} from "react-hook-form";

type RHFSelectProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  options: { label: string; value: string | number }[];
  isRequired?: boolean;
  placeholder?: string;
  errors?: FieldErrors<T>;
};

export default function RHFSelect<T extends FieldValues>({
  label,
  name,
  register,
  options,
  isRequired,
  placeholder,
  errors,
}: RHFSelectProps<T>) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div>
      <label htmlFor={String(name)} className="mb-2 block text-secondary-700">
        {label}&nbsp;{isRequired && <span className="text-error">*</span>}
      </label>
      <div className="relative">
        <select
          {...register(name)}
          id={String(name)}
          className="selectField__input"
          defaultValue=""
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDownIcon className="w-5 h-5 text-secondary-500" />
        </div>
      </div>
      {hasError && (
        <span className="text-red-600 block text-xs mt-2">
          {errorMessages?.message?.toString()}
        </span>
      )}
    </div>
  );
}
