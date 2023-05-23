import { PageContainer } from '@/components/PageContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Space, Text, TextInput } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
	name: z.string().min(1, { message: 'Username is required' }),
	email: z.string().email('Email is not valid'),
});

type User = z.infer<typeof schema>;

export const SimpleForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<User>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: User) =>
		modals.openConfirmModal({
			title: 'Register successfully',
			children: <Text size="sm">{data.name}</Text>,
			labels: { confirm: 'Confirm', cancel: 'Cancel' },
			onConfirm: () => console.log('Confirmed'),
		});

	return (
		<>
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
		</>
	);
};
