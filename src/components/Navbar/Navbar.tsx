"use client";

import { ScrollArea } from "@mantine/core";

import { UserButton } from "@/components/UserButton/UserButton";
import type { NavItem } from "@/types/nav-item";
import { NavLinksGroup } from "./NavLinksGroup";
import classes from "./Navbar.module.css";

interface Props {
  data: NavItem[];
  hidden?: boolean;
}

export function Navbar({ data }: Props) {
  const links = data.map((item) => (
    <NavLinksGroup key={item.label} {...item} />
  ));

  return (
    <>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Harriette"
          email="hspoon@outlook.com"
        />
      </div>
    </>
  );
}
