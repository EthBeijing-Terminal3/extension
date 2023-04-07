import React, { useEffect, useState } from "react";
import './style.css'
const S3 = "https://terminal3.s3.us-west-1.amazonaws.com/imgs/"

export const DappBar =() =>{
  return(
<div className="container">
  <div className="column">
    <ul>
      <li><img src={`${S3}uniswap.svg`} /></li>
      <li><img src={`${S3}comp.svg`}/></li>
      <li><img src={`${S3}more.svg`}/></li>
    </ul>
  </div>
  <div className="column">
    <ul>
      <li><img src={`${S3}aave.svg`}/></li>
      <li><img src={`${S3}more.svg`}/></li>
      <li><img src={`${S3}more.svg`}/></li>
    </ul>
  </div>
</div>)}






