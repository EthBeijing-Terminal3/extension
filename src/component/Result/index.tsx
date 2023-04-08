import React, { useEffect, useState } from "react";
import "./index.css";

interface Props {
	title: string;
	from?: string;
	to?: string;
	tokenContract?: string;
	tokenName?: string;
	tx?: string;
	amount?: string | number;
	cost?: string | number;
}

const displayAddress = (str) => {
	if (!str) {
		return "-";
	}
	return `${str.slice(0, 4)}....${str.slice(-4, str.length)}`;
};

const etherscan = "https://etherscan.io";
const Result = ({ title, from, to, tokenContract, tokenName, amount, tx, cost }: Props) => {
	return (
		<div className="result-wrapper">
			<h2>{title}</h2>
			{from ? (
				<div className="result-item">
					<div className="result-label">From:</div>
					<a href={`${etherscan}/address/${from}`} target="_blank" className="result-value">
						{displayAddress(from)}
					</a>
				</div>
			) : null}

			{to ? (
				<div className="result-item">
					<div className="result-label">To:</div>
					<a className="result-value" href={`${etherscan}/address/${to}`} target="_blank">
						{displayAddress(to)}
					</a>
				</div>
			) : null}

			{tokenName ? (
				<div className="result-item">
					<div className="result-label">Token:</div>
					{tokenContract ? (
						<a className="result-value" href={`${etherscan}/token/${tokenContract}`} target="_blank">
							{tokenName}
						</a>
					) : (
						<div className="result-value">{tokenName}</div>
					)}
				</div>
			) : null}

			{amount ? (
				<div className="result-item">
					<div className="result-label">Amount:</div>
					<div className="result-value">{amount}</div>
				</div>
			) : null}

			{cost ? (
				<div className="result-item">
					<div className="result-label">Cost:</div>
					<div className="result-value">{cost} ETH</div>
				</div>
			) : null}

			{tx ? (
				<div className="result-item">
					<div className="result-label">Tx:</div>
					<a className="result-value" href={`${etherscan}/tx/${tx}`} target="_blank">
						{displayAddress(tx)}
					</a>
				</div>
			) : null}
		</div>
	);
};

export default Result;
