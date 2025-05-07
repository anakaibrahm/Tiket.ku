import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import styles from "./OrderFormPage.module.css";
import { GetDatas } from "../../api/datas";
import OrderForm from "./components/OrderForm";
import { TicketsCounter } from "../../hooks/TicketsCounter";
import { FormValidation } from "../../hooks/FormValidation";
import { PostDatas } from "../../api/datas";

const TicketOrderPage = () => {
  const { register, formState, handleSubmit, setValue } = FormValidation();
  const { ticketIncrease, ticketDecrease, TicketsCount } = TicketsCounter(1);
  const { matchDatas, setTicketOptions, ticketOptions } = GetDatas();
  const { postUserDatas } = PostDatas();

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

  useEffect(() => {
    setValue("numberOfTickets", TicketsCount);
  }, [TicketsCount, setValue]);

  const onSubmit = handleSubmit(async (value) => {
    try {
      await postUserDatas(value);
      alert("done");
    } catch (error) {
      console.error(error);
      alert("gagal");
    }
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
          options={ticketOptions}
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
