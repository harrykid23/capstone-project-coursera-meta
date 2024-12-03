import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";

const ErrorMessageComponent = ({ children }) => {
  if (children) {
    return <span style={{ color: "red" }}>{children}</span>;
  } else {
    return null;
  }
};

const BookingForm = ({ availableTimes, dispatchAvailableTimes }) => {
  const navigate = useNavigate();
  const submitForm = (values) => {
    console.log({ values });
    const res = window.submitAPI(values);

    if (res) {
      navigate("/reservations/confirmed");
    }
  };
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    onSubmit: submitForm,
    validationSchema: Yup.object({
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      guests: Yup.number()
        .typeError("This value must be a number")
        .required("Required")
        .min(1, "Minimum guests is 1")
        .max(10, "Maximum guests is 10"),
      occasion: Yup.string().required("Required"),
    }),
    validateOnBlur: false,
    validateOnChange: false,
  });

  const onChangeField = (name) => {
    return (e) => {
      formik.setFieldValue(name, e.target.value);
    };
  };

  const onBlurField = (name) => {
    return (e) => {
      formik.validateField(name);
    };
  };

  useEffect(() => {
    formik.setFieldValue("time", "");
    if (formik.values.date) {
      dispatchAvailableTimes({ date: new Date(formik.values.date) });
    }
  }, [formik.values.date]);
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
        onSubmit={formik.handleSubmit}
      >
        <div className={`form-item ${formik.errors.date ? "error" : ""}`}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={formik.values.date}
            onChange={onChangeField("date")}
            onBlur={onBlurField("date")}
            required
          />
          <ErrorMessageComponent>{formik.errors.date}</ErrorMessageComponent>
        </div>
        <div className={`form-item ${formik.errors.time ? "error" : ""}`}>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={formik.values.time}
            onChange={onChangeField("time")}
            onBlur={onBlurField("time")}
            required
          >
            <option value={undefined}></option>
            {availableTimes.data?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ErrorMessageComponent>{formik.errors.time}</ErrorMessageComponent>
        </div>
        <div className={`form-item ${formik.errors.guests ? "error" : ""}`}>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={formik.values.guests}
            onChange={onChangeField("guests")}
            onBlur={onBlurField("guests")}
            required
          />
          <ErrorMessageComponent>{formik.errors.guests}</ErrorMessageComponent>
        </div>
        <div className={`form-item ${formik.errors.occasion ? "error" : ""}`}>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={formik.values.occasion}
            onChange={onChangeField("occasion")}
            onBlur={onBlurField("occasion")}
            required
          >
            <option value={undefined}></option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <ErrorMessageComponent>
            {formik.errors.occasion}
          </ErrorMessageComponent>
        </div>

        <button type="submit" aria-label="On Click">
          Make Your Reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;
