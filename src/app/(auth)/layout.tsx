import { Anchor, Box, Text, Title } from "@mantine/core";
import classes from "./layout.module.css";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <Box className={classes.wrapper}>
      <Title order={1} fw="bolder">
        Mantine Admin
      </Title>
      <Text c="dimmed" size="sm" mt={5}>
        Don&apos;t have an account?{" "}
        <Anchor size="sm" href="/register">
          Sign Up
        </Anchor>
      </Text>
      <Box w={400}>{children}</Box>
    </Box>
  );
}
