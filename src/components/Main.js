import { useReducer } from "react";

const Main = ({ children }) => {
  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };
  function reducer(state, action) {
    return {
      ...state,
    };
  }
  const [availableTimes, updateTimes] = useReducer(reducer, {
    data: initializeTimes(),
  });

  return <main>{children({ availableTimes, updateTimes })}</main>;
};

export default Main;
