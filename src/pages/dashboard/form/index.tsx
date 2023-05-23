import { SimpleForm, UploadForm } from '@/components/Form';
import { PageContainer } from '@/components/PageContainer';
import { AdminLayout } from '@/layouts/AdminLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { SimpleGrid, Stack } from '@mantine/core';

const FormPage: NextPageWithLayout = () => {
	return (
		<PageContainer title="Forms">
			<Stack spacing={40}>
				<SimpleForm />
				<UploadForm />
			</Stack>
		</PageContainer>
	);
};

FormPage.getLayout = page => <AdminLayout>{page}</AdminLayout>;

export default FormPage;
