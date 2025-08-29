//Components/Store.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../Hooks/CartContext";

const Product = ({ item, onChange }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <img src={item.image} width="150px" />
      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => onChange(item.id, parseInt(e.target.value))}
      />
    </div>
  );
};

const Cart = () => {
  const { cart, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", id, quantity });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h3>Carrinho</h3>
      {cart.length === 0 ? (
        <p>O carrinho está vazio!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <>
              <Product item={item} onChange={updateQuantity} />
            </>
          ))}
          <p>Carrinho cheio</p>
          <button onClick={clearCart}>Limpar carrinho</button>
        </div>
      )}
    </div>
  );
};

const Store = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    axios
      .get("https://api.npoint.io/1ad9f50c6a37c7fea513")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Erro ao buscar produtos: ", error));
  }, []);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <>
      <h2>Templates</h2>
      <hr />
      <Cart />
      <hr />
      {products.map((product) => (
        <div>
          <img src={product.image} width="150px" />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <pre>${product.price}</pre>
          <button onClick={() => addToCart(product)}>
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </>
  );
};
export default Store;
