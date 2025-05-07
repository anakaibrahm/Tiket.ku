import styles from "./PaymentPage.module.css";
import { GetUsers } from "../../api/datas";
const PaymentPage = () => {
  const { userDatas } = GetUsers();

  return (
    <main className={styles["page-container"]}>
      <div className={styles["details-container"]}>
        <h3>Rincian Pembayaran</h3>
        {userDatas.map((user) => (
          <div key={user.id} className={styles["details-content"]}>
            <p>{user.tribun}</p>
            <p>{user.numberOfTickets}x</p>
          </div>
        ))}
      </div>
      <div className={styles["payment-container"]}>
        <form className={styles["payment-form"]}>
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber">Nomor Kartu:</label>
            <div className={styles.cardInputContainer}>
              {Array.from({ length: 4 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={4}
                  className={styles["payment-input"]}
                  placeholder="0000"
                />
              ))}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="expiryDate">Tanggal Kadaluarsa (MM/YY):</label>
            <input
              type="text"
              id="expiryDate"
              required
              className={styles["payment-input"]}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              required
              className={styles["payment-input"]}
            />
          </div>
          <button className={styles.button}>Bayar Sekarang</button>
        </form>
      </div>
    </main>
  );
};

export default PaymentPage;
