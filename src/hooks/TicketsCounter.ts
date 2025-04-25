import { useState } from "react";

export const TicketsCounter = (defaultValue: 1) => {
  const [TicketsCount, setTicketCount] = useState<number>(defaultValue);

  const ticketIncrease = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  const ticketDecrease = () => {
    setTicketCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  return { ticketDecrease, ticketIncrease, TicketsCount };
};
