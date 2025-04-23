import { useState, useEffect } from "react";

interface Team {
  name: string;
  logo: string;
}

interface Match {
  id: string;
  matchId: string;
  team1: Team;
  team2: Team;
  matchTime: string;
  timeZone: string;
  matchDate: string;
  stadium: string;
  tickets: string[];
  ticketsAvailable: Record<string, { available: string; price: string }>;
}

export const MatchData = (
  matchId?: string,
  team1?: { name: string },
  team2?: { name: string }
) => {
  const [matchScheduleData, setMatchScheduleData] = useState<Match[]>([]);
  const [matchTicketData, setMatchTicketData] = useState<
    { ticket: string; available: string; price: string }[]
  >([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  useEffect(() => {
    const fetchMatchData = async () => {
      const response = await fetch("http://localhost:2000/matchs", {
        method: "GET",
      });
      const matchs = (await response.json()) as Match[];
      setMatchScheduleData(matchs);
      if (matchId) {
        const match = matchs.find((m) => m.matchId === matchId);
        setSelectedMatch(match || null);
        if (match) {
          const ticket = Object.entries(match.ticketsAvailable).map(
            ([ticket, details]) => ({
              ticket,
              available: details.available || "0",
              price: details.price || "0",
            })
          );
          setMatchTicketData(ticket);
        }
      } else {
        const ticket = matchs.flatMap((match) =>
          Object.entries(match.ticketsAvailable).map(([ticket, details]) => ({
            ticket,
            available: details.available || "0",
            price: details.price || "0",
          }))
        );
        setMatchTicketData(ticket);
      }
    };
    fetchMatchData();
  }, [matchId, team1?.name, team2?.name]);

  return { matchScheduleData, matchTicketData, selectedMatch };
};
