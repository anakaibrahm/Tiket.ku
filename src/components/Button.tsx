import { ButtonProps } from "./componentsProps";

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type,
}) => {
  return (
    <button
      className={`bg-blue-500 p-2.5 w-full text-white rounded-xl cursor-pointer hover:bg-blue-600 transition-all mx-auto ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
