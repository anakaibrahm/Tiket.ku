export interface ButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface InputFieldProps {
  className?: string;
  labelName: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
  type?: string;
}

export interface DropDownProps {
  labelName: string;
  defaultValue?: number;
  options: { value: string | number; label: string }[];
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

export interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}
