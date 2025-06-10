import { useEffect, useState } from "react";
import { axiosInstance } from "./axios";
import { UserDatas } from "../types/auth";
import { MatchData } from "../types/auth";

export const GetDatas = () => {
  const [matchDatas, setMatchDatas] = useState<MatchData[]>([]);
  const [ticketOptions, setTicketOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDatas = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get<MatchData[]>("/matchs");
        const data = res.data;
        setMatchDatas(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getDatas();
  }, []);

  return { matchDatas, ticketOptions, setTicketOptions, loading };
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
