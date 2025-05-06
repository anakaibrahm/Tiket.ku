import { useRef } from "react";
import styles from "./PaymentPage.module.css"; // Import CSS Module

const PaymentPage = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // Hanya ambil angka
    if (value.length >= 4) {
      inputRefs[index + 1].current.focus(); // Pindah ke input berikutnya
    }
    e.target.value = value.replace(/(\d{4})(?=\d)/g, "$1 "); // Format dengan spasi
  };

  return (
    <main className={styles["page-container"]}>
      <div className={styles["details-container"]}>
        <h3>Rincian Pembayaran</h3>
        <p>Garuda Timur 1x</p>
        <p>Total: $100</p>
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
                  ref={inputRefs[index]}
                  onChange={(e) => handleChange(e, index)}
                  className={styles.input}
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
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" required className={styles.input} />
          </div>
          <button type="submit" className={styles.submitButton}>
            Bayar Sekarang
          </button>
        </form>
      </div>
    </main>
  );
};

export default PaymentPage;
