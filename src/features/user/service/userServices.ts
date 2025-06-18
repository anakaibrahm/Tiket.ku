import { api } from "../../../lib/apiClient";
import { User } from "../types/userPayload";

export const registerUser = async (data: User) => {
  try {
    const response = await api.post<User>("/users", data);
    return response.data;
  } catch (error) {
    console.log("Error registering user:", error);
    return null;
  }
};
export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.log("Error getting users:", error);
  }
};
