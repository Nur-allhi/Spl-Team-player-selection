import React from "react";
import "./PlayerSelection.css";

const PlayerSelection = (props) => {
  const teamPlayer = props.teamPlayer;
  const totalAmount = teamPlayer.reduce(
    (sum, pdata) => sum + pdata.transfer_money,
    0
  );

  return (
    <div className="selectionDiv">
      <h1>Team selection</h1>
      <h3>Player Added: {teamPlayer.length}</h3>
      <ol>
        {teamPlayer.map((data) => (
          <li>{data.name}</li>
        ))}
      </ol>
      <h5>
        Total Amount: <span className="totaAmount">{totalAmount}</span>
      </h5>
    </div>
  );
};

export default PlayerSelection;
