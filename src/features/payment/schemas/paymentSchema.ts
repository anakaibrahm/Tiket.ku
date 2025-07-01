import { z } from "zod";

const errorMessageInput = z.string().nonempty({ message: "field is empty" });

export const paymentSchema = z.object({
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

export type PaymentSchema = z.infer<typeof paymentSchema>;
