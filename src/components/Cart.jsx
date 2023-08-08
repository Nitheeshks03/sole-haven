import { Avatar, Badge, Table, Group, Text, ScrollArea, NumberInput } from '@mantine/core';



const rolesData = ['Manager', 'Collaborator', 'Contractor'];

export function Cart({ data }) {
  const rows = data?.map((item) => (
    <tr  key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </td>

      <td >
        <NumberInput maw={100}/>
      </td>
      <td>{item.rate}$</td>
      <td>
        <Badge color="blue" variant="light">
          🗑️
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
