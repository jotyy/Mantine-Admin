"use client";

import {
	Flex,
	Grid,
	Text,
	Textarea,
	Title,
	useMantineColorScheme,
	useMantineTheme,
} from "@mantine/core";
import { Button, Paper, Space, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { Product } from "@/services/products/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { modals } from "@mantine/modals";
import { UploadForm } from "@/components/Form/UploadForm";

const schema = z.object({
	title: z.string().min(1, { message: "Collection Name is required" }),
});

export default function CreateCollectionForm() {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Product>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: Product) =>
		modals.openConfirmModal({
			title: "Create Collection successfully",
			children: <Text size="sm">{data.title}</Text>,
			labels: { confirm: "Confirm", cancel: "Cancel" },
			onConfirm: () => console.log("Confirmed"),
		});

	return (
		<div>
			<Title order={5}>Create Collection</Title>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<Grid>
					<Grid.Col span="auto">
						<UploadForm />
					</Grid.Col>
					<Grid.Col span={8}>
						<Flex direction={"column"}>
							<TextInput
								label="Collection Name"
								placeholder="Collection Name"
								required
								mt="md"
								{...register("title")}
							/>
							<Textarea
								label="Collection Description"
								placeholder="Collection Description"
								mt="md"
								{...register("description")}
							/>
							<Button mt="xl" w="200px" onClick={handleSubmit(onSubmit)}>
								Create Collection
							</Button>
						</Flex>
					</Grid.Col>
				</Grid>
				<Space h="md" />
			</Paper>
		</div>
	);
}
