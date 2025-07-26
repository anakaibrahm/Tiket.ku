import { z } from "zod";

const errorMessageInput = z.string().nonempty({ message: "field is empty" });
const errorMessageOption = z.string().nonempty({ message: "select an option" });

export const userSchema = z.object({
  fullName: errorMessageInput.regex(/^[A-Za-z\s]+$/, {
    message: "Hanya huruf yang diperbolehkan",
  }),
  identityNumber: errorMessageInput.regex(/^\d+$/, {
    message: "Hanya angka yang diperbolehkan",
  }),
  email: errorMessageInput.email({ message: "Email tidak valid" }),
  gender: errorMessageOption,
  tickets: z.record(z.number()),
});

export type UserSchema = z.infer<typeof userSchema>;
