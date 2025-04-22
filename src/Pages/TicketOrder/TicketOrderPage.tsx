import React, { useState } from "react";
import styles from "./TicketOrderPage.module.css";

interface FormData {
  fullName: string;
  gender: string;
  email: string;
  phoneNumber: string;
  NIK: string;
  Tribun: string;
  numberOfTickets: number;
}

const TicketOrderPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    NIK: "",
    Tribun: "",
    numberOfTickets: 1, // Nilai default
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Data Formulir:", formData);
    // Di sini Anda akan mengirimkan data pemesanan ke server atau melakukan tindakan lain.
    alert("Pemesanan Anda sedang diproses!");
  };

  return (
    <main className={styles["ticket-order-container"]}>
      <form onSubmit={handleSubmit} className={styles["ticket-order-form"]}>
        <div>
          <label
            htmlFor="fullName"
            className={styles["ticket-order-label"]}
          ></label>
          Nama Lengkap
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={styles["ticket-order-input"]}
          />
        </div>
        <div>
          <label
            htmlFor="identificationNumber"
            className={styles["ticket-order-label"]}
          >
            NIK
          </label>
          <input
            type="text"
            id="identificationNumber"
            name="identificationNumber"
            value={formData.NIK}
            onChange={handleChange}
            className={styles["ticket-order-input"]}
            required
          />
        </div>
        <div>
          <label htmlFor="gender" className={styles["ticket-order-label"]}>
            Jenis Kelamin
          </label>
          <select className={styles["ticket-order-input"]}>
            <option value="lakilaki" selected disabled>
              -- Please select an option --
            </option>
            <option value="lakilaki">Laki-Laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>
        <div>
          <label htmlFor="email" className={styles["ticket-order-label"]}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles["ticket-order-input"]}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className={styles["ticket-order-label"]}>
            Nomor Telepon
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={styles["ticket-order-input"]}
            required
          />
        </div>
        <div>
          <label htmlFor="match" className={styles["ticket-order-label"]}>
            Tribun
          </label>
          <select className={styles["ticket-order-input"]}>
            <option value="VIP1" selected disabled>
              -- Please select an option --
            </option>
            <option value="VIP1">VIP Barat</option>
            <option value="VIP2">VIP Timur</option>
            <option value="Garuda1">Garuda Barat</option>
            <option value="Garuda2">Garuda Timur</option>
            <option value="Garuda3">Garuda Utara</option>
            <option value="Garuda4">Garuda Selatan</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="numberOfTickets"
            className={styles["ticket-order-label"]}
          >
            Jumlah Tiket
          </label>
          <input
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
            min="1"
            required
            className={styles["ticket-order-input"]}
          />
        </div>
        <button type="submit" className={styles["ticket-order-button"]}>
          Pesan Tiket
        </button>
      </form>
    </main>
  );
};

export default TicketOrderPage;
