import React from "react";
import "./Basket.scss";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";

const Basket = ({ orders, onClose, onRemoveOrder, onEditOrder }) => {
  const { menuWords } = GetText("Menu");
  const { i18n } = useTranslation();

  const calculateTotalPrice = () => {
    return orders.reduce((total, order) => total + (order.totalPrice || 0), 0);
  };

  return (
    <div className="basket-container">
      <button className="close-basket" onClick={onClose}>
        ✖
      </button>
      <h2>{menuWords.ShoppingCart}</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="basket-item">
            <p className="basket-ItemTiltle">
              {order.title}
              {order && order.toppings.length > 0 && (
                <span className="addedItems">
                  {" "}
                  (+{order.toppings.join(" + ")})
                </span>
              )}
            </p>
            <p className="basket-ItemQuantity">
              {menuWords.Quantity}: {order.quantity}
            </p>
            <p>
              {menuWords.UnitPrice}: {order.totalPrice.toFixed(2)}$
            </p>

            <div className="basket-actions">
              <button
                className="remove-button"
                onClick={() => onRemoveOrder(order.id)}
              >
                {menuWords.Remove}
              </button>
              <button
                className="edit-button"
                onClick={() => onEditOrder(order.id)}
              >
                {menuWords.Edit}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>{menuWords.empty}</p>
      )}
      <div className="total">
        <p>
          {menuWords.TotalPrice}: {calculateTotalPrice().toFixed(2)}$
        </p>
      </div>
    </div>
  );
};

export default Basket;
