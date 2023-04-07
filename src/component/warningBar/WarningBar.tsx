import React from "react";

type Props = {
  data: any;
}

const WarningBar = ({data}: Props) => {

  const stateChanges = data.simulationResults.expectedStateChanges.map((change, index) => {
    return (<p key={index}>{change.humanReadableDiff}</p>)
  });

  return (<div style={{color: 'black', width: '100%', textAlign: 'center', height: '100%'}}>
    <h2>Issues: {data.action}</h2>
    <p>
      Warnings: {JSON.stringify(data.warnings)}
    </p>

    <h2>State Changes</h2>
    {stateChanges}
  </div>)
}

export default WarningBar;
