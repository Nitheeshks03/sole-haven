import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Menu,
  ScrollArea,
} from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { axiosInstance } from "../../axiosInstance";
import { useQuery } from "@tanstack/react-query";

export function UsersListScreen() {
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(["users"], () =>
    axiosInstance.get("/users").then((res) => res.data)
  );

  const handleDeleteUser = (id) => {
    axiosInstance.delete(`/users/${id}`);
  };

  const rows = users?.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.image} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text c="dimmed" fz="xs">
              {item._id}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Text fz="sm">{item.email}</Text>
      </td>
      <td>
        <Text fz="sm">{item.isAdmin ? <strong>Admin</strong> : "User"}</Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconPencil size="1rem" stroke={1.5} />
          </ActionIcon>
          <Menu
            transitionProps={{ transition: "pop" }}
            withArrow
            position="bottom-end"
            withinPortal
          >
            <Menu.Target>
              <ActionIcon>
                <IconTrash
                  size="1rem"
                  stroke={1.5}
                  color="red"
                  onClick={handleDeleteUser(item._id)}
                />
              </ActionIcon>
            </Menu.Target>
          </Menu>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table verticalSpacing="md">
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default UsersListScreen;
