import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../config/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

export const CheckOut = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormCheckout({ ...formCheckout, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newOrder = {
        buyer: formCheckout,
        items: cart,
        totalPrice,
        date: serverTimestamp(),
      };

      const orderDoc = await addDoc(collection(db, "orders"), newOrder);
      setOrderId(orderDoc.id);
      clearCart();
      setFormCheckout({ name: "", phone: "", email: "" });
    } catch (error) {
      console.error("Error al enviar la orden:", error);
      alert("Hubo un error al procesar su orden. Por favor, intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container d-flex justify-content-center m-5">
        <p>Enviando orden...</p>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="container d-flex flex-column align-items-center m-5">
        <h3>¡Compra exitosa!</h3>
        <p>
          Su ID de orden de compra es: <strong>{orderId}</strong>
        </p>
        <Link to="/" className="btn btn-primary">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center m-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={formCheckout.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-control"
          value={formCheckout.phone}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={formCheckout.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="submit"
          className="mt-3 btn btn-success"
          value="Terminar la compra"
        />
      </form>
    </div>
  );
};
