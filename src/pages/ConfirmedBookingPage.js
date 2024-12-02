import { Link } from "react-router";

const ConfirmedBookingPage = ({ availableTimes, dispatchAvailableTimes }) => {
  return (
    <>
      <section
        style={{
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            padding: "2rem",
            borderRadius: "var(--container-radius)",
            overflow: "hidden",
            background: "var(--color-1)",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <h3
            style={{ color: "white", textAlign: "center" }}
            className="font-markazi"
          >
            Your reservation has been submitted
          </h3>
          <p style={{ color: "white", textAlign: "center" }}>
            Please come at the data & time you've filled. Thank you!
          </p>
          <Link className="button" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
};

export default ConfirmedBookingPage;
