import { UseFormRegisterReturn } from "react-hook-form";
import styles from "../OrderFormPage.module.css";
import { ReactNode } from "react";

interface OrderForm {
  labelName?: string;
  type?: string;
  options?: { value: string | number; label: string }[];
  defaultValue?: number;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  minValue?: number;
  readOnly?: boolean;
  index: number;
  children?: ReactNode;
  value?: number;
}

const OrderForm: React.FC<OrderForm> = ({
  labelName,
  type = "text",
  defaultValue,
  options,
  register,
  errorMessage,
  minValue,
  readOnly = false,
  index,
  children,
  value,
}) => {
  const inputClassName = `${styles["form-input"]} ${
    styles[`form-input-${index}`]
  }`;
  const labelClassName = `${styles["form-label"]} ${
    styles[`form-label${index}`]
  }`;

  return (
    <section className={styles[`section-${index}`]}>
      <label className={labelClassName}>{labelName}</label>
      {type === "select" && options ? (
        <select
          className={inputClassName}
          {...register}
          defaultValue={defaultValue || ""}
        >
          <option value="" disabled>
            -- Please select an option --
          </option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          type={type}
          className={inputClassName}
          {...register}
          min={minValue}
          readOnly={readOnly}
          value={value}
        />
      )}

      {errorMessage && (
        <p className={styles["form-error-message"]}>{errorMessage}</p>
      )}
      {children}
    </section>
  );
};
export default OrderForm;
