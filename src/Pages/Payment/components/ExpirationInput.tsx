import { PaymentInput } from "../../../types/auth";
import styles from "../PaymentPage.module.css";

const expirationInput: React.FC<PaymentInput> = ({
  index,
  labelName,
  type,
  maxLength,
  register,
  errorMessage,
}) => {
  return (
    <div className={styles[`section-${index}`]}>
      <label className={styles["payment-label"]}>{labelName}</label>
      <div className={styles["expiration-input-container"]}>
        <input
          type={type}
          maxLength={maxLength}
          {...register}
          className={styles["payment-input"]}
        />
        <input
          type={type}
          maxLength={maxLength}
          {...register}
          className={styles["payment-input"]}
        />
      </div>
      {errorMessage && (
        <p className={styles["payment-error-message"]}>{errorMessage}</p>
      )}
    </div>
  );
};

export default expirationInput;
