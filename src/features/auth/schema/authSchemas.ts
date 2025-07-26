import { z } from "zod";

const errorMessageInput = z.string().nonempty({ message: "field is empty" });

export const authSchema = z.object({
  // name: errorMessageInput,
  email: errorMessageInput.email({ message: "Email tidak valid" }),
  password: errorMessageInput
    .min(6, { message: "Password minimal 6 karakter" })
    .max(20, { message: "Password maksimal 20 karakter" }),
});

export type AuthSchema = z.infer<typeof authSchema>;
