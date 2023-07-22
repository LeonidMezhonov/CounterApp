import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./counterPage.module.css";

const CounterPage = (props) => {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate("/yourcounters");
  };

  return (
    <div className={s.wrap}>
      <div onClick={handleCloseClick} style={{ cursor: "pointer" }}>
        Close
      </div>
      <div className={s.value}>{props.counter}</div>
      <div className={s.btnWrap}>
        <button className={s.btn} onClick={props.minus}>
          -
        </button>
        <button className={s.btn} onClick={props.plus}>
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
