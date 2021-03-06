import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import SideBar from "./SideBar/SideBar";
import MainArea from "./MainArea/MainArea";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mainArea">
        <SideBar />

        <MainArea />
      </div>
    </Router>
  );
}

export default App;
