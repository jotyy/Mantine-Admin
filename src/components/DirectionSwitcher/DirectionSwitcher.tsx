'use client';

import { Group, Radio } from '@mantine/core';
import { useConfigStore } from '@/stores/config';

export const DirectionSwitcher = () => {
	const { direction, setDirection } = useConfigStore();

	return (
		<Radio.Group value={direction} onChange={setDirection} name="direction" label="Direction">
			<Group mt="sm">
				<Radio value="ltr" label="LTR" />
				<Radio value="rtl" label="RTL" />
			</Group>
		</Radio.Group>
	);
};
