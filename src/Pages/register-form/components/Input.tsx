import { FormUserInput } from "../../../types/auth";

export const FormInput: React.FC<FormUserInput> = ({
  className,
  labelName,
  register,
  errorMessage,
}) => {
  return (
    <div>
      <label>{labelName}</label>
      <input type="text" {...register} />
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};
