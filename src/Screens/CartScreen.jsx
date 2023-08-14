import Cart from "../components/Cart";
import "./CartScreen.css";
import { Button } from "@mantine/core";
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';
function CartScreen() {
  const {subTotal} = useContext(CartContext);



  return (
    <div className="container">
      <div className="items-container">
        <Cart />
      </div>
      <div className="cart-container">
        <h2>Cart Total</h2>
        <hr />
        <p>Subtotal : ₹{subTotal}</p>
        <hr />
        <Button className="checkout-btn">Proceed To Checkout</Button>
      </div>
    </div>
  );
}

export default CartScreen;
