import React from "react";

interface PaymentMethodsProps {
  label: string;
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  label,
  value,
  selected,
  onSelect,
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`flex items-center gap-3 border rounded-lg px-5 py-3 min-w-[180px] justify-center transition-colors duration-300
        ${
          selected
            ? "border-blue-500 bg-blue-100 text-blue-600"
            : "border-gray-300 text-gray-300 hover:border-blue-600 hover:text-blue-700"
        }
        focus:outline-none focus:ring-purple-400 cursor-pointer
      `}
      aria-pressed={selected}
    >
      {/* <span className="material-icons text-purple-600 text-lg">{icon}</span> */}
      <span className="font-medium text-base">{label}</span>
    </button>
  );
};

export default PaymentMethods;
