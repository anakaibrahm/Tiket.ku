import { FormFieldProps } from "./componentsProps";

export const FormField: React.FC<FormFieldProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex bg-[#f9f9f9] shadow-sm rounded-xl border border-gray-300 ${className}`}
    >
      {children}
    </div>
  );
};
