import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const errorMessageInput = z.string().nonempty({ message: "field is empty" });
const errorMessageOption = z.string().nonempty({ message: "select an option" });

const ticketOrderFormSchema = z.object({
  fullName: errorMessageInput.refine((value) => !/\d/.test(value), {
    message: "nama lengkap tidak boleh mengandung unsur angka",
  }),
  email: errorMessageInput.email(),
  gender: errorMessageOption,
  numberOfTickets: z.number(),
  tribun: errorMessageOption,
});

type TicketOrderFormSchema = z.infer<typeof ticketOrderFormSchema>;

export const FormValidation = () => {
  const { register, handleSubmit, formState, setValue, watch } =
    useForm<TicketOrderFormSchema>({
      resolver: zodResolver(ticketOrderFormSchema),
    });

  return { register, handleSubmit, formState, setValue, watch };
};
