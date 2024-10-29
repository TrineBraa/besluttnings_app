import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import StartPage from "./Pages/StartPage";
import Mainpage from "./Pages/Mainpage";
import EndPage from "./Pages/EndPage";

function App() {
  const [choices, setChoices] = useState(["choice"]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage setChoices={setChoices} />} />
          <Route path="/main" element={<Mainpage choices={choices} />} />
          <Route path="/credits" element={<EndPage choices={choices} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
