import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s from "./counterPage.module.css";
import { useParams } from "react-router";
import { ReactComponent as CloseIcon } from "../../../assets/xmark-solid.svg";

const CounterPage = (props) => {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate("/yourcounters");
  };

  const { id } = useParams();

  const [nameEditMode, setNameEditMode] = useState(false);
  const [counterName, setCounterName] = useState(props.name);

  const [valueEditMode, setValueEditMode] = useState(false);
  const [counterValue, setCounterValue] = useState(Number(props.counter));

  const nameInputRef = useRef(null);
  const valueInputRef = useRef(null);

  const activateNameEditMode = () => {
    setNameEditMode(true);
  };

  const deactivateNameEditMode = () => {
    setNameEditMode(false);
  };

  const handleChangeCounterName = (event) => {
    setCounterName(event.target.value);
    // updateCounterName(parseInt(id), event.target.value);
  };

  const activateValueEditMode = () => {
    setValueEditMode(true);
  };

  const deactivateValueEditMode = () => {
    setValueEditMode(false);
  };

  const handleChangeCounterValue = (event) => {
    const newValue = parseInt(event.target.value);
    setCounterValue(newValue);
    // updateCounterValueById(parseInt(id), newValue);
  };

  // Function to handle blur event on the input field
  const handleNameInputBlur = () => {
    deactivateNameEditMode();
  };

  // Function to handle focus event on the input field
  const handleNameInputFocus = () => {
    // Only allow focus if in edit mode
    if (nameEditMode) {
      // Set timeout to ensure the input is focused after it's rendered
      setTimeout(() => {
        nameInputRef.current.focus();
        nameInputRef.current.select();
      }, 0);
    }
  };

  const handleValueInputBlur = () => {
    deactivateValueEditMode();
  };

  const handleValueInputFocus = () => {
    if (valueEditMode) {
      setTimeout(() => {
        valueInputRef.current.focus();
        valueInputRef.current.select();
      }, 0);
    }
  };

  useEffect(() => {
    setCounterValue(props.counter);
  }, [props.counter]);

  const plus = () => {
    const newValue = counterValue + 1; // Perform numerical addition
    setCounterValue(newValue);
    // updateCounterValueById(parseInt(id), newValue);
  };

  const minus = () => {
    const newValue = counterValue - 1; // Perform numerical subtraction
    setCounterValue(newValue);
    // updateCounterValueById(parseInt(id), newValue);
  };

  return (
      <div className={s.wrap}>
        <div className={s.container}>
          <div className={s.counterName}>
            {!nameEditMode && (
              <div>
                <span onClick={activateNameEditMode}>{counterName}</span>
              </div>
            )}
            {nameEditMode && (
              <div>
                <input
                  className={s.nameInput}
                  ref={nameInputRef}
                  autoFocus
                  onFocus={handleNameInputFocus}
                  onBlur={handleNameInputBlur}
                  type="text"
                  value={counterName}
                  onChange={handleChangeCounterName}
                />
              </div>
            )}
          </div>

          <CloseIcon
            className={s.closeIcon}
            onClick={handleCloseClick}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className={s.value}>
          {!valueEditMode && (
            <div>
              <span onClick={activateValueEditMode}>{counterValue}</span>
            </div>
          )}
          {valueEditMode && (
            <div>
              <input
                className={s.valueInput}
                ref={valueInputRef}
                autoFocus
                onFocus={handleValueInputFocus}
                onBlur={handleValueInputBlur}
                type="number"
                value={counterValue}
                onChange={handleChangeCounterValue}
              />
            </div>
          )}
        </div>

        <div className={s.btnWrap}>
          <button className={s.btn} onClick={minus}>
            -
          </button>
          <button className={s.btn} onClick={plus}>
            +
          </button>
        </div>
      </div>
  );
};

export default CounterPage;
