import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

test("BookingForm has HTML5 validation", () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={[]} dispatchAvailableTimes={() => {}} />
    </MemoryRouter>
  );
  const elementList = [
    screen.getByLabelText("Choose date"),
    screen.getByLabelText("Choose time"),
    screen.getByLabelText("Number of guests"),
    screen.getByLabelText("Occasion"),
  ];
  for (const element of elementList) {
    expect(element).toHaveAttribute("required");
  }
});

test("BookingForm Javascript validation working correctly", async () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={{ data: ["19:00"] }}
        dispatchAvailableTimes={() => {}}
      />
    </MemoryRouter>
  );
  const elementObjects = {
    date: screen.getByLabelText("Choose date"),
    time: screen.getByLabelText("Choose time"),
    guests: screen.getByLabelText("Number of guests"),
    occasion: screen.getByLabelText("Occasion"),
    submitButton: screen.getByText("Make Your Reservation"),
  };

  // make the form error
  fireEvent.change(elementObjects.date, { target: { value: "2025-01-23" } });
  fireEvent.change(elementObjects.time, { target: { value: "19:00" } });
  fireEvent.change(elementObjects.guests, { target: { value: "" } });
  fireEvent.change(elementObjects.occasion, { target: { value: "Birthday" } });
  fireEvent.click(elementObjects.submitButton);
  await waitFor(() => {
    expect(
      elementObjects.guests.parentElement.classList.contains("error")
    ).toBe(true);
  });

  // make the form valid
  const logSpy = jest.spyOn(console, "log").mockImplementation();
  fireEvent.change(elementObjects.guests, { target: { value: "5" } });
  fireEvent.click(elementObjects.submitButton);
  waitFor(() => {
    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        date: "2025-01-23",
        time: "19:00",
        guests: "5",
        occasion: "Birthday",
      })
    );
  }, 2000);

  logSpy.mockRestore();
});
