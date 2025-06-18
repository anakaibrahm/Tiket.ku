interface Team {
  name: string;
  logo: string;
}

export interface Match {
  id: string;
  matchId: string;
  team1: TeamData;
  team2: TeamData;
  matchTime: string;
  timeZone: string;
  matchDate: string;
  stadium: string;
  tickets: Array<Record<string, { available: string; price: string }>>;
}
