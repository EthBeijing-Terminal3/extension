import React, { useEffect, useState } from "react";
import { SideBar } from "./component/SideBar/SideBar";
import ReactDOM from "react-dom";

const Main = () => {
  return (
    <SideBar />
  );
}

const app = document.createElement('div');
app.id = 'extension-root';
document.body.appendChild(app);

ReactDOM.render(<Main />, app);
