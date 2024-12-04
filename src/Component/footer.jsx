import React from "react";
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(hour);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closehour={closeHour} openhour={openHour} />
      ) : (
        <p>
          `We are close now ,please Come between {openHour} AM and{" "}
          {closeHour / 2} PM`
        </p>
      )}
    </footer>
  );
};

function Order({ openhour, closehour }) {
  return (
    <div className="order">
      <p>
        We are open from {openhour}:00 to {closehour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
export default Footer;
