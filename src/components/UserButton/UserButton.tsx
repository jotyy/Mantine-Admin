import { Avatar, Flex, Text, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import classes from './UserButton.module.css';

interface UserButtonProps extends UnstyledButtonProps {
	image: string;
	name: string;
	email: string;
}

export function UserButton({ image, name, email }: UserButtonProps) {
	return (
		<UnstyledButton className={classes.user}>
			<Flex>
				<Avatar src={image} radius="xl" />

				<div style={{ flex: 1 }}>
					<Text size="sm" w={500}>
						{name}
					</Text>

					<Text c="dimmed" size="xs">
						{email}
					</Text>
				</div>
			</Flex>
		</UnstyledButton>
	);
}
