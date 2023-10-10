const InputSelect = ({
  label,
  options,
  name,
  onChange,
  optionsHolder,
  disabledSelect,
  className,
  countries,
  divClass,
  onClick,
  project,
  value,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full flex flex-col cursor-pointer ${divClass}`}
    >
      {label && <label className="font-normal text-xs mb-[5px]">{label}</label>}
      <div className="relative w-full flex items-center justify-center">
        {options ? (
          <select
            value={value}
            name={name}
            onChange={onChange}
            disabled={disabledSelect}
            className={`appearance-none capitalize flex items-center justify-center w-full h-[50px] border border-gunsmoke pl-2 text-sm bg-white rounded-lg outline-none focus:outline-none ${className}`}
          >
            {optionsHolder && <option>{optionsHolder}</option>}
            {options &&
              options.map((option, index) => (
                <option
                  className="capitalize"
                  key={index}
                  value={
                    countries ? option.name : project ? option.id : option.value
                  }
                >
                  {option.title} {option.name}
                </option>
              ))}
          </select>
        ) : (
          <select
            name={name}
            disabled={disabledSelect}
            className={`appearance-none capitalize flex items-center justify-center w-full h-[41px] pl-2 text-sm bg-white rounded-lg outline-none focus:outline-none ${className}`}
          >
            <option>{optionsHolder}</option>
          </select>
        )}
        <div className="absolute inset-y-0 right-0 flex items-center px-2 top-[2px] pointer-events-none">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4391 6.63501H8.76658H4.55908C3.83908 6.63501 3.47908 7.50501 3.98908 8.01501L7.87408 11.9C8.49658 12.5225 9.50908 12.5225 10.1316 11.9L11.6091 10.4225L14.0166 8.01501C14.5191 7.50501 14.1591 6.63501 13.4391 6.63501Z"
              fill="#000000"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InputSelect;
