import React, { useEffect, useState } from "react";
import { FaAngleDoubleLeft } from 'react-icons/fa';
import './style.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';


export const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {isExpanded ? 
          <></>: 
        <div onClick={handleClick} className="toggle-div">
          Terminal3
        </div>
      }
      {isExpanded ?
      <div className="sidebar-content">
        <div className="main-header">
          <p>Terminal3</p>
          <FaAngleDoubleLeft onClick={handleClick} style={{cursor: "pointer"}}/>
        </div>
        <ConnectButton/>
      </div>: <></>}
    </div>
    </>
  );
}


