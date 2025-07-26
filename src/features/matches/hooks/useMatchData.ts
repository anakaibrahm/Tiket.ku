// src/features/match/hooks/useMatchData.ts
import { useEffect, useState } from "react";
import { getMatches } from "../service/matchService";
import { MatchPayload } from "../types/matchesPayload";

export const useMatchData = () => {
  const [matches, setMatches] = useState<MatchPayload[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getMatches();
      setMatches(data);
    };
    fetch();
  }, []);

  return { matches };
};
