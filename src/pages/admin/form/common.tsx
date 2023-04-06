import { AdminLayout } from '@/layouts/AdminLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { Box, Button, Input, Space, Text, TextInput } from '@mantine/core';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { modals } from '@mantine/modals';
import { PageContainer } from '@/components/PageContainer';

const schema = z.object({
	name: z.string().min(1, { message: '用户名不可为空' }),
	email: z.string().email('邮箱格式不正确'),
});

type User = z.infer<typeof schema>;

const SimpleForm: NextPageWithLayout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: User) =>
		modals.openConfirmModal({
			title: '注册成功',
			children: <Text size="sm">{data.name}</Text>,
			labels: { confirm: '确认', cancel: '取消' },
			onConfirm: () => console.log('Confirmed'),
		});

	return (
		<PageContainer title="Common Form">
			<Box<'form'> sx={{ width: '300px' }}>
				<Text<'h2'> component="h2" fw="bold" fz="lg">
					Register
				</Text>
				<TextInput
					label="Username"
					error={errors.name && errors.name.message}
					{...register('name')}
				/>
				<TextInput
					label="Email"
					error={errors.email && errors.email.message}
					{...register('email')}
				/>
				<Space h="md" />
				<Button onClick={handleSubmit(onSubmit)}>Register</Button>
			</Box>
		</PageContainer>
	);
};

SimpleForm.getLayout = page => <AdminLayout>{page}</AdminLayout>;

export default SimpleForm;
