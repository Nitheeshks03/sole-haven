import {Menu, Text, Badge, Avatar, Divider} from '@mantine/core';
import { IconArrowsLeftRight } from "@tabler/icons-react";

const avatar = (
    <Avatar alt="Avatar for badge" size={24} mr={5} src="./images/avatar.png" />
  );
  
function ProfileMenu({userName}) {
    return (
        <Menu >
            <Menu.Target>
            <Badge
                pl={0}
                size="lg"
                color="teal"
                radius="xl"
                leftSection={avatar}
                sx={{ cursor: "pointer" }}
              >
                <Text size="sm">{userName}</Text>
              </Badge>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Label>Profile</Menu.Label>
                <Divider />
                <Menu.Item>My Account</Menu.Item>
                <Menu.Item>Orders</Menu.Item>
                <Menu.Item color='red' icon={<IconArrowsLeftRight size={14} />}>Log Out</Menu.Item>

            </Menu.Dropdown>
        </Menu>
    )
}

export default ProfileMenu
