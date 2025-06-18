import { api } from "../../../lib/apiClient";
import { Match } from "../types/matchesPayload";

export const getMatches = async (): Promise<Match[]> => {
  const response = await api.get<Match[]>("/matchs");
  return response.data;
};
