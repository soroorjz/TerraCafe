import { useState } from "react";
import GetText from "../../../functions/getTexts";
import "./MenuCards.scss";
import ChangingItemModal from "../ChangingItemModal/ChangingItemModal";
import { useTranslation } from "react-i18next";
import Basket from "../Basket/Basket";

const MenuCards = ({ selectedTab }) => {
  const { BusinessInsightsInfo, menuWords } = GetText("Menu");
  const { i18n } = useTranslation();

  const category = BusinessInsightsInfo.find(
    (item) => item.title === selectedTab
  );
  const insightCards = category ? category.insightCards : [];

  const [orders, setOrders] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleQuantityChange = (item, change) => {
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.id === item.id);
      if (existingOrder) {
        const newQuantity = existingOrder.quantity + change;
        if (newQuantity <= 0) {
          return prevOrders.filter((order) => order.id !== item.id);
        }
        return prevOrders.map((order) =>
          order.id === item.id ? { ...order, quantity: newQuantity } : order
        );
      } else if (change > 0) {
        return [
          ...prevOrders,
          { ...item, quantity: 1, toppings: [], totalPrice: item.price },
        ];
      }
      return prevOrders;
    });
  };

  const handleAddToOrder = (item, quantity, updatedToppings, updatedPrice) => {
    const basePrice = updatedPrice || item.price;
    const toppingsPrice = updatedToppings.reduce((total, topping) => {
      const toppingPrice = topping.price || 0;
      return total + toppingPrice;
    }, 0);

    const totalPrice = (basePrice + toppingsPrice) * quantity;

    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.id === item.id);
      if (existingOrder) {
        return prevOrders.map((order) =>
          order.id === item.id
            ? {
                ...order,
                quantity,
                toppings: updatedToppings,
                totalPrice,
              }
            : order
        );
      } else {
        return [
          ...prevOrders,
          {
            ...item,
            quantity,
            toppings: updatedToppings,
            totalPrice,
          },
        ];
      }
    });

    closeModal();
  };

  const onRemoveOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  const onEditOrder = (id) => {
    const orderToEdit = orders.find((order) => order.id === id);
    if (orderToEdit) {
      openModal(orderToEdit);
    }
  };

  const [basketVisible, setBasketVisible] = useState(false);
  const toggleBasketVisibility = () => {
    setBasketVisible((prev) => !prev);
  };

  return (
    <div className="menu-cards-container">
      <button className="basket-button" onClick={toggleBasketVisibility}>
        🛒({orders.length})
      </button>
      {basketVisible && (
        <Basket
          orders={orders}
          onClose={toggleBasketVisibility}
          onRemoveOrder={onRemoveOrder}
          onEditOrder={onEditOrder}
        />
      )}
      <div className="menu-cards-wrapper">
        {insightCards.map((insightCard) => {
          const order = orders.find((o) => o.id === insightCard.id);
          return (
            <div className="menu-card" key={insightCard.id}>
              <div className="menu-card-image">
                <img src={insightCard.image} alt={insightCard.title} />
                <div className="quantity-controller">
                  {order ? (
                    <div className="quantityBtns">
                      <button
                        className="ReduceBtn"
                        onClick={() => handleQuantityChange(insightCard, -1)}
                      >
                        -
                      </button>
                      <span>{order.quantity}</span>
                      <button
                        className="IncreaseBtn"
                        onClick={() => handleQuantityChange(insightCard, 1)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="InitialBtn"
                      onClick={() => handleQuantityChange(insightCard, 1)}
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
              <div className="menu-card-body">
                <div className="CardBoy-top">
                  <div className="menu-card-title">
                    <a href="ht">{insightCard.title}</a>
                  </div>
                  <div className="menu-card-description">
                    <p>
                      {insightCard.desc}
                      {order && order.toppings.length > 0 && (
                        <p className="addedItems">
                          {" "}
                          (+{order.toppings.join(" + ")})
                        </p>
                      )}
                    </p>
                  </div>
                </div>

                <div className="menu-card-footer">
                  <p>{insightCard.price.toFixed(2)} $</p>
                  <button onClick={() => openModal(insightCard)}>
                    {menuWords.Switch}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {modalOpen && (
        <ChangingItemModal
          item={selectedItem}
          order={orders.find((o) => o.id === selectedItem?.id)}
          isOpen={modalOpen}
          onClose={closeModal}
          onAddToOrder={handleAddToOrder}
        />
      )}
    </div>
  );
};

export default MenuCards;
