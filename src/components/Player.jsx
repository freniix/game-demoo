import { useEffect, useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity");
  const inputRef = useRef(null);
  function setName(){
    setPlayerName(()=> inputRef.current.value);
  }
  useEffect(()=>{
    inputRef.current.value = "";
  }, [setName])
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={inputRef}/>
        <button onClick={setName}>Set Name</button>
      </p>
    </section>
  );
}
