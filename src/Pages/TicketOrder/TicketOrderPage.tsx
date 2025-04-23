import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./TicketOrderPage.module.css";
import { FetchJSONData } from "../../hooks/FetchJSONData";

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
  const { matchId } = useParams<{ matchId: string }>();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    NIK: "",
    Tribun: "",
    numberOfTickets: 1, // Nilai default
  });
  const [selectedTicket, setSelectedTicket] = useState<string>("");
  const { ticketsData, ticketsAvailable } = FetchJSONData(matchId);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "Tribun") {
      setSelectedTicket(value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Data Formulir:", formData);
    // Di sini Anda akan mengirimkan data pemesanan ke server atau melakukan tindakan lain.
    alert("Pemesanan Anda sedang diproses!");
  };

  const selectedTicketAvailability = ticketsAvailable.find(
    (ticket) => ticket.ticket === selectedTicket
  );

  const selectedTicketPrice = ticketsAvailable.find(
    (ticket) => ticket.ticket === selectedTicket
  )?.price;

  return (
    <main className={styles["ticket-order-container"]}>
      <form onSubmit={handleSubmit} className={styles["ticket-order-form"]}>
        <section>
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
        </section>
        <section>
          <label htmlFor="NIK" className={styles["ticket-order-label"]}>
            NIK
          </label>
          <input
            type="text"
            id="NIK"
            name="NIK"
            value={formData.NIK}
            onChange={handleChange}
            className={styles["ticket-order-input"]}
            required
          />
        </section>
        <section>
          <label htmlFor="gender" className={styles["ticket-order-label"]}>
            Jenis Kelamin
          </label>
          <select className={styles["ticket-order-input"]}>
            <option value="" selected disabled>
              -- Please select an option --
            </option>
            <option value="lakilaki">Laki-Laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </section>
        <section>
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
        </section>
        <section>
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
        </section>
        <section>
          <label htmlFor="match" className={styles["ticket-order-label"]}>
            Tribun
          </label>
          <select
            className={styles["ticket-order-input"]}
            name="Tribun"
            value={formData.Tribun}
            onChange={handleChange}
          >
            <option value="" selected disabled>
              -- Please select an option --
            </option>
            {ticketsData.flat().map((ticket, index) => (
              <option key={index} value={ticket}>
                {ticket}
              </option>
            ))}
            {/* <option value="VIP1">VIP Barat</option>
            <option value="VIP2">VIP Timur</option>
            <option value="Garuda1">Garuda Barat</option>
            <option value="Garuda2">Garuda Timur</option>
            <option value="Garuda3">Garuda Utara</option>
            <option value="Garuda4">Garuda Selatan</option> */}
          </select>
        </section>
        <section>
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
        </section>
        <section className={styles["section-8"]}>
          <h2>
            {selectedTicket
              ? selectedTicketAvailability?.available
                ? `${selectedTicketAvailability.available} ticket tersedia`
                : "Data tidak tersedia"
              : null}
          </h2>
          <h2>
            {" "}
            {selectedTicket
              ? selectedTicketPrice
                ? `Harga: Rp ${selectedTicketPrice}`
                : "Harga tidak tersedia"
              : null}
          </h2>
        </section>
        <button type="submit" className={styles["ticket-order-button"]}>
          Pesan Tiket
        </button>
      </form>
    </main>
  );
};

export default TicketOrderPage;
