import React from "react";
import { SideBar } from "./component/SideBar/SideBar";
import ReactDOM from "react-dom";
import { AppContext } from "./globalContext";

const Main = () => {
  return (
    <SideBar />
  );
}

const app = document.createElement('div');
app.id = 'extension-root';
document.body.appendChild(app);

ReactDOM.render(<AppContext><Main /></AppContext>, app);
