import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import styles from "./OrderFormPage.module.css";
import { GetDatas } from "../../api/datas";
import { FormUserValidation } from "../../hooks/Validation";
import { PostDatas } from "../../api/datas";
import { FormInput, FormSelect, FormTicket } from "./components";
import { useNavigate, useParams } from "react-router-dom";

const TicketOrderPage = () => {
  const { userRegister, userFormState, userHandleSubmit, userSetValue } =
    FormUserValidation();
  const { matchDatas, setTicketOptions, ticketOptions } = GetDatas();
  const { postUserDatas } = PostDatas();
  const Navigate = useNavigate();

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

  const onSubmit = userHandleSubmit(async (values) => {
    try {
      const newCustomer = await postUserDatas(values);
      if (!newCustomer || !newCustomer.id) {
        alert("gagal");
        return;
      }
      Navigate(`/match-schedule/${newCustomer.id}`);
    } catch (error) {
      console.error(error);
      alert("gagal");
    }
    // console.log(values);
  });

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <form className={styles["form-container"]} onSubmit={onSubmit}>
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
          labelName="Email:"
          register={userRegister("email")}
          errorMessage={userFormState.errors.email?.message}
        />

        <FormSelect
          labelName="Tribun:"
          register={userRegister("tribun")}
          options={ticketOptions}
          errorMessage={userFormState.errors.tribun?.message}
        />

        <FormTicket
          labelName="Jumlah Tiket:"
          register={userRegister("numberOfTickets")}
          errorMessage={userFormState.errors.numberOfTickets?.message}
          setValue={userSetValue}
        />

        <button className={styles["form-button"]} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default TicketOrderPage;
