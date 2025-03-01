import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, title, image, price }) => {
  return (
    <div className="item">
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <div>
        <p>Precio: ${price}</p>
        <Link to={`/item/${id}`}>
          <button className="btn btn-dark" style={{ width: "100%" }}>Detalles</button>
        </Link>
      </div>
    </div>
  );
};
