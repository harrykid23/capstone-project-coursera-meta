import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/Main";

test("Renders the Booking Form heading", () => {
  render(<BookingForm availableTimes={[]} />);
  const headingElement = screen.getByText("Booking Form");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes working correctly", () => {
  const result = initializeTimes();
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes working correctly", () => {
  const state = {
    data: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
  const result = updateTimes(state);
  expect(result).toEqual(state);
});
