import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, FormField, InputField } from "../../../components";
import { useMatchData } from "../../matches/hooks/useMatchData";
import TicketCard from "../components/TicketCard";
import { useUserRegister } from "../hooks/useUserRegister";
import { registerUser } from "../service/userServices";

const RegisterForm = () => {
  const [ticketCounts, setTicketCounts] = useState<{
    [tribune: string]: number;
  }>({});
  const { register, handleSubmit, formState, control } = useUserRegister();
  const Navigate = useNavigate();
  const { matches } = useMatchData();

  const matchId = sessionStorage.getItem("selectedMatchId");
  const selectedMatch = matches.find((match) => match.matchId === matchId);
  const tribunList =
    selectedMatch && selectedMatch.tickets && selectedMatch.tickets.length > 0
      ? Object.entries(selectedMatch.tickets[0])
      : [];
  const onTicketCountChange = (tribune: string, count: number) => {
    setTicketCounts((prev) => ({
      ...prev,
      [tribune]: count,
    }));
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = { ...values, tickets: ticketCounts };
      const newCustomer = await registerUser(payload);
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

  return (
    <main className="flex gap-5 items-center justify-center h-screen">
      <form className="flex gap-5 items-center" onSubmit={onSubmit}>
        <FormField className="flex-col py-3 px-3">
          {tribunList.map(([tribune, info]) => (
            <TicketCard
              key={tribune}
              name={`tickets.${tribune}`}
              price={info.price}
              control={control}
              tribune={tribune}
              count={ticketCounts[tribune] || 0}
              onCountChange={(count) => onTicketCountChange(tribune, count)}
            />
          ))}
        </FormField>
        <FormField className="flex-col gap-4 justify-center p-5">
          <InputField
            labelName="Nama Lengkap:"
            register={register("fullName")}
            errorMessage={formState.errors.fullName?.message}
          />
          <Dropdown
            labelName="Jenis Kelamin:"
            register={register("gender")}
            options={[
              { value: "Laki-laki", label: "Laki-laki" },
              { value: "Perempuan", label: "Perempuan" },
            ]}
            errorMessage={formState.errors.gender?.message}
          />

          <InputField
            labelName="Nomor Identitas"
            register={register("identityNumber")}
            errorMessage={formState.errors.identityNumber?.message}
          />

          <InputField
            labelName="Email:"
            register={register("email")}
            errorMessage={formState.errors.email?.message}
          />

          <Button
            className="col-span-2 hover:bg-blue-600 transition-all mx-auto"
            type="submit"
          >
            Submit
          </Button>
        </FormField>
      </form>
    </main>
  );
};

export default RegisterForm;
