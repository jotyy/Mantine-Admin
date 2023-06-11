import { PageContainer } from '@/components/PageContainer/PageContainer';
import { PaginationTable } from '@/components/Table/PaginationTable';
import { SimpleTable } from '@/components/Table/SimpleTable';
import { Space } from '@mantine/core';

export default function TablePage() {
	return (
		<PageContainer title="Tables">
			<SimpleTable />
			<PaginationTable />
		</PageContainer>
	);
}
