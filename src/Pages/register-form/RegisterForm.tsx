// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/user/service/userServices";
import { FormUserValidation } from "../../hooks/Validation";
// import { GetDatas, PostDatas } from "../../services/userService";
import { Button, Dropdown, FormField, InputField } from "../../components";
import TicketCard from "./components/TribunesCard";

const RegisterForm = () => {
  const { userRegister, userFormState, userHandleSubmit, userControl } =
    FormUserValidation();
  // const { matchDatas, setTicketOptions, ticketOptions } = GetDatas();
  // const { postUserDatas } = PostDatas();
  const Navigate = useNavigate();

  // const selectedTribun = userWatch("tribun");

  // const tribunData =
  //   matchDatas.length > 0 &&
  //   matchDatas[0].tickets &&
  //   matchDatas[0].tickets.length > 0 &&
  //   selectedTribun
  //     ? matchDatas[0].tickets[0][selectedTribun]
  //     : null;

  // useEffect(() => {
  //   if (matchDatas.length > 0 && ticketOptions.length === 0) {
  //     const tribunlist = matchDatas[0].tickets;
  //     const keys = Object.keys(tribunlist[0]);
  //     const keysmapped = keys.map((key) => ({
  //       value: key,
  //       label: key,
  //     }));
  //     setTicketOptions(keysmapped);
  //   }
  // }, [matchDatas, setTicketOptions, ticketOptions]);

  const matchId = sessionStorage.getItem("selectedMatchId");
  // const selectedMatch = matchDatas.find((match) => match.matchId === matchId);
  // const tickets =
  //   selectedMatch && selectedMatch.tickets && selectedMatch.tickets.length > 0
  //     ? selectedMatch.tickets[0]
  //     : {};

  const onSubmit = userHandleSubmit(async (values) => {
    try {
      const newCustomer = await registerUser(values);
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

  const tribunData = [
    { name: "VIP", price: "250000" },
    { name: "Reguler", price: "100000" },
  ];

  return (
    <main className="flex gap-5 items-center justify-center h-screen">
      <form className="flex gap-5 items-center" onSubmit={onSubmit}>
        <FormField className="flex-col py-3 px-3">
          {/* {tickets &&
            Object.entries(tickets).map(([tribune, info]) => (
            ))} */}
          {tribunData.map((tribune) => (
            <TicketCard
              key={tribune.name}
              name={`tickets.${tribune.name}`}
              price={tribune.price}
              control={userControl}
              tribune={tribune.name}
            />
          ))}
        </FormField>
        <FormField className="flex-col gap-4 justify-center p-5">
          <InputField
            labelName="Nama Lengkap:"
            register={userRegister("fullName")}
            errorMessage={userFormState.errors.fullName?.message}
          />
          <Dropdown
            labelName="Jenis Kelamin:"
            register={userRegister("gender")}
            options={[
              { value: "Laki-laki", label: "Laki-laki" },
              { value: "Perempuan", label: "Perempuan" },
            ]}
            errorMessage={userFormState.errors.gender?.message}
          />

          <InputField
            labelName="Nomor Identitas"
            register={userRegister("identityNumber")}
            errorMessage={userFormState.errors.identityNumber?.message}
          />

          <InputField
            labelName="Email:"
            register={userRegister("email")}
            errorMessage={userFormState.errors.email?.message}
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
