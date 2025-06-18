// import { useEffect, useState } from "react";

// export const PostDatas = () => {
//   const [userFormDatas, setUserFormDatas] = useState<UserDatas>({
//     id: "",
//     fullName: "",
//     email: "",
//     identityNumber: "",
//     gender: "",
//     tickets: {},
//   });

//   const postUserDatas = async (data: UserDatas) => {
//     try {
//       const res = await axiosInstance.post<UserDatas>("/users", data);
//       return res.data;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };
//   return { userFormDatas, setUserFormDatas, postUserDatas };
// };

// export const GetUsers = () => {
//   const [userDatas, setUserDatas] = useState<UserDatas[]>([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const res = await axiosInstance.get("/users");
//         const data = res.data;
//         setUserDatas(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getUsers();
//   }, []);
//   return { userDatas };
// };
