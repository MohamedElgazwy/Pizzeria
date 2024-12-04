import React from "react";
import "./menu";
const Pizza = ({ pizzaObject }) => {
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        {pizzaObject.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>Price: {pizzaObject.price}</span>
        )}
      </div>
    </li>
  );
};

export default Pizza;
