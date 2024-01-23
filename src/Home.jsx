import React from "react";
import "./Home.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidesection from "./components/Sidesction/Sidesection.jsx";
import Datas from "./components/Datas/Datas.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="section1">
        <Sidesection />
        <Datas />
      </div>
    </div>
  );
};

export default Home;
