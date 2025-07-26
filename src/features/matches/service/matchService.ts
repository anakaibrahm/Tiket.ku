import { supabase } from "../../../lib/supabase";
import { MatchPayload } from "../types/matchesPayload";

export const getMatches = async (): Promise<MatchPayload[]> => {
  const { data, error } = await supabase.from("matches").select("*");
  console.log(data);
  console.log(error);
  if (error) throw error;
  return data as MatchPayload[];
};
