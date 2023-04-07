import React, { useEffect, useState } from "react";
import './Assets.css'

export const Assets =(props: {assets: any}) =>{
  const [type, setType] = useState("NFT")
  const handleError = event => {
    event.target.src = "https://terminal3.s3.us-west-1.amazonaws.com/imgs/loading.gif";
  };
  const handleClick = (event) => {
    console.log(event)
  }
  const renderImageRows = () => {
    let rawData = props?.assets?.nft?.content;
    console.log(rawData)
    const imageRows = [];
    for (let i = 0; i < rawData?.length; i += 3) {
      const row = (
        <tr key={i}>
          {rawData.slice(i, i + 3).map((item, index) => (
            <td key={index}><a href={`https://opensea.io/assets/ethereum/${item.contract_address}/${item.token_id}`} target="_blank"><img 
            src={`https://ipfs.io/ipfs/${item.image_uri}`} alt={item.token_uri} style={{width:"100px", cursor:"pointer"}}
            onError={handleError}
            /></a></td>
          ))}
        </tr>
      );

      imageRows.push(row);
    }

    return imageRows;
  };

  useEffect(()=>{
    console.log(props.assets)
  },[])
  return(
  <div className="assets-table">
    <div className="table-header">
      Assets
    </div>
    <div className="table-tabs">
      <p onClick={handleClick}>
        Token
      </p>
      <p onClick={handleClick}>
        NFT
      </p>
    </div>
    {type == "NFT" ?
    <table>
      renderImageRows():
    </table>:
    <table>
       <thead>
          <tr>
            <th>Token</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {props.assets.token.map((item, index) => (
            <tr key={index}>
              <td>{item.symbol}</td>
              <td>{item.balance.toNumber()}</td>
            </tr>
          ))}
        </tbody>
    </table>}
  </div>
)}






