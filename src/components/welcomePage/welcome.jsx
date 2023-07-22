import { React, useState, useEffect } from "react";
import s from "./welcome.module.css";
import { useContext } from "react";
import { CounterContext } from "../../state/state";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { counters, createCounter } = useContext(CounterContext);
  const navigate = useNavigate();
  const [creatingCounter, setCreatingCounter] = useState(false);

  const handleCreateCounter = () => {
    const newCounter = createCounter();
    setCreatingCounter(true);
    navigate(`/counter/${newCounter.id}`);
  };

  if (counters.length === 0 && !creatingCounter) {
    return (
      <div className={s.container}>
        <button onClick={handleCreateCounter} className={s.bigButton}>
          +
        </button>
      </div>
    );
  }
};

export default Welcome;
