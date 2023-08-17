import Cart from "../components/Cart";
import { Divider, Select } from "@mantine/core";
import { Text, Paper, Button } from "@mantine/core";
import "./PaymentScreen.css";
import { useContext} from "react";
import { CartContext } from "../contexts/CartContext";
import { AddressContext } from '../contexts/AddressContext';

function PaymentScreen( ) {
  const { subTotal,cart } = useContext(CartContext);
  const { name,phone,city,zipcode,address } = useContext(AddressContext);
  const shipping = (0.1 * subTotal).toFixed(2) <500 ? (0.1 * subTotal).toFixed(2) : 500 ;
  const tax = (0.18 * subTotal).toFixed(2);
  const total = (Number(subTotal) + Number(shipping) + Number(tax)).toFixed(2);

  

  return (
    <div className="payment-container">
      <div className="order">
        <div className="shipping">
          <h2>Shipping</h2>
          <Paper shadow="xs" p="md" radius="xs">
            <Text className='address-details'>
              <p>Name: {name}</p>

              <p>Phone: {phone}</p>

              <p>City: {city}</p>

              <p>Zipcode: {zipcode}</p>

              <p>Address: {address}</p>
            </Text>
          </Paper>
        </div>
        <div className="payment">
          <h2>Payment</h2>
          <Select
            label="Select payment method"
            placeholder="Select payment method"
            data={[
              { value: "paypal", label: "Paypal" },
              { value: "stripe", label: "Stripe" },
              { value: "cash", label: "Cash" },
            ]}
          />
        </div>
        <div className="cart-items">
          <h2>Cart Items</h2>
          <Cart />
        </div>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <hr />
        <p>Subtotal - ₹{subTotal}</p>
        <Divider />
        <p>Shipping - ₹{shipping}</p>
        <Divider />
        <p>Tax - ₹{tax}</p>
        <Divider />
        <h4>Total - ₹{total}</h4>
        <Button className="order-btn">Place order</Button>
      </div>
    </div>
  );
}

export default PaymentScreen;
