<<<<<<< HEAD
import { UseFormRegisterReturn } from "react-hook-form";

interface TeamData {
  name: string;
  logo: string;
}

export interface MatchData {
  id: string;
  matchId: string;
  team1: TeamData;
  team2: TeamData;
  matchTime: string;
  timeZone: string;
  matchDate: string;
  stadium: string;
  tickets: Array<Record<string, { available: string; price: string }>>;
}

=======
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

>>>>>>> origin/main
export interface UserDatas {
  id?: string;
  fullName: string;
  email: string;
  gender: string;
  numberOfTickets: number;
  tribun: string;
}

export interface PaymentInput {
  index?: number;
  labelName?: string;
  type?: string;
  maxLength?: number;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  errorMessage?: string;
  key?: number;
}

export interface FormUserSelectInput {
<<<<<<< HEAD
=======
  className?: string;
>>>>>>> origin/main
  labelName: string;
  defaultValue?: number;
  options: { value: string | number; label: string }[];
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

export interface FormUserInput {
  className?: string;
<<<<<<< HEAD
=======
  inputClassName?: string;
  labelClassName?: string;
>>>>>>> origin/main
  labelName: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

export interface FormUserTicket {
  labelName: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  setValue: sting | number;
<<<<<<< HEAD
}

// export interface HomeCardSchedule {
//   team1: string;
//   team2: string;
//   matchTime: string;
//   stadium: string;
// }
=======
}
>>>>>>> origin/main
