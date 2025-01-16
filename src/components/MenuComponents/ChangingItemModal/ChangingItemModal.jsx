import React, { useEffect, useState } from "react";
import "./ChangingItemModal.scss";
import GetText from "../../../functions/getTexts";
import { useTranslation } from "react-i18next";

const ChangingItemModal = ({ item, order, isOpen, onClose, onAddToOrder }) => {
  const { menuWords } = GetText("Menu");
  const { i18n } = useTranslation();

  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (order) {
        setQuantity(order.quantity);
        setSelectedToppings(order.toppings);
      } else {
        setQuantity(0);
        setSelectedToppings([]);
      }
    } else {
      setQuantity(0);
      setSelectedToppings([]);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, order]);

  const additionalOptions = item?.modalInfo?.additionalOptions || [];

  const handleToppingChange = (topping) => {
    setSelectedToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((t) => t !== topping)
        : [...prev, topping]
    );
  };

  const itemPrice = parseFloat(item.price || 0);

  const subtotal =
    (itemPrice +
      selectedToppings.reduce((total, topping) => {
        const toppingPrice =
          additionalOptions.find((t) => t.name === topping)?.price || 0;
        return total + toppingPrice;
      }, 0)) *
    quantity;

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        <div className="modal-content">
          <img src={item.image} alt={item.title} className="item-image" />
          <h2
            className={`item-title ${
              i18n.language === "fa" ? "noPadding" : ""
            }`}
          >
            {item.title}
          </h2>
          <p
            className={`item-price ${
              i18n.language === "fa" ? "noPadding" : ""
            }`}
          >
            ${itemPrice.toFixed(2)}
          </p>
          <p className="item-description">{item.desc}</p>

          <h3 className="toppings-title">{menuWords.Add}</h3>
          <div className="toppings-list">
            {additionalOptions.map((topping) => (
              <div className="topping-item" key={topping.name}>
                <input
                  type="checkbox"
                  id={topping.name}
                  checked={selectedToppings.includes(topping.name)}
                  onChange={() => handleToppingChange(topping.name)}
                />
                <label htmlFor={topping.name}>
                  {topping.name} (+${topping.price.toFixed(2)})
                </label>
              </div>
            ))}
          </div>

          <div className="subtotal">
            <p>
              {menuWords.Subtotal}: $
              {isNaN(subtotal) ? "0.00" : subtotal.toFixed(2)}
            </p>
          </div>

          <div className="modal-actions">
            <div className="quantity-control">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className={`add-to-order-button ${
                quantity === 0 ? "disabled" : ""
              }`}
              onClick={() =>
                quantity > 0 &&
                onAddToOrder(item, quantity, selectedToppings, subtotal)
              }
              disabled={quantity === 0}
              title={quantity === 0 ? menuWords.QuantityAlert : ""}
            >
              {menuWords.Order}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangingItemModal;
