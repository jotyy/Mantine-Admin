"use client";

import { type Direction, Group, Radio, useDirection } from "@mantine/core";

export const DirectionSwitcher = () => {
  const { dir, setDirection } = useDirection();

  return (
    <Radio.Group
      value={dir}
      onChange={(value) => setDirection(value as Direction)}
      name="direction"
      label="Direction"
    >
      <Group mt="sm">
        <Radio value="ltr" label="LTR" />
        <Radio value="rtl" label="RTL" />
      </Group>
    </Radio.Group>
  );
};
