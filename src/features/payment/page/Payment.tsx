import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormField, InputField } from "../../../components";
import PaymentMethods from "../components/PaymentMethods";
import { PaymentFormValidation } from "../hooks/usePayment";

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
  const { register, handleSubmit, formState } = PaymentFormValidation();
  const Navigate = useNavigate();
  const [selected, setSelected] = useState<PaymentOption>("card");

  // const user = userDatas.find((u) => u.id === userId);

  const onSubmit = handleSubmit(() => {
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
            errorMessage={formState.errors.nameOnCard?.message}
            register={register("nameOnCard")}
          />
          <InputField
            labelName="Card Number"
            errorMessage={formState.errors.cardNumber?.message}
            register={register("cardNumber")}
          />
          <InputField
            labelName="CVV"
            errorMessage={formState.errors.cvv?.message}
            register={register("cvv")}
          />
          <InputField
            labelName="EXPIRY"
            errorMessage={formState.errors.validTHRU?.message}
            register={register("validTHRU")}
          />

          <Button onClick={onSubmit} type="submit">
            Bayar Sekarang
          </Button>
        </FormField>
      </form>
    </main>
  );
};

export default Payment;
