import React, { useEffect, useState } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import PlayerSelection from "../PlayerSelection/PlayerSelection";
import "./Body.css";

const Body = () => {
  const [player, setPlayer] = useState([]);
  const [teamPlayer, setTeamPlayer] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/d94464e6-bc6f-4971-9c6e-83d5ea29b806")
      .then((res) => res.json())
      .then((data) => {
        setPlayer(data);
      });
  }, []);

  const addPlayer = (details) => {
    const newTeamPlayer = [...teamPlayer, details];
    setTeamPlayer(newTeamPlayer);
    console.log("clicked");
  };

  return (
    <div>
      <h1 className="heading">Team selection</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {player.map((pdata) => (
              <PlayerCard
                detail={pdata}
                key={pdata.id}
                addPlayer={addPlayer}
              ></PlayerCard>
            ))}
          </div>
          <div className="col col-lg-4">
            <PlayerSelection teamPlayer={teamPlayer}></PlayerSelection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
