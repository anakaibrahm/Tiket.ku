import styles from "../PaymentPage.module.css";
import { PaymentInput } from "../../../types/auth";
import { UseFormRegisterReturn } from "react-hook-form";

const cardNumberInput: React.FC<
  PaymentInput & {
    register: (index: number) => UseFormRegisterReturn;
  }
> = ({
  index,
  labelName,
  type,
  maxLength,
  register,
  placeholder,
  errorMessage,
}) => {
  return (
    <div className={styles[`section-${index}`]}>
      <label className={styles["payment-label"]}>{labelName}</label>
      <div className={styles["card-number-input-container"]}>
        {Array.from({ length: 4 }).map((_, i) => (
          <input
            key={i}
            type={type}
            maxLength={maxLength}
            {...register[`cardNumber${i + 1}`]}
            placeholder={placeholder}
            className={`${styles["payment-input"]} ${styles["card-number-input"]}`}
          />
        ))}
      </div>
      {errorMessage && (
        <p className={styles["payment-error-message"]}>{errorMessage}</p>
      )}
    </div>
  );
};

export default cardNumberInput;
