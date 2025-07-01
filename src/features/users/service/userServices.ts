import { API } from "../../../lib/apiClient";
import { UserPayload } from "../types/userPayload";

export const registerUser = async (data: UserPayload) => {
  try {
    const response = await API.post<UserPayload>("/users", data);
    return response.data;
  } catch (error) {
    console.log("Error registering user:", error);
    return null;
  }
};
export const getUsers = async () => {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    console.log("Error getting users:", error);
  }
};
