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

  const [counterName, setName] = useState(() => {
    const currentCounter = counters.find((c) => c.id === parseInt(id));
    return currentCounter ? currentCounter.name : "untitled";
  });

  return (
    <div className={s.wrap}>
      <CounterPage
        setCounter={setCounter}
        setName={setName}
        counter={counter}
        name={counterName}
      />
    </div>
  );
};

export default CounterPageContainer;
