import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { GetDatas } from "../../api/datas";
import { FormUserValidation } from "../../hooks/Validation";
import { PostDatas } from "../../api/datas";
import { FormInput, FormSelect } from "./components";
import { useNavigate } from "react-router-dom";
import TicketCard from "./components/TicketCard";

const TicketOrderPage = () => {
  const { userRegister, userFormState, userHandleSubmit } =
    FormUserValidation();
  const { matchDatas, setTicketOptions, ticketOptions } = GetDatas();
  const { postUserDatas } = PostDatas();
  const Navigate = useNavigate();

  // const selectedTribun = userWatch("tribun");

  // const tribunData =
  //   matchDatas.length > 0 &&
  //   matchDatas[0].tickets &&
  //   matchDatas[0].tickets.length > 0 &&
  //   selectedTribun
  //     ? matchDatas[0].tickets[0][selectedTribun]
  //     : null;

  useEffect(() => {
    if (matchDatas.length > 0 && ticketOptions.length === 0) {
      const tribunlist = matchDatas[0].tickets;
      const keys = Object.keys(tribunlist[0]);
      const keysmapped = keys.map((key) => ({
        value: key,
        label: key,
      }));
      setTicketOptions(keysmapped);
    }
  }, [matchDatas, setTicketOptions, ticketOptions]);

  const matchId = sessionStorage.getItem("selectedMatchId");
  const selectedMatch = matchDatas.find((match) => match.matchId === matchId);
  const tickets =
    selectedMatch && selectedMatch.tickets && selectedMatch.tickets.length > 0
      ? selectedMatch.tickets[0]
      : {};

  const onSubmit = userHandleSubmit(async (values) => {
    try {
      const newCustomer = await postUserDatas(values);
      if (!newCustomer || !newCustomer.id) {
        alert("gagal");
        return;
      }
      Navigate(`/matchs/${matchId}/payment/${newCustomer.id}`);
      sessionStorage.setItem("selectedUserId", newCustomer.id);
    } catch (error) {
      console.error(error);
      alert("gagal");
    }
    // console.log(values);
  });
  // {
  //   matchDatas.map((data) => console.log(data.tickets));
  // }

  return (
    <main className="flex gap-5 items-center justify-center h-screen">
      <form className="flex gap-5 items-center" onSubmit={onSubmit}>
        <div className="flex flex-col bg-[#f9f9f9] max-h-[300px] overflow-y-scroll px-3 shadow-sm rounded-xl">
          {tickets &&
            Object.entries(tickets).map(([tribune, info]) => (
              <TicketCard key={tribune} tribune={tribune} price={info.price} />
            ))}
        </div>
        <div className="flex flex-col gap-4 justify-center p-5 bg-[#f9f9f9] rounded-xl shadow-sm">
          <FormInput
            labelName="Nama Lengkap:"
            register={userRegister("fullName")}
            errorMessage={userFormState.errors.fullName?.message}
          />
          <FormSelect
            labelName="Jenis Kelamin:"
            register={userRegister("gender")}
            options={[
              { value: "Laki-laki", label: "Laki-laki" },
              { value: "Perempuan", label: "Perempuan" },
            ]}
            errorMessage={userFormState.errors.gender?.message}
          />

          <FormInput
            labelName="Nomor Identitas"
            register={userRegister("identityNumber")}
            errorMessage={userFormState.errors.identityNumber?.message}
          />

          <FormInput
            labelName="Email:"
            register={userRegister("email")}
            errorMessage={userFormState.errors.email?.message}
          />

          <button
            className="col-span-2 bg-blue-500 p-2.5 text-white  hover:bg-blue-600 cursor-pointer transition-all w-full mx-auto rounded-xl"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default TicketOrderPage;
