import {React, useEffect, useState} from "react";
import s from "./welcome.module.css";
import { useNavigate } from "react-router-dom";
import {createCounter, getCounters} from "../../api/api";

const Welcome = () => {
  const navigate = useNavigate();
  // const [creatingCounter, setCreatingCounter] = useState(false);
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    getCounters().then(counters => setCounters(counters));
  }, []);

  const handleCreateCounter =  () => {
    createCounter({value: 0, name: "untitled"}).then((data) => {
      navigate(`/counter/${data.id}`);
    });

  };

  // if (counters.length === 0 && !creatingCounter) {
  if (counters.length === 0) {
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
