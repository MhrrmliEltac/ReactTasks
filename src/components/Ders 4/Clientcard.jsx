import React from "react";

const Clientcard = (props) => {
  const { name, phone, card } = props;

  let isNotCardFetched = !card;
  let isAllFetched = name&&phone&&card


  return (
    <div
      className="card"
      style={{
        width: "18rem",
        backgroundColor: isAllFetched ? "gray" : isNotCardFetched?"yellow":"white",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">
          Имя клиента: {name ? name : "Anonimous "}
        </h5>
        {phone && (
          <h6 className="card-subtitle mb-2 text-muted">Телефон: {phone}</h6>
        )}
        <p className="card-text">
          Номер карты: {card ? card : "Card is not specified "}
        </p>
      </div>
    </div>
  );
};

export default Clientcard;
