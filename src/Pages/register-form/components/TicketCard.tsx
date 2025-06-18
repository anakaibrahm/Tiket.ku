// import { GetDatas } from "../../../api/datas";
import React from "react";
import { TicketsCounter } from "../../../hooks/TicketsCounter";

interface TicketCardProps {
  tribune: string;
  price: string;
  count: number;
  onCountChange: (count: number) => void;
}

const TicketCard: React.FC<TicketCardProps> = ({ tribune, price }) => {
  const { ticketDecrease, ticketIncrease, TicketsCount } = TicketsCounter(0);

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
            onClick={ticketDecrease}
            type="button"
          >
            −
          </button>
          <span className="px-4 py-1 font-semibold text-gray-900">
            {TicketsCount}
          </span>
          <button
            className="px-3 py-1 text-gray-700 font-semibold hover:bg-gray-100"
            onClick={ticketIncrease}
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
