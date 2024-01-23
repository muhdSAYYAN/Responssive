import React from "react";
import "./Navbar.css";
import camera from "../../Assets/camera.png"
import wifi from "../../Assets/wifi.png"
import refresh from "../../Assets/refresh.png"
import crop from "../../Assets/crop.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav1">
       
      <div className="nav2">
      <button className="time">
          <span style={{padding:"4px",backgroundColor:"black",borderRadius:"100%",color:"white",fontSize:"9px"}}>1</span>
          <span>11:50</span>   
        </button>
      <button className="icons">
          <span>+</span>
        </button>
        <button className="icons">
          <span>-</span>
        </button>
       </div>
       
   <div className="buttons">
      <button className="icons">
          <span>Admin</span>
        </button>
        <button className="icons">
          <img src={wifi} alt="" srcset="" />
        </button>
        <button className="icons">
          <img src={refresh} alt="" srcset="" />
        </button>
        <button className="icons">
          <span>Close</span>
        </button>
        <button className="icons">
          <img src={crop} alt="" srcset="" />
        </button>
        <button className="icons">
          <img src={camera} alt="" srcset="" />
        </button>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
