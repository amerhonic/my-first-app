import React from "react";
import "./TeamCard.css";
// import { BASE_URL } from "../../../App";

function TeamCard({name,matches,points,deleteTeam}) {
  // console.log({BASE_URL})
  return (
    <div className="cardContainer2">
      <div className="card2">
        <p>{name}</p>
        <p>gm {matches}</p>
        <p>pe {points}</p>
        <button onClick={deleteTeam}>Izbrisi tim</button>
      </div>
    </div>
  );
}

export default TeamCard;



