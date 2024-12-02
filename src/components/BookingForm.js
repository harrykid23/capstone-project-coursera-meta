import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BookingForm = ({ availableTimes, dispatchAvailableTimes }) => {
  const navigate = useNavigate();
  const [formBooking, setFormBooking] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const submitForm = (e) => {
    e.preventDefault();
    const res = window.submitAPI(formBooking);

    if (res) {
      navigate("/reservations/confirmed");
    }
  };

  useEffect(() => {
    setFormBooking((prevState) => ({ ...prevState, time: "" }));
    if (formBooking.date) {
      dispatchAvailableTimes({ date: new Date(formBooking.date) });
    }
  }, [formBooking.date]);
  return (
    <>
      <h3
        style={{ textAlign: "center", width: "100%" }}
        className="font-markazi"
      >
        Booking Form
      </h3>
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
        onSubmit={submitForm}
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
            {availableTimes.data?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
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
    </>
  );
};

export default BookingForm;
