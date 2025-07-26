import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  className?: string;
  labelName?: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
  type?: string;
  placeHolder?: string;
}
export const InputField = ({
  className,
  labelName,
  register,
  errorMessage,
  type,
  placeHolder,
}: InputFieldProps) => {
  return (
    <div>
      <label className="text-base mb-2 text-gray-700">
        {labelName}

        <input
          className={`w-full py-2 px-2.5 mt-2 mb-1.5 border rounded-xl text-[14px] focus:outline-none focus:border-blue-500 ${className} ${
            errorMessage
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300"
          }`}
          type={type}
          {...register}
          placeholder={placeHolder}
        />
        {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
      </label>
    </div>
  );
};
