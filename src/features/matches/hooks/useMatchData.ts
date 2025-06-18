// src/features/match/hooks/useMatchData.ts
import { useEffect, useState } from "react";
import { getMatches } from "../service/matchService";
import { Match } from "../types/matchesPayload";

export const useMatchData = () => {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getMatches();
      setMatches(data);
    };
    fetch();
  }, []);

  return { matches };
};
