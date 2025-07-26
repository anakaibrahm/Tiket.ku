export interface TeamPayload {
  name: string;
  logo: string;
}

export interface MatchPayload {
  match_id: string;
  team_home: string;
  logo_home: string;
  team_away: string;
  logo_away: string;
  match_date: string;
  match_time: string;
  time_zone: string;
  stadium: string;
}
