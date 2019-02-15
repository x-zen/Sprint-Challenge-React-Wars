import React from "react";
import '../App.css';

const Character = props => {
  return (
    <div className="character-box">
      <div className="character-info">
        <h2>{props.character.name}</h2>

        <h4>Gender: <span>{props.character.gender}</span></h4>
        <h4>DOB: <span>{props.character.birth_year}</span></h4>
        <h4>Height: <span>{props.character.height}</span></h4>
        <h4>Mass: <span>{props.character.mass}</span></h4>
        <h4>Homeworld <span>{props.character.homeworld}</span></h4>
      </div>
    </div>

  );
};
export default Character;
