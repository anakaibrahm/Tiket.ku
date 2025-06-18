import { useEffect, useState } from "react";
import { getUsers } from "../service/userServices";
import { User } from "../types/userPayload";

export const useUsers = () => {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        if (data) setUserData(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchUsers();
  }, []);

  return { userData };
};
