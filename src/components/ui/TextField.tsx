type TextFieldPropsType = {
  id: string;
  label: string;
  isRequired?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
export default function TextField({
  id,
  label,
  type = "text",
  dir = "rtl",
  isRequired,
  className = "",
  ...rest
}: TextFieldPropsType) {
  return (
    <div className="textField">
      <label htmlFor={id} className="block mb-2 text-secondary-600 text-sm">
        {label}
        &nbsp;
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        id={id}
        type={type}
        dir={dir}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        {...rest}
      />
    </div>
  );
}
