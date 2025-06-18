// import { GetDatas } from "../../../api/datas";
import React from "react";
// import { TicketsCounter } from "../../../hooks/TicketsCounter";
import { Control, useController } from "react-hook-form";
import { UserDatas } from "../../../types/auth";

interface TicketCardProps {
  name: `tickets.${string}`;
  price: string;
  control: Control<UserDatas>;
  tribune: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  name,
  price,
  control,
  tribune,
}) => {
  // const { ticketDecrease, ticketIncrease, TicketsCount } = TicketsCounter(0);
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue: 0,
  });

  const increment = () => onChange(value + 1);
  const decrement = () => onChange(Math.max(0, value - 1));
  return (
    <div className="w-80 flex items-center justify-between  p-6 ">
      <div className="flex items-center space-x-4">
        <div>
          <h3 className="font-semibold text-base text-[#1a1a1a] leading-tight">
            {tribune}
          </h3>
          <p className="font-bold text-lg mt-1 text-[#1a1a1a]">{price}</p>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden select-none">
          <button
            className="px-3 py-1 text-gray-700 font-semibold hover:bg-gray-100"
            type="button"
            onClick={decrement}
          >
            −
          </button>
          <span className="px-4 py-1 font-semibold text-gray-900">{value}</span>
          <button
            className="px-3 py-1 text-gray-700 font-semibold hover:bg-gray-100"
            onClick={increment}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
