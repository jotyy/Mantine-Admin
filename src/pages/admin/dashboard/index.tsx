import { PageContainer } from '@/components/PageContainer';
import { StatsGroup } from '@/components/StatsGroup';
import { mockData } from '@/components/StatsGroup/mock';
import { AdminLayout } from '@/layouts/AdminLayout';
import { NextPageWithLayout } from '@/pages/_app';

const Dashboard: NextPageWithLayout = () => {
	return (
		<PageContainer title="Dashboard">
			<StatsGroup data={mockData} />
		</PageContainer>
	);
};

Dashboard.getLayout = page => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;
