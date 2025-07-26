interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
  onSubmit: () => void;
}
export const FormField: React.FC<FormFieldProps> = ({
  children,
  className,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div
        className={`flex bg-[#f9f9f9] shadow-sm rounded-xl border border-gray-300 ${className}`}
      >
        {children}
      </div>
    </form>
  );
};
