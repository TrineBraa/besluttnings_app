import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import StartPage from "./Pages/StartPage";
import Mainpage from "./Pages/Mainpage";
import EndPage from "./Pages/EndPage";
import FakeEndPage from "./Pages/FakeEndPage";

function App() {
  const [choices, setChoices] = useState(["choice"]);
  const [points, setPoints] = useState(0);
  const [pointsPerClick, setPointsPerClick] = useState(1);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage setChoices={setChoices} />} />
          <Route
            path="/main"
            element={
              <Mainpage
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
              />
            }
          />
          <Route
            path="/credits"
            element={
              <EndPage
                choices={choices}
                setPoints={setPoints}
                setPointsPerClick={setPointsPerClick}
              />
            }
          />
          <Route
            path="/fakecredits"
            element={<FakeEndPage choices={choices} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
