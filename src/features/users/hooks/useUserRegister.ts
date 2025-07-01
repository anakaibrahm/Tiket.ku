import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userSchema, UserSchema } from "../schemas/userSchema";

export const useUserRegister = () => {
  const methods = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      fullName: "",
      identityNumber: "",
      email: "",
      gender: "",
      tickets: {},
    },
  });

  return { ...methods };
};
