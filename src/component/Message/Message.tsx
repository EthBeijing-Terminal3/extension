import React, { useEffect, useState } from "react";
import './Message.css'
import { Assets } from "../Assets/Assets";

type MESSAGE = {
  action: string;
  arg?: any;
}
export const Message =(props:{index: number, message: any, back?: MESSAGE}) =>{
  return(
    <div className="message-main">
      <div className='message-item'>
        <img src={props.index%2 == 1 ? "https://terminal3.s3.us-west-1.amazonaws.com/imgs/Group+9.svg":"https://terminal3.s3.us-west-1.amazonaws.com/imgs/message-avatar.svg"} style={{paddingRight:"10px"}}/>
        <div>{props.message}</div>
      </div>
      {props.back?.action == "assets"?
      <Assets assets={props?.back?.arg}/>:null}
    </div>
  )}






