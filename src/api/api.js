import axios from 'axios';

const instance = axios.create({
    baseURL: "https://64c753bb0a25021fde924b73.mockapi.io/"
});

export const getCounters = () => {
    return instance.get("counters").then(response => response.data);
}

export const createCounter = (counter) => {
    return instance.post("counters", counter).then(response => response.data);
}

export const getCounterById = (id) => {
    return instance.get(`counters/${id}`).then(response => response.data);
}