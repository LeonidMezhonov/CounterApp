import React, { useContext } from "react";
import s from "./yourCounters.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { CounterContext } from "../../state/state";

const MainPage = () => {
  const { counters, createCounter } = useContext(CounterContext);

  const location = useLocation();

  const isCounterPage = location.pathname.includes("/counter");

  return (
    <div className={s.itemsWrap}>
      {counters.map((counter) => (
        <NavLink
          key={counter.id}
          to={`/counter/${counter.id}`}
          className={(navData) => (navData.isActive ? s.active : s.item)}
          id={counter.id}
        >
          <div className={s.insideWrap}>
            <div className={s.counterValue}>{counter.value}</div>
            <p className={s.counterName}>{counter.name}</p>
          </div>
        </NavLink>
      ))}
      {!isCounterPage && (
        <button onClick={createCounter} className={s.newBtn}>
          +
        </button>
      )}
    </div>
  );
};

export default MainPage;
