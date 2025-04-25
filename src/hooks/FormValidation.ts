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
  NIK: z
    .string()
    .nonempty({ message: "field is empty" })
    .min(16, { message: "angka yang dimasukkan kurang dari 16" })
    .refine((value) => /\d/.test(value), {
      message: "nomor induk kependudukan tidak boleh mengandung unsur huruf",
    }),
  numberOfTickets: z.string(),
  tribun: errorMessageOption,
});

type TicketOrderFormSchema = z.infer<typeof ticketOrderFormSchema>;

export const FormValidation = () => {
  const { register, handleSubmit, formState, setValue } =
    useForm<TicketOrderFormSchema>({
      resolver: zodResolver(ticketOrderFormSchema),
    });

  return { register, handleSubmit, formState, setValue };
};
