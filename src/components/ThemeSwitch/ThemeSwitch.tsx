import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import React from 'react';

export const ThemeSwitch = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<ActionIcon
			onClick={() => toggleColorScheme()}
			size="lg"
			sx={theme => ({
				backgroundColor:
					theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
			})}
		>
			{colorScheme === 'dark' ? (
				<IconSun size="1.2rem" />
			) : (
				<IconMoonStars size="1.2rem" />
			)}
		</ActionIcon>
	);
};
