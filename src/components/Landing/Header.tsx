"use client";

import {
  Burger,
  Button,
  Center,
  Drawer,
  Group,
  Menu,
  rem,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { Logo } from "@/components/Logo/Logo";
import classes from "./Header.module.css";

interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function Header({ links }: HeaderActionProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Group justify="space-between" w="100%" className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <Logo />
        </Group>
        <Group gap="sm" className={classes.links}>
          {items}
        </Group>
        <Button radius="xl" h={30}>
          Try it now
        </Button>

        <Drawer opened={opened} onClose={toggle} size="md" padding="xl">
          <Stack gap="md" pt="lg">
            {items}
          </Stack>
        </Drawer>
      </Group>
    </header>
  );
}
