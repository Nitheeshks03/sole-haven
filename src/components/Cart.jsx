import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ScrollArea,
  NumberInput,
} from "@mantine/core";

export function Cart({ cart }) {
  const rows = cart?.map((item) => (
    <tr key={item.product.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.product.image[0]} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.product.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.product.subCategory}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <NumberInput value={item.qty} maw={100} />
      </td>
      <td>₹{item.price}</td>
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
