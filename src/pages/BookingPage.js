import { useState } from "react";

const BookingPage = () => {
  const [formBooking, setFormBooking] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const onSubmitFormBooking = (e) => {
    e.preventDefault();
    console.log({ formBooking });
  };
  return (
    <>
      <section
        style={{
          width: "100%",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h2 className="font-markazi">Reservations</h2>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
          onSubmit={onSubmitFormBooking}
        >
          <div className="form-item">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={formBooking.date}
              onChange={(e) => {
                e.preventDefault();
                setFormBooking((prevState) => ({
                  ...prevState,
                  date: e.target.value,
                }));
              }}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              value={formBooking.time}
              onChange={(e) => {
                e.preventDefault();
                setFormBooking((prevState) => ({
                  ...prevState,
                  time: e.target.value,
                }));
              }}
              required
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={formBooking.guests}
              onChange={(e) => {
                e.preventDefault();
                setFormBooking((prevState) => ({
                  ...prevState,
                  guests: e.target.value,
                }));
              }}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={formBooking.occasion}
              onChange={(e) => {
                e.preventDefault();
                setFormBooking((prevState) => ({
                  ...prevState,
                  occasion: e.target.value,
                }));
              }}
              required
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <button type="submit">Make Your Reservation</button>
        </form>
      </section>
    </>
  );
};

export default BookingPage;
