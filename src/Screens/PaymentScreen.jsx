import Cart from "../Components/Cart";
import { Select } from "@mantine/core";
import { Text, Paper, Button } from "@mantine/core";
import "./PaymentScreen.css";
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
function PaymentScreen() {
  return (
    <div className="payment-container">
      <div className="order">
        <div className="shipping">
          <h2>Shipping</h2>
          <Paper shadow="xs" p="md" radius='xs'>
            <Text >
              Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
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
          <Cart data={sampleData} />
        </div>
      </div>
      <div className="order-summary">
      <h2>Order Summary</h2><hr/>
        <p>Subtotal</p><hr/>
        <p>Shipping</p><hr/>
        <p>Tax</p><hr/>
        <p>Total</p>
        <Button className='order-btn'>Place order</Button>
      </div>
    </div>
  );
}

export default PaymentScreen;
