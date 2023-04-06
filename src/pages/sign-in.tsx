import { AuthLayout } from '@/layouts/AuthLayout';
import { getPath } from '@/lib/constants';
import {
	Anchor,
	Button,
	Checkbox,
	Group,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './_app';

const SignIn: NextPageWithLayout = () => {
	const router = useRouter();
	const signIn = () => {
		router.push(getPath('INDEX'));
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
				Don&apos;t have an account?{' '}
				<Anchor size="sm" href={getPath('SIGN_UP')}>
					Sign Up
				</Anchor>
			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput label="Email" placeholder="test@example.com" required />
				<PasswordInput label="Password" placeholder="Your password" required mt="md" />
				<Group position="apart" mt="md">
					<Checkbox label="Remember me" />
					<Anchor size="sm" href={getPath('FORGOT_PASSWORD')}>
						Forgot Password？
					</Anchor>
				</Group>
				<Button fullWidth mt="xl" onClick={signIn}>
					Sign In
				</Button>
			</Paper>
		</>
	);
};

SignIn.getLayout = page => <AuthLayout>{page}</AuthLayout>;

export default SignIn;
