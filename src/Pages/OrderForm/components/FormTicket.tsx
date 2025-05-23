import { FormUserTicket } from "../../../types/auth";
import styles from "../OrderFormPage.module.css";
import { TicketsCounter } from "../../../hooks/TicketsCounter";
import { useEffect } from "react";

export const FormTicket: React.FC<FormUserTicket> = ({
  labelName,
  register,
  errorMessage,
  setValue,
}) => {
  const { ticketIncrease, ticketDecrease, TicketsCount } = TicketsCounter(1);

  useEffect(() => {
    setValue("numberOfTickets", TicketsCount);
  }, [TicketsCount, setValue]);

  return (
    <div className={styles["section-5"]}>
      <label
        className={`${styles["form-label-5"]} text-base !mb-2 text-gray-700`}
      >
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
        className={`${styles["form-input-5"]} w-full !p-2.5 border rounded-[4px] text-base`}
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
