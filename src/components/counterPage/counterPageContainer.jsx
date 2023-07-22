import { React, useState, useContext } from "react";
import CounterPage from "./counter/counterPage";
import s from "./counterPageContainer.module.css";
import { CounterContext } from "../../state/state";
import { useParams } from "react-router";

const CounterPageContainer = (props) => {
  const { id } = useParams();
  const { counters, updateCounterValueById } = useContext(CounterContext);

  const [counter, setCounter] = useState(() => {
    const currentCounter = counters.find((c) => c.id === parseInt(id));
    return currentCounter ? currentCounter.value : 0;
  });

  const plus = () => {
    const newValue = counter + 1;
    setCounter(newValue);
    updateCounterValueById(parseInt(id), newValue);
  };

  const minus = () => {
    const newValue = counter - 1;
    setCounter(newValue);
    updateCounterValueById(parseInt(id), newValue);
  };

  return (
    <div className={s.wrap}>
      <CounterPage minus={minus} plus={plus} counter={counter} />
    </div>
  );
};

export default CounterPageContainer;
