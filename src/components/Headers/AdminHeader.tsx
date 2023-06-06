import { Spacer } from '@/components/Spacer';
import { Avatar, Flex, Header, Menu, Text } from '@mantine/core';
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

export function AdminHeader({ burger }: Props) {
	return (
		<Header height={72} px="lg" withBorder={false}>
			<Flex direction="row" h={72} align="center" gap={8}>
				{burger && burger}
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
						<Menu.Item icon={<IconArrowsLeftRight size={14} />}>
							Transfer my data
						</Menu.Item>
						<Menu.Item color="red" icon={<IconTrash size={14} />}>
							Delete my account
						</Menu.Item>
					</Menu.Dropdown>
				</Menu>
			</Flex>
		</Header>
	);
}
