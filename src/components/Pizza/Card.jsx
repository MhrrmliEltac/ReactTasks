import { useState } from "react";
import "./card.css";

const Card = (props) => {
  const [state, setState] = useState(true);
  const { name, price, description, image} = props
 /*  const handleClick = () => {
    if (state) {
      console.log("clicked");
    } 
    else{
        console.log("clicked again");
    }
    setState(!state);
  }; */

  return (
    <>
      <div className="card">
        <img src={image} alt="" />
        <div className="info">
          <div className="about">
            <h4>{name}</h4>
            <p>{description}</p>
            <div className="price">
              <p>${price}</p>
              <button type="button" onClick={()=>{props.setState(prev=>[...prev,{name,price}])}}>
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
