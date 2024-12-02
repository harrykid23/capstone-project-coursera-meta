import { useReducer } from "react";

export const initializeTimes = () => {
  const res = window.fetchAPI(new Date());
  return res;
};

export const updateTimes = (state, action = {}) => {
  const res = window.fetchAPI(action.date);
  return {
    ...state,
    data: res,
  };
};

const Main = ({ children }) => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, {
    data: initializeTimes(),
  });

  return <main>{children({ availableTimes, dispatchAvailableTimes })}</main>;
};

export default Main;
