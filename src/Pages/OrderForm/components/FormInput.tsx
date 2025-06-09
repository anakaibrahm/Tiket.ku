import { FormUserInput } from "../../../types/auth";

export const FormInput: React.FC<FormUserInput> = ({
  className,
  labelName,
  register,
  errorMessage,
}) => {
  return (
    <div className={className}>
      <label className={"text-base mb-2 text-gray-700"}>{labelName}</label>
      <input
        type="text"
        className={`w-full p-2.5 mt-2 mb-[5px] border rounded-xl text-base ${
          errorMessage ? "border-red-500" : "border-gray-300"
        } }`}
        {...register}
      />
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};
