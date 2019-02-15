import React from "react";
import Character from "./listItem";
'./StartWars.css';

 function CharacterList(props) {
  return (
    <div>
      {props.characters.map(character => (
        <Character character={character} key={character.created} />
      ))}
    </div>
  );
}
 export default CharacterList;
