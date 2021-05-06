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
      <div className="heading">
        <h1>S.P.L</h1>
        <h6>Sagorika premier league</h6>
        <h3>Team selection Page</h3>
      </div>
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
      <footer className="footer">
        {" "}
        &#169; Copyright reserved to NUR ALLhi 2020-2021
      </footer>
    </div>
  );
};

export default Body;
