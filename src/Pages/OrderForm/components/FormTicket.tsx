import { FormUserTicket } from "../../../types/auth";
import { TicketsCounter } from "../../../hooks/TicketsCounter";
import { useEffect } from "react";

export const FormTicket: React.FC<FormUserTicket> = ({
  labelName,
  register,
  errorMessage,
  setValue,
}) => {
  const { ticketIncrease, ticketDecrease, TicketsCount } = TicketsCounter(0);

  useEffect(() => {
    setValue("numberOfTickets", TicketsCount);
  }, [TicketsCount, setValue]);

  return (
    <div className="grid grid-cols-[1.5fr_1fr_1.5fr] gap-x-1.5">
      <label className="text-base !mb-2 text-gray-700 col-span-3">
        {labelName}
      </label>
      <button
        type="button"
        className="flex justify-center items-center bg-blue-500 text-white border-none rounded-[4px] text-base cursor-pointer"
        onClick={ticketDecrease}
      >
        -
      </button>
      <input
        type="text"
        className="w-full !p-2.5 border rounded-[4px] text-base text-center"
        {...register}
        readOnly
        value={TicketsCount}
      />
      <button
        type="button"
        className="flex justify-center items-center bg-blue-500 text-white border-none rounded-[4px] text-base cursor-pointer"
        onClick={ticketIncrease}
      >
        +
      </button>
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};
