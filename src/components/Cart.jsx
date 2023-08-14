import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ScrollArea,
  NumberInput,
} from "@mantine/core";
import { useContext} from "react";
import { CartContext } from "../contexts/CartContext";

export function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleQuantity = (itemIndex, newQty) => {
    const updatedCart = [...cart];
    updatedCart[itemIndex].qty = newQty;
    setCart(updatedCart);
  };

  const rows = cart?.map((item, index) => (
    <tr key={item.product.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.product.image[0]} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.product.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.product.subCategory} | size - {item.size}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <NumberInput
          value={item.qty}
          onChange={(newQty) => handleQuantity(index, newQty)}
          maw={"100px"}
        />
      </td>
      <td>₹{item.product.price}</td>
      <td>
        <Badge color="blue" variant="light" sx={{ cursor: "pointer" }}>
          delete
        </Badge>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm" highlightOnHover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default Cart;
