import BookingForm from "../components/BookingForm";

const BookingPage = ({ availableTimes, updateTimes }) => {
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
        <BookingForm {...{ availableTimes, updateTimes }} />
      </section>
    </>
  );
};

export default BookingPage;
