import Cart from "../components/Cart";
import "./CartScreen.css";
import { Button } from "@mantine/core";

function CartScreen({ cart }) {
  return (
    <div className="container">
      <div className="items-container">
        <Cart cart={cart} />
      </div>
      <div className="cart-container">
        <h2>Cart Total</h2>
        <hr />
        <p>Subtotal :</p>
        <hr />
        <Button className="checkout-btn">Proceed To Checkout</Button>
      </div>
    </div>
  );
}

export default CartScreen;
