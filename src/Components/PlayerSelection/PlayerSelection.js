import React from "react";

const PlayerSelection = (props) => {
  const teamPlayer = props.teamPlayer;
  const totalAmount = teamPlayer.reduce(
    (sum, pdata) => sum + pdata.transfer_money,
    0
  );

  return (
    <div>
      <h1>Team selection</h1>
      <h2>Player Added: {teamPlayer.length}</h2>
      <h2>Total Money: {}</h2>
      <ol>
        {teamPlayer.map((data) => (
          <li>{data.name}</li>
        ))}
      </ol>
      <h4>Total Amount: {totalAmount}</h4>
    </div>
  );
};

export default PlayerSelection;
