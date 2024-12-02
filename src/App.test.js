import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/Main";
import { MemoryRouter } from "react-router";

test("Renders the Booking Form heading", () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={[]} dispatchAvailableTimes={() => {}} />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Booking Form");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes working correctly", () => {
  const result = initializeTimes(new Date());
  expect(result?.length).toBeGreaterThanOrEqual(1);
});

test("updateTimes working correctly", () => {
  const state = {
    data: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
  const result = updateTimes(state, { date: new Date("2025-01-23") });
  expect(result.data?.length).toBeGreaterThanOrEqual(1);
});
