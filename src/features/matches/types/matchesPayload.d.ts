interface TeamPayload {
  name: string;
  logo: string;
}

export interface MatchPayload {
  id: string;
  matchId: string;
  team1: TeamPayload;
  team2: TeamPayload;
  matchTime: string;
  timeZone: string;
  matchDate: string;
  stadium: string;
  tickets: Array<Record<string, { available: string; price: string }>>;
}
