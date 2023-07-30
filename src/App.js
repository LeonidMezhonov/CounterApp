import "./App.css";
import CounterPage from "./components/counterPage/counterPageContainer";
import MainPage from "./components/yourCounters/yourCounters";
import Welcome from "./components/welcomePage/welcome";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/navbar/login/login";
import Navbar from "./components/navbar/navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Welcome />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="yourcounters" element={<MainPage />} />
          <Route path="/counter/:id" element={<CounterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
