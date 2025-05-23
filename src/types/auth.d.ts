import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

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
  className?: string;
  labelName: string;
  defaultValue?: number;
  options: { value: string | number; label: string }[];
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

export interface FormUserInput {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
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