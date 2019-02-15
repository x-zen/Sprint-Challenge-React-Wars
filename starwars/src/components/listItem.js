import React from "react";

const Character = props => {
  return (
    <div className='cha-cont'>
      <div className="cha-name">
        <h2>{props.character.name}</h2>
      </div>
      <div className="cha-data">
       <span>Gender:</span> {props.character.gender}<br>
       </br>
       <span>Birth Year:</span> {props.character.birth_year}<br>
       </br>
       <span>Height:</span> {props.character.height}<br>
       </br>
       <span>Mass:</span> {props.character.mass}<br>
       </br>
       <span>Homeworld:</span> {props.character.homeworld}
      </div>
    </div>
    </div>

  );
};
export default Character;
