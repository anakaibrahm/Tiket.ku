interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}
export const Button = ({
  label,
  onClick,
  className,
  type = "button",
}: ButtonProps) => {
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
