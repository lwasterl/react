import { useState, useRef } from "react";

export default function Player({ showGames }) {

  const playerName = useRef();

  const [editablePlayerName, setEditablePlayerName] = useState();

  function handleClick() {
    setEditablePlayerName(playerName.current.value);
    showGames();
    playerName.current.value = ''
  }


  return (
    <section id="player">
      <h2>{editablePlayerName ? `⏱️ Welcome ${editablePlayerName} ⏱️` : 'Welcome unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button
          onClick={handleClick}>
          Set Name
        </button>
      </p>
    </section>
  );
}
