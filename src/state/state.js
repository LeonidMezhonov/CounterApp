import React, { createContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counters, setCounters] = useState([]);

  const createCounter = () => {
    const newCounter = { id: Date.now(), value: 0, name: "untitled" };
    setCounters((prevCounters) => [...prevCounters, newCounter]);
    return newCounter;
  };

  const updateCounterValueById = (id, newValue) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: newValue } : counter
      )
    );
  };

  const updateCounterName = (id, newName) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, name: newName } : counter
      )
    );
  };

  const value = {
    counters,
    setCounters,
    createCounter,
    updateCounterValueById,
    updateCounterName,
    // Add other functions here
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
