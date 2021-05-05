import React from "react";
import "./PlayerCard.css";

const PlayerCard = (props) => {
  const { name, language, previous_team, transfer_money, image } = props.detail;
  const addPlayer = props.addPlayer;
  return (
    <div className="player-container">
      <div className="imgDiv">
        <img className="imageSizing" src={image} alt="" />
      </div>
      <div className="playerDetailsDiv">
        <h2>{name}</h2>
        <p>Language: {language}</p>
        <p>Previous-Team: {previous_team}</p>
        <p className="moneyTag">Transfer Money: ${transfer_money}</p>
        <button
          className="btn btn-danger"
          onClick={() => addPlayer(props.detail)}
        >
          Get Him
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
