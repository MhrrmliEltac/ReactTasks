import { useState } from "react";
import Card from "./Card";
import Cards from "./Cards";
import Nav from "./Nav";
import "./pizza.css";

const Pizza = () => {
  const [state, setState] = useState([]);

  return (
    <>
      <Nav data={state} />
      <div className="container">
        <Cards setState={setState} />
      </div>
    </>
  );
};

export default Pizza;
