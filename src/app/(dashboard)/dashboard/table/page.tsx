import { PageContainer } from '@/components/PageContainer';
import { SimpleTable, PaginationTable } from '@/components/Table';

export default function TablePage() {
	return (
		<PageContainer title="Tables">
			<SimpleTable />
			<PaginationTable />
		</PageContainer>
	);
}
