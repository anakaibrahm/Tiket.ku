import { ButtonProps } from "./componentsProps";

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  type = "button",
}) => {
  return (
    <button
      className={`cursor-pointer transition-all leading-tight ${className}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
