import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const errorMessageInput = z.string().nonempty({ message: "field is empty" });
const errorMessageOption = z.string().nonempty({ message: "select an option" });

const ticketOrderFormSchema = z.object({
  fullName: errorMessageInput.regex(/^[A-Za-z\s]+$/, {
    message: "Hanya huruf yang diperbolehkan",
  }),
  identityNumber: errorMessageInput.regex(/^\d+$/, {
    message: "Hanya angka yang diperbolehkan",
  }),
  email: errorMessageInput.email(),
  gender: errorMessageOption,
  tickets: z.record(z.number()),
});

type TicketOrderFormSchema = z.infer<typeof ticketOrderFormSchema>;

export const FormUserValidation = () => {
  // const methods = useForm<TicketOrderFormSchema>({
  //   resolver: zodResolver(ticketOrderFormSchema),
  //   defaultValues: {
  //     fullName: "",
  //     identityNumber: "",
  //     email: "",
  //     gender: "",
  //     tickets: {},
  //   }
  // });
  const { register, handleSubmit, formState, setValue, watch, control } =
    useForm<TicketOrderFormSchema>({
      resolver: zodResolver(ticketOrderFormSchema),
      defaultValues: {
        fullName: "",
        identityNumber: "",
        email: "",
        gender: "",
        tickets: {},
      },
    });

  return {
    userRegister: register,
    userHandleSubmit: handleSubmit,
    userFormState: formState,
    userSetValue: setValue,
    userWatch: watch,
    userControl: control,
  };
};

//===========================================================================================//

const paymentFormSchema = z.object({
  nameOnCard: errorMessageInput.regex(/^[A-Za-z\s]+$/, {
    message: "Hanya huruf yang diperbolehkan",
  }),
  cardNumber: errorMessageInput
    .regex(/^\d+$/, {
      message: "Hanya angka yang diperbolehkan",
    })

    .length(4, { message: "Masukkan 4 angka" }),
  cvv: errorMessageInput.regex(/^\d+$/, {
    message: "Hanya angka yang diperbolehkan",
  }),
  validTHRU: errorMessageInput.regex(/^\d+$/, {
    message: "Hanya angka yang diperbolehkan",
  }),
});

type PaymentFormSchema = z.infer<typeof paymentFormSchema>;

export const PaymentFormValidation = () => {
  const { register, handleSubmit, formState, setValue, watch } =
    useForm<PaymentFormSchema>({
      resolver: zodResolver(paymentFormSchema),
    });

  return {
    paymentRegister: register,
    paymentHandleSubmit: handleSubmit,
    paymentFormState: formState,
    paymentSetValue: setValue,
    paymentWatch: watch,
  };
};
