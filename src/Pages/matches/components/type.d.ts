export interface MatchCard {
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  matchTime: string;
  timeZone: string;
  matchDate: string;
  stadium: string;
  onClick?: () => void;
}

export interface TeamSectionProps {
  name: string;
  logo: string;
}
