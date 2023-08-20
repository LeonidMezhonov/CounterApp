import {React, useState, useEffect} from "react";
import CounterPage from "./counter/counterPage";
import s from "./counterPageContainer.module.css";
import {useParams} from "react-router";
import {getCounterById} from "../../api/api";

const CounterPageContainer = () => {
    const {id} = useParams();
    const [counter, setCounter] = useState({});

    useEffect(() => {
        getCounterById(id).then(data => setCounter(data))
    }, [id])

    const setName = (name) => {
        setCounter((prevState) => {
            return {
                ...prevState,
                name
            }
        })
    }


    const setValue = (value) => {
        setCounter((prevState) => {
            return {
                ...prevState,
                value
            }
        })
    }

    return (
        <div className={s.wrap}>
            <CounterPage
                setCounter={setValue}
                setName={setName}
                counter={counter.value}
                name={counter.name}
            />
        </div>
    );
};

export default CounterPageContainer;
