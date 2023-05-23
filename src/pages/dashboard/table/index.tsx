import { PageContainer } from '@/components/PageContainer';
import { SimpleTable } from '@/components/Table';
import { AdminLayout } from '@/layouts/AdminLayout';
import { NextPageWithLayout } from '@/pages/_app';

const TablePage: NextPageWithLayout = () => {
	return (
		<PageContainer title="Simple Table">
			<SimpleTable />
		</PageContainer>
	);
};

TablePage.getLayout = page => <AdminLayout>{page}</AdminLayout>;

export default TablePage;
