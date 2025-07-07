import { API } from "../../../lib/apiClient";
import { MatchPayload } from "../types/matchesPayload.types";

export const getMatches = async (): Promise<MatchPayload[]> => {
  const response = await API.get<MatchPayload[]>("/matchs");
  return response.data;
};
