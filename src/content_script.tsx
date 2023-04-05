import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { SideBar } from "./component/SideBar/SideBar";
import ReactDOM from "react-dom";

const Main = () => {
  return (
    <>
      <SideBar/>
    </>
  );
}

const app = document.createElement('div');
app.id = 'my-extension-root';
document.body.appendChild(app);

ReactDOM.render(<SideBar />, app);
