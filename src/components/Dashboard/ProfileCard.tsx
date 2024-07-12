"use client";

import {
  ActionIcon,
  Avatar,
  Button,
  Card,
  Flex,
  Group,
  Menu,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";

const sectionStyle = {
  padding: "var(--mantine-spacing-md)",
  borderTop:
    "1px solid lightdark(var(--mantine-colors-gray-3), var(--mantine-colors-dark-4))",
};

export function ProfileCard() {
  return (
    <Card radius="md">
      <Card.Section style={sectionStyle}>
        <Group justify="space-between">
          <Avatar radius="xl" />
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle">
                <IconDots size="1rem" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip size={14} />}>
                Action One
              </Menu.Item>
              <Menu.Item leftSection={<IconEye size={14} />}>
                Action Two
              </Menu.Item>
              <Menu.Item leftSection={<IconTrash size={14} />} color="red">
                Action Three
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>

        <Space h="md" />

        <Flex direction="column">
          <Title order={5}>Joshua Lee</Title>
          <Space h="xs" />
          <Text fz="sm" c="dimmed" fw="500">
            jotyy318@email.com
          </Text>
          <Space h="4" />
          <Text fz="sm" c="dimmed" fw="500">
            {`${"0x3D2f3bA6737C6999850E0c0Fe571190E6d27C40C".slice(0, 12)}..${"0x3D2f3bA6737C6999850E0c0Fe571190E6d27C40C".slice(-4)}`}
          </Text>
        </Flex>
      </Card.Section>

      <Card.Section style={sectionStyle}>
        <Group grow>
          <Stack gap={4}>
            <Text fz="sm" fw="500">
              Balance
            </Text>
            <Title order={3}>$9821</Title>
          </Stack>
          <Stack gap={4}>
            <Text fz="sm" fw="500">
              Chain
            </Text>
            <Title order={3}>Etherum</Title>
          </Stack>
        </Group>
      </Card.Section>

      <Card.Section style={sectionStyle}>
        <Group>
          <Button variant="light">Deposit</Button>
          <Button>Buy/Sell</Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
