import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authSchema, AuthSchema } from "../schema/authSchemas";

export const useAuth = () => {
  const methods = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });
  return { ...methods };
};
