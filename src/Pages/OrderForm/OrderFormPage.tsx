import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import styles from "./OrderFormPage.module.css";
import { GetData } from "../../api/datas";
import OrderForm from "./components/OrderForm";
import { TicketsCounter } from "../../hooks/TicketsCounter";
import { FormValidation } from "../../hooks/FormValidation";

const TicketOrderPage = () => {
  const { register, formState, handleSubmit, setValue } = FormValidation();
  const { ticketIncrease, ticketDecrease, TicketsCount } = TicketsCounter(1);
  const { datas, setTickets, tickets } = GetData();

  useEffect(() => {
    if (datas.length > 0 && tickets.length === 0) {
      const tribunlist = datas[0].tickets;
      const keys = Object.keys(tribunlist[0]);
      const keysmapped = keys.map((key) => ({
        value: key,
        label: key,
      }));
      setTickets(keysmapped);
    }
  }, [datas, setTickets, tickets]);

  useEffect(() => {
    setValue("numberOfTickets", TicketsCount);
  }, [TicketsCount, setValue]);

  const onSubmit = handleSubmit((value) => {
    alert(
      `fullname: ${value.fullName} || email: ${value.email} || gender: ${value.gender} || NOT: ${value.numberOfTickets} || tribun: ${value.tribun}`
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
          index={3}
          type="email"
          labelName="Email"
          register={register("email")}
          errorMessage={formState.errors.email?.message}
        />

        <OrderForm
          index={4}
          labelName="Tribun"
          register={register("tribun")}
          type="select"
          options={tickets}
          errorMessage={formState.errors.tribun?.message}
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
            disabled={TicketsCount <= 1}
          >
            -
          </button>
        </OrderForm>
        <button className={styles["form-button"]} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default TicketOrderPage;
