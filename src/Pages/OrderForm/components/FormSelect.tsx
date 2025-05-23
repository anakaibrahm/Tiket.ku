import { FormUserSelectInput } from "../../../types/auth";

export const FormSelect: React.FC<FormUserSelectInput> = ({
  labelName,
  defaultValue,
  options,
  register,
  className,
  errorMessage,
}) => {
  return (
    <div className={className}>
      <label className="text-base mb-2 text-gray-700">{labelName}</label>
      <select
        className="w-full !p-2.5 !mt-2 !mb-[5px] border rounded-[4px] text-base"
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
    </div>
  );
};
