import { useEffect, useState } from "react";
import { axiosInstance } from "./axios";

interface TeamData {
  name: string;
  logo: string;
}

interface MatchData {
  id: string;
  matchId: string;
  team1: TeamData;
  team2: TeamData;
  matchTime: string;
  timeZone: string;
  matchDate: string;
  stadium: string;
  tickets: Record<string, { available: string; price: string }>;
}

export const GetData = () => {
  const [datas, setDatas] = useState<MatchData[]>([]);
  const [tickets, setTickets] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);
  useEffect(() => {
    const getDatas = async () => {
      try {
        const response = await axiosInstance.get<MatchData[]>("/matchs");
        const matchs = response.data;
        setDatas(matchs);
      } catch (error) {
        console.error(error);
      }
    };
    getDatas();
  }, []);

  return { datas, tickets, setTickets };
};
