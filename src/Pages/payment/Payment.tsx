import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormField, InputField } from "../../components";
import { PaymentFormValidation } from "../../hooks/Validation";
import PaymentMethods from "./components/PaymentMethods";

type PaymentOption = "card" | "bank";

const PAYMENT_METHODS = [
  {
    label: "Credit or Debit Card",
    value: "card",
  },
  {
    label: "Bank Transfer",
    value: "bank",
  },
];
const Payment = () => {
  const { userId } = useParams();
  // const { userDatas } = GetUsers();
  const { paymentRegister, paymentHandleSubmit, paymentFormState } =
    PaymentFormValidation();
  const Navigate = useNavigate();
  const [selected, setSelected] = useState<PaymentOption>("card");

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
    <main className="flex gap-5 items-center justify-center h-screen">
      <form onSubmit={onSubmit}>
        <FormField className="flex-col gap-4 p-5 w-auto">
          <div className="flex justify-center gap-4">
            {PAYMENT_METHODS.map((method) => (
              <PaymentMethods
                key={method.value}
                label={method.label}
                value={method.value}
                selected={selected === method.value}
                onSelect={(val) => setSelected(val as PaymentOption)}
              />
            ))}
          </div>
          <InputField
            labelName="Cardholder's Name"
            errorMessage={paymentFormState.errors.nameOnCard?.message}
            register={paymentRegister("nameOnCard")}
          />
          <InputField
            labelName="Card Number"
            errorMessage={paymentFormState.errors.cardNumber?.message}
            register={paymentRegister("cardNumber")}
          />
          <InputField
            labelName="CVV"
            errorMessage={paymentFormState.errors.cvv?.message}
            register={paymentRegister("cvv")}
          />
          <InputField
            labelName="EXPIRY"
            errorMessage={paymentFormState.errors.validTHRU?.message}
            register={paymentRegister("validTHRU")}
          />

          <Button onClick={onSubmit} type="submit">
            Bayar Sekarang
          </Button>
        </FormField>
      </form>
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

export default Payment;
