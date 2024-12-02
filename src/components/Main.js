import { useReducer } from "react";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action = {}) => {
  return {
    ...state,
  };
};

const Main = ({ children }) => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, {
    data: initializeTimes(),
  });

  return <main>{children({ availableTimes, dispatchAvailableTimes })}</main>;
};

export default Main;
