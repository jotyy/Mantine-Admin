"use client";

import { Button, Container, Group, Text, Title } from "@mantine/core";
import { IconArrowRight, IconStar } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import classes from "./HeroSection.module.css";

export function HeroSection() {
  const router = useRouter();

  return (
    <Container pt="sm" size="lg">
      <div className={classes.inner}>
        <Title className={classes.title}>MantineAdmin</Title>
        <Title className={classes.subtitle}>
          A Next.js 13 Admin template build with Mantine UI
        </Title>

        <Text className={classes.description} mt={30}>
          Build fully functional dashboard web applications with ease –
          Mantine-Admin includes all components and hooks to cover you in any
          situation
        </Text>

        <Group mt={40}>
          <Button
            size="lg"
            className={classes.control}
            onClick={() => {
              router.push("/dashboard");
            }}
            rightSection={<IconArrowRight />}
          >
            Get started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={classes.control}
            onClick={() => {
              // open github
              window.open("https://github.com/jotyy/mantine-admin");
            }}
            rightSection={<IconStar />}
          >
            Give a Star
          </Button>
        </Group>
      </div>
    </Container>
  );
}
