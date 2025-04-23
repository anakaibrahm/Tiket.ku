import { useEffect, useState } from "react";

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

export const FetchJSONData = (matchId?: string) => {
  const [matchScheduleData, setMatchScheduleData] = useState<Match[]>([]);
  const [ticketsData, setTicketsData] = useState<string[]>([]);
  const [ticketsAvailable, setTicketsAvailable] = useState<
    { ticket: string; available: string; price: string }[]
  >([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  useEffect(() => {
    fetch("/public/data/matchSchedule.json")
      .then((response) => response.json())
      .then((data: Match[]) => {
        setMatchScheduleData(data);

        if (matchId) {
          const match = data.find((m) => m.matchId === matchId);
          setSelectedMatch(match || null);
          if (match) {
            setTicketsData(match.tickets);
            const available = Object.entries(match.ticketsAvailable).map(
              ([ticket, details]) => ({
                ticket,
                available: details.available || "0",
                price: details.price || "0",
              })
            );
            setTicketsAvailable(available);
          }
        } else {
          const tickets = data.flatMap((match) => match.tickets);
          setTicketsData(tickets);
          const available = data.flatMap((match) =>
            Object.entries(match.ticketsAvailable).map(([ticket, details]) => ({
              ticket,
              available: details.available || "0",
              price: details.price || "0",
            }))
          );
          setTicketsAvailable(available);
        }
      });
  }, [matchId]);

  return { matchScheduleData, ticketsData, ticketsAvailable, selectedMatch };
};
