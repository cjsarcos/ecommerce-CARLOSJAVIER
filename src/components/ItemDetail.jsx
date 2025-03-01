import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

export const ItemDetail = ({ id, title, description, image, price, stock }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    const item = { id, price, title };
    addItem(item, quantity);

    Swal.fire({
      icon: "success",
      title: "Se agregó el producto al carrito",
    });
  };

  const product = { stock, image: image, title: title, description, price };

  return (
    <div className="custom-container">
      <div className="image-container"></div>
      <div className="info">
        <ItemCount product={product} onAdd={onAdd} />
      </div>
    </div>
  );
};
