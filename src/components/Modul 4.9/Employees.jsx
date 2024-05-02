import React, { useEffect, useState } from "react";
import db from "./db";

const Employees = () => {
  const [state, setState] = useState([]);
  const [alive, setAlive] = useState(true);
  const [died, setDied] = useState(false);

  useEffect(() => {
    setState(db);
    setAlive(db.filter((item) => item.alive === true));
    setDied(db.filter((item) => item.alive === false));
  }, []);

  const handleClickAlive = () => {
    console.log(alive)
    setState(alive)
  };

  const handleClickDied = () => {
    console.log(died);
    setState(died);
  };

  const handleShowAll = () => {
    console.log(db);
    setState(db);
  };

  return (
    <div>
      <button onClick={handleClickAlive}>Alive</button>
      <button onClick={handleClickDied}>Died</button>
      <button onClick={handleShowAll}>All</button>
      {state.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>
            {item.department} - {item.role}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Employees;
