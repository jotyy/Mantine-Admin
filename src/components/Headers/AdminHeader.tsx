import { Spacer } from '@/components/Spacer';
import {
	ActionIcon,
	Avatar,
	Flex,
	Group,
	Header,
	Kbd,
	Menu,
	Stack,
	Text,
	TextInput,
	createStyles,
} from '@mantine/core';
import {
	IconArrowsLeftRight,
	IconMessageCircle,
	IconPhoto,
	IconSearch,
	IconSettings,
	IconTrash,
} from '@tabler/icons-react';

interface Props {
	burger?: React.ReactNode;
}

const useStyles = createStyles(theme => ({
	header: {
		padding: theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		boxShadow: '1px 1px 3px rgba(0, 0, 0, .25)',
	},
}));

export function AdminHeader({ burger }: Props) {
	const { classes } = useStyles();

	return (
		<Header height={60} withBorder={false} className={classes.header}>
			{burger && burger}
			<TextInput
				placeholder="Search"
				variant="filled"
				icon={<IconSearch size="0.8rem" />}
			/>
			<Spacer />
			<Menu shadow="md" width={200}>
				<Menu.Target>
					<Avatar radius="xl" />
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Label>Application</Menu.Label>
					<Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
					<Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
					<Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
					<Menu.Item
						icon={<IconSearch size={14} />}
						rightSection={
							<Text size="xs" color="dimmed">
								⌘K
							</Text>
						}
					>
						Search
					</Menu.Item>

					<Menu.Divider />

					<Menu.Label>Danger zone</Menu.Label>
					<Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
					<Menu.Item color="red" icon={<IconTrash size={14} />}>
						Delete my account
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
			<ActionIcon aria-label="settings">
				<IconSettings />
			</ActionIcon>
		</Header>
	);
}
