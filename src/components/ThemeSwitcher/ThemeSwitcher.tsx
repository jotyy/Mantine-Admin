'use client';

import { ColorScheme, Group, Radio, useMantineColorScheme } from '@mantine/core';
import { useState } from 'react';

export const ThemeSwitcher = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const [themeValue, setThemeValue] = useState(colorScheme);

	return (
		<Radio.Group
			value={themeValue}
			onChange={(value: ColorScheme) => {
				setThemeValue(value);
				toggleColorScheme(value);
			}}
			name="theme"
			label="Theme Mode"
		>
			<Group mt="sm">
				<Radio value="light" label="Light" />
				<Radio value="dark" label="Dark" />
			</Group>
		</Radio.Group>
	);
};
