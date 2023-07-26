'use client';

import { useConfigStore } from '@/stores/config';
import { Group, Radio } from '@mantine/core';

export const DirectionSwitcher = () => {
	const { direction, setDirection } = useConfigStore();

	return (
		<Radio.Group
			value={direction}
			onChange={setDirection}
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
