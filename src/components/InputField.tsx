import { InputFieldProps } from "./componentsProps";

export const InputField: React.FC<InputFieldProps> = ({
  className,
  labelName,
  register,
  errorMessage,
  type,
}) => {
  return (
    <div>
      <label className="text-base mb-2 text-gray-700">
        {labelName}

        <input
          className={`w-full p-2.5 mt-2 mb-1.5 border rounded-xl text-base focus:outline-none focus:border-blue-500 ${className} ${
            errorMessage
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300"
          }`}
          type={type}
          {...register}
        />
        {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
      </label>
    </div>
  );
};
