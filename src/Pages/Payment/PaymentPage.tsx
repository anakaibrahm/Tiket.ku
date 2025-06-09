import styles from "./PaymentPage.module.css";
import { GetUsers } from "../../api/datas";
import { PaymentFormValidation } from "../../hooks/Validation";
import { CardNumberInput, ExpirationInput, PaymentInput } from "./components";
import { useNavigate, useParams } from "react-router-dom";
import TicketCard from "../OrderForm/components/TicketCard";
const PaymentPage = () => {
  const { userId } = useParams();
  // const { userDatas } = GetUsers();
  const { paymentRegister, paymentHandleSubmit, paymentFormState } =
    PaymentFormValidation();
  const Navigate = useNavigate();

  // const user = userDatas.find((u) => u.id === userId);

  const onSubmit = paymentHandleSubmit(() => {
    Navigate(`/user/${userId}/ticket`);
    // if (user) {
    // localStorage.setItem("selectedUserId", String(user.id));
    // }
    // Navigate("/ticket");
  });

  // if (!user) return <div>error</div>;

  return (
    <main className={styles["page-container"]}>
      <section className={styles["payment-container"]}>
        <form className={styles["payment-form"]} onSubmit={onSubmit}>
          <PaymentInput
            index={1}
            type="text"
            labelName="Nama Pemilik Kartu"
            register={paymentRegister("nameOnCard")}
            errorMessage={paymentFormState.errors.nameOnCard?.message}
          />

          <PaymentInput
            index={2}
            type="text"
            labelName="Nomor Kartu"
            register={paymentRegister("cardNumber")}
            errorMessage={paymentFormState.errors.cardNumber?.message}
          />

          <PaymentInput
            index={3}
            type="text"
            labelName="CVV"
            register={paymentRegister("cvv")}
            errorMessage={paymentFormState.errors.cvv?.message}
          />

          <PaymentInput
            index={4}
            type="text"
            labelName="VALID THRU"
            register={paymentRegister("validTHRU")}
            errorMessage={paymentFormState.errors.validTHRU?.message}
          />

          <button className={styles.button}>Bayar Sekarang</button>
        </form>
      </section>
    </main>
  );
};
{
  /* <CardNumberInput
    index={2}
    type="text"
    labelName="Nomor Kartu"
    register={(i) => paymentRegister(`cardNumber.${i}`)}
    errorMessage={paymentFormState.errors.cardNumber?.message}
    maxLength={4}
  /> */
}
{
  /* <ExpirationInput
    index={4}
    type="text"
    labelName="VALID THRU"
    maxLength={2}
    register={paymentRegister("validTHRU")}
    errorMessage={paymentFormState.errors.validTHRU?.message}
  /> */
}

export default PaymentPage;
