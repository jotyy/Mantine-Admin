"use client";

import {
  AppShell,
  Burger,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AdminHeader } from "@/components/Headers/AdminHeader";
import { Navbar } from "@/components/Navbar/Navbar";
import { navLinks } from "@/config";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const bg =
    colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Navbar>
        <Navbar data={navLinks} hidden={!opened} />
      </AppShell.Navbar>
      <AppShell.Header>
        <AdminHeader
          burger={
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              mr="xl"
            />
          }
        />
      </AppShell.Header>
      <AppShell.Main bg={bg}>{children}</AppShell.Main>
      <AppShell.Footer>
        <Text w="full" size="sm" c="gray">
          CopyRight © 2023 Jotyy
        </Text>
      </AppShell.Footer>
    </AppShell>
  );
}
