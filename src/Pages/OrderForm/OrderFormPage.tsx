import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import styles from "./OrderFormPage.module.css";
import { MatchData } from "../../hooks/MatchData";
import OrderForm from "./components/OrderForm";
import { TicketsCounter } from "../../hooks/TicketsCounter";
import { FormValidation } from "../../hooks/FormValidation";

const TicketOrderPage: React.FC = () => {
  // const { matchId } = useParams<{
  //   matchId: string;
  // }>();
  // const { matchTicketData } = MatchData(matchId);
  const { ticketDecrease, ticketIncrease, TicketsCount } = TicketsCounter(1);
  const { matchScheduleData } = MatchData();
  const [ticketData, setTicketData] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);
  const { register, handleSubmit, formState, setValue } = FormValidation();

  useEffect(() => {
    setValue("numberOfTickets", TicketsCount.toString());
  }, [TicketsCount, setValue]);

  useEffect(() => {
    if (matchScheduleData.length > 0) {
      const tickets = matchScheduleData[0].tickets.map((ticket) => ({
        value: ticket,
        label: ticket,
      }));
      setTicketData(tickets);
    }
  }, [matchScheduleData]);

  const onSubmit = handleSubmit((values) => {
    alert(
      `fullname: ${values.fullName} || email: ${values.email} || gender: ${values.gender} || NIK: ${values.NIK} || NOT: ${values.numberOfTickets} || tribun: ${values.tribun}`
    );
  });

  const buttonClassName = (buttonType: string) => {
    return `${styles["button"]} ${styles[`button-${buttonType}`]}`;
  };

  return (
    <main className={styles["page-container"]}>
      <form className={styles["form-container"]} onSubmit={onSubmit}>
        <OrderForm
          index={1}
          labelName="Nama Lengkap"
          register={register("fullName")}
          errorMessage={formState.errors.fullName?.message}
        />
        <OrderForm
          index={2}
          type="select"
          labelName="Jenis Kelamin"
          register={register("gender")}
          options={[
            { value: "Laki-laki", label: "Laki-laki" },
            { value: "Perempuan", label: "Perempuan" },
          ]}
          errorMessage={formState.errors.gender?.message}
        />
        <OrderForm
          index={2}
          type="email"
          labelName="Email"
          register={register("email")}
          errorMessage={formState.errors.email?.message}
        />
        <OrderForm
          index={4}
          labelName="Nomor Induk Kependudukan"
          register={register("NIK")}
          errorMessage={formState.errors.NIK?.message}
        />
        <OrderForm
          index={5}
          labelName="Jumlah Tiket"
          register={register("numberOfTickets")}
          readOnly={true}
          value={TicketsCount}
        >
          <button
            className={buttonClassName("increase")}
            type="button"
            onClick={ticketIncrease}
          >
            +
          </button>
          <button
            className={buttonClassName("decrease")}
            type="button"
            onClick={ticketDecrease}
          >
            -
          </button>
        </OrderForm>

        <OrderForm
          index={6}
          labelName="Tribun"
          register={register("tribun")}
          type="select"
          options={ticketData}
          errorMessage={formState.errors.tribun?.message}
        />

        <button className={styles["form-button"]} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default TicketOrderPage;
