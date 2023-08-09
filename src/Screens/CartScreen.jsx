import Cart from "../Components/Cart";
import "./CartScreen.css";
import { Button } from "@mantine/core";

const sampleData = [
  {
    avatar: "avatar-url-1",
    name: "John Doe",
    job: "Engineer",
    email: "john@example.com",
    rate: 25,
  },
  {
    avatar: "avatar-url-2",
    name: "Jane Smith",
    job: "Designer",
    email: "jane@example.com",
    rate: 40,
  },
];

function CartScreen() {
  return (
    <div className="container">
      <div className="items-container">
        <Cart data={sampleData} />
      </div>
      <div className="cart-container">
        <h2>Cart Total</h2><hr/>
        <p>Subtotal</p><hr/>
        <p>Shipping</p><hr/>
        <p>Tax</p><hr/>
        <p style={{paddingBottom:'80px'}}>Total</p>
        <Button className="checkout-btn" sx={{marginBottom:'20px'}}>Proceed To Checkout</Button>
      </div>
    </div>
  );
}

export default CartScreen;
