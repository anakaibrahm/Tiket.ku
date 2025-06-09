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
  labelName: string;
  defaultValue?: number;
  options: { value: string | number; label: string }[];
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

export interface FormUserInput {
  className?: string;
  labelName: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

export interface FormUserTicket {
  labelName: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  setValue: sting | number;
}

// export interface HomeCardSchedule {
//   team1: string;
//   team2: string;
//   matchTime: string;
//   stadium: string;
// }
