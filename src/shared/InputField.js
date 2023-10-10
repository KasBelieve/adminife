const InputField = ({
  type,
  placeholder,
  disabled,
  onChange,
  name,
  id,
  onBlur,
  className,
  value,
  defaultValue,
  htmlFor,
  onFocus,
  label,
  autoComplete,
  required,
  divClass,
}) => {
  const defaultClass =
    "h-[50px] appearance-none bg-white border border-gunsmoke px-2 rounded-md placeholder:text-sm placeholder:text-gunsmoke outline-none text-sm font-normal";

  return (
    <div className={`flex flex-col ${divClass}`}>
      {label && (
        <label className="font-normal text-xs mb-[5px]" htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <input
        required={required}
        className={`${className} ${defaultClass}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        name={name}
        id={id}
        onBlur={onBlur}
        value={value}
        onFocus={onFocus}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputField;
