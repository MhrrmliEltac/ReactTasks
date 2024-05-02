import { useState } from "react";
import "./card.css";

const Card = (props) => {
  const { name, price, description, image} = props


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
