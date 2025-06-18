import { useState } from "react";
import { registerUser } from "../service/userServices";
import { User } from "../types/userPayload";

export const useUserRegister = () => {
  const [userRegister, setUserRegister] = useState<User>({
    id: "",
    fullName: "",
    email: "",
    identityNumber: "",
    gender: "",
    tickets: {},
  });

  return { userRegister, setUserRegister, registerUser };
};
