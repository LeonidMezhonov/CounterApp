import "./App.css";
import CounterPage from "./components/counterPage/counterPageContainer";
import MainPage from "./components/yourCounters/yourCounters";
import Welcome from "./components/welcomePage/welcome";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Welcome />
        <Routes>
          <Route path="yourcounters" element={<MainPage />} />
          <Route path="/counter/:id" element={<CounterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
