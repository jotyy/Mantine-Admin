import Link from 'next/link';
import { AuthLayout } from '@/layouts/AuthLayout';
import { getPath } from '@/lib/constants';
import {
	TextInput,
	PasswordInput,
	Anchor,
	Paper,
	Title,
	Text,
	Space,
	Button,
} from '@mantine/core';
import { NextPageWithLayout } from './_app';
import { notifications } from '@mantine/notifications';

const SignUp: NextPageWithLayout = () => {
	const signUp = () => {
		notifications.show({
			title: 'Email sent',
			message: 'Please check your email to confirm your account',
			color: 'teal',
		});
	};

	return (
		<>
			<Title
				align="center"
				sx={theme => ({
					fontFamily: `Greycliff CF, ${theme.fontFamily}`,
					fontWeight: 900,
				})}
			>
				Mantine Admin
			</Title>
			<Text color="dimmed" size="sm" align="center" mt={5}>
				Already have an account?{' '}
				<Anchor size="sm" href={getPath('SIGN_IN')}>
					Sign In
				</Anchor>
			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput label="Email" placeholder="test@example.com" required />
				<PasswordInput label="Password" placeholder="Your password" required mt="md" />
				<Space h="md" />
				<Button fullWidth mt="xl" onClick={signUp}>
					Sign Up
				</Button>
			</Paper>
		</>
	);
};

SignUp.getLayout = page => <AuthLayout>{page}</AuthLayout>;

export default SignUp;
