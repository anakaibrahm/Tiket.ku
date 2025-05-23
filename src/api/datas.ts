import { useEffect, useState } from "react";
import { axiosInstance } from "./axios";
import { UserDatas } from "../types/auth";

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

export const GetDatas = () => {
  const [matchDatas, setMatchDatas] = useState<MatchData[]>([]);
  const [ticketOptions, setTicketOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const res = await axiosInstance.get<MatchData[]>("/matchs");
        const data = res.data;
        setMatchDatas(data);
      } catch (error) {
        console.error(error);
      }
    };
    getDatas();
  }, []);

  return { matchDatas, ticketOptions, setTicketOptions };
};

export const PostDatas = () => {
  const [userFormDatas, setUserFormDatas] = useState<UserDatas>({
    id: "",
    fullName: "",
    email: "",
    gender: "",
    numberOfTickets: 0,
    tribun: "",
  });

  const postUserDatas = async (data: UserDatas) => {
    try {
      const res = await axiosInstance.post<UserDatas>("/users", data);
      return res.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  return { userFormDatas, setUserFormDatas, postUserDatas };
};

export const GetUsers = () => {
  const [userDatas, setUserDatas] = useState<UserDatas[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axiosInstance.get("/users");
        const data = res.data;
        setUserDatas(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);
  return { userDatas };
};
