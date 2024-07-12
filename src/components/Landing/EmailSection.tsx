"use client";

import { Button, Image, Text, TextInput, Title } from "@mantine/core";
import classes from "./EmailSection.module.css";

export function EmailSection() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title order={3} className={classes.title}>
          Wait a minute...
        </Title>
        <Text fw={500} fz="md" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and
          community QA sessions. Our newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
      </div>
      <Image
        src="/static/images/img-email.svg"
        className={classes.image}
        alt="email"
      />
    </div>
  );
}
