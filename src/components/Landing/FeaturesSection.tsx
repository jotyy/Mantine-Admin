"use client";

import {
  Container,
  Paper,
  SimpleGrid,
  Space,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandOauth,
  IconBrandPlanetscale,
  IconBrandReact,
} from "@tabler/icons-react";
import classes from "./FeatureSection.module.css";

export const featuresData = [
  {
    icon: IconBrandNextjs,
    title: "Next.js",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
  },
  {
    icon: IconBrandReact,
    title: "React 18",
    description: "Server and Client Components. Use hook.",
  },
  {
    icon: IconBrandPlanetscale,
    title: "Database",
    description: "ORM using Prisma and deployed on PlanetScale.",
  },
  {
    icon: IconBrandMantine,
    title: "Components",
    description: "UI components built using Mantine UI.",
  },
  {
    icon: IconBrandOauth,
    title: "Authentication",
    description: "Authentication using NextAuth.js and middlewares.",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <Paper h="100%" shadow="md" px="lg" py="sm" radius="md" withBorder>
      <ThemeIcon variant="light" size={60} radius={60}>
        <Icon size="2rem" stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7} fw="600">
        {title}
      </Text>
      <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </Paper>
  );
}

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export function FeaturesSection({
  title,
  description,
  data = featuresData,
}: FeaturesGridProps) {
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>
      <Space h="md" />

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "lg", md: "lg", lg: "xl" }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
