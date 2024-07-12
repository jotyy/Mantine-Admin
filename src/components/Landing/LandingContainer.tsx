"use client";

import { Box } from "@mantine/core";
import type { ReactNode } from "react";
import classes from "./LandingContainer.module.css";

interface LandingContainerProps {
  children: ReactNode;
}

export function LandingContainer({ children }: LandingContainerProps) {
  return <Box className={classes.box}>{children}</Box>;
}
