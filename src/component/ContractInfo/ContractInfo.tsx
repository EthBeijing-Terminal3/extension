import React, { useEffect, useState } from "react";
import './ContractInfo.css'

export const ContractInfo =({back}:any) =>{
  console.log('back', back);
  return(
  <div className="ContractInfo-table">
    <div className="table-header">
        Contract information
    </div>
    <div className="line"></div>
    <div className="table-description">
        Contract Description
    </div>
    <div className="table-content">
        <div className="table-content-header">Terminal3</div>
        <div className="table-content-list">
            <div className="table-content-list-left">Open Source？</div>
            <div className="table-content-list-right">{back?.arg?.is_open_source === '1'?'Yes':'No'}</div>
        </div>
        <div className="table-content-list">
            <div className="table-content-list-left">Has Proxy Contract?</div>
            <div className="table-content-list-right">{back?.arg?.is_proxy === '1'?'Yes':'No'}</div>
        </div>
        <div className="table-content-list">
            <div className="table-content-list-left">Has the function to take back ownership?</div>
            <div className="table-content-list-right">{back?.arg?.can_take_back_ownership === '1'?'Yes':'No'}</div>
        </div>
        <div className="table-content-list">
            <div className="table-content-list-left">Owner can Change balance?</div>
            <div className="table-content-list-right">{back?.arg?.owner_balance === '1'?'Yes':'No'}</div>
        </div>
        <div className="table-content-list">
            <div className="table-content-list-left">Self-destruct?</div>
            <div className="table-content-list-right">{back?.arg?.selfdestruct === '1'?'Yes':'No'}</div>
        </div>
    </div>
  </div>
)}