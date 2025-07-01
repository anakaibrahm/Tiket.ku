import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { paymentSchema, PaymentSchema } from "../schemas/paymentSchema";

export const PaymentFormValidation = () => {
  const methods = useForm<PaymentSchema>({
    resolver: zodResolver(paymentSchema),
  });

  return {
    ...methods,
  };
};
