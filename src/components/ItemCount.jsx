import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ product, initial = 1, onAdd }) => {
  if (!product) {
    return <p>Cargando información del producto...</p>;
  }

  const { stock, image, title, description, price } = product;
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-detail-with-count">
      <div className="product-details">
        <h2>{title}</h2>
        <img src={image} alt={title} className="product-image" />
        <p>{description}</p>
        <p>Precio: ${price}</p>
        <p>Stock: {stock}</p>
      </div>
      <div className="counter-container">
        <div className="button-container">
          <button className="action-button" onClick={decrement}>
            -
          </button>
          <p>{count}</p>
          <button className="action-button" onClick={increment}>
            +
          </button>
        </div>
        <br />
        <button className="btn btn-primary" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
