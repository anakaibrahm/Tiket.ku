import { DropDownProps } from "./componentsProps";

export const Dropdown: React.FC<DropDownProps> = ({
  labelName,
  defaultValue,
  options,
  register,
  errorMessage,
}) => {
  return (
    <div>
      <label className="text-base mb-2 text-gray-700">
        {labelName}

        <select
          className={`w-full p-2.5 mt-2 mb-[5px] border rounded-xl text-base focus:outline-none focus:border-blue-500 ${
            errorMessage
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300"
          }`}
          {...register}
          defaultValue={defaultValue || ""}
        >
          <option value="" disabled>
            -- Please select an option --
          </option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
      </label>
    </div>
  );
};
