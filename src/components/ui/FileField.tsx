import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

type FileInputPropsType = {
  id: string;
  label: string;
  fileName?: string;
  isRequired?: boolean;
  errorMessage: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function FileField({
  id,
  label,
  fileName,
  errorMessage,
  type = "file",
  isRequired,
  className = "",
  ...rest
}: FileInputPropsType) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`flex items-center justify-center gap-x-2 cursor-pointer border-2 border-primary-900 rounded-lg px-3 py-2 text-primary-900 ${className}`}
      >
        {label}
        <ArrowUpTrayIcon className="w-5 h-5" />
        {isRequired && <span className="text-error">*</span>}
        {fileName && <span className="text-primary-900">{fileName}</span>}
        <input className="sr-only hidden" id={id} type={type} {...rest} />
      </label>
      {errorMessage && (
        <span className="text-red-600 block text-xs mt-2">{errorMessage}</span>
      )}
    </div>
  );
}
