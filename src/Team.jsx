import { useState } from "react";

export default function Team() {
  const [Team,setTeam] = useState(11);

  const handleAdd =()=>{
    const newTeam = Team + 1
    setTeam(newTeam)
  }
  const handleReduce =() =>{
    const newTeam = Team - 1;
    setTeam(newTeam)
  }
  const Teamstyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={Teamstyle}>
      <h3>Ploayers: {Team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
