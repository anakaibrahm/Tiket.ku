import { PaymentInput } from "../../../types/auth";
import styles from "../PaymentPage.module.css";

const paymentInput: React.FC<PaymentInput> = ({
  index,
  labelName,
  type,
  maxLength,
  register,
  placeholder,
  errorMessage,
  key,
}) => {
  return (
    <div className={styles[`section-${index}`]}>
      <label className={styles["payment-label"]}>{labelName}</label>
      <input
        key={key}
        type={type}
        maxLength={maxLength}
        {...register}
        placeholder={placeholder}
        className={styles["payment-input"]}
      />
      {errorMessage && (
        <p className={styles["payment-error-message"]}>{errorMessage}</p>
      )}
    </div>
  );
};

export default paymentInput;
