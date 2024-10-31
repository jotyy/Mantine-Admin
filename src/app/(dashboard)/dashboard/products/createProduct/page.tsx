"use client";

import {
	Flex,
	Grid,
	Group,
	MultiSelect,
	Switch,
	TagsInput,
	Text,
	Textarea,
	Title,
} from "@mantine/core";
import { Button, Paper, Space, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { Product } from "@/services/products/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { modals } from "@mantine/modals";
import { useState } from "react";
import { UploadForm } from "@/components/Form/UploadForm";

const schema = z.object({
	title: z.string().min(1, { message: "Product Name is required" }),
	vendor: z.string().min(1, { message: "Vendor Name is required" }),
	availableForSale: z.boolean(),
	// options: ProductOption[];
	// priceRange: {
	//   maxVariantPrice: Money;
	//   minVariantPrice: Money;
	// };
	// compareAtPriceRange: {
	//   maxVariantPrice: Money;
	// };
	// variants: ProductVariant[];
	// featuredImage: Image;
	// images: Image[];
	// tags: string[];
	// collections: any;
});

export default function CreateProductForm() {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Product>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: Product) =>
		modals.openConfirmModal({
			title: "Register successfully",
			children: <Text size="sm">{data.title}</Text>,
			labels: { confirm: "Confirm", cancel: "Cancel" },
			onConfirm: () => console.log("Confirmed"),
		});

	const [options, setOptions] = useState([{ name: "", values: "" }]);
	const [variants, setVariants] = useState([
		{
			title: "",
			availableForSale: true,
			selectedOptions: options,
			price: { amount: "", currencyCode: "" },
		},
	]);

	// Hàm thêm option mới
	const handleAddOption = () => {
		setOptions([...options, { name: "", values: "" }]);
	};

	const handleAddVariants = () => {
		setVariants([
			...variants,
			{
				title: "",
				availableForSale: true,
				selectedOptions: options,
				price: { amount: "", currencyCode: "" },
			},
		]);
	};

	// Hàm xử lý thay đổi của từng option
	const handleOptionChange = (index: number, field: string, value: string) => {
		const newOptions: any = [...options];
		newOptions[index][field] = value;
		setOptions(newOptions);
	};

	// Hàm xử lý thay đổi của từng option
	const handleVariantChange = (index: number, field: string, value: string) => {
		const newVariants: any = [...variants];
		newVariants[index][field] = value;
		setVariants(newVariants);
	};

	// Hàm xóa option
	const handleRemoveOption = (index: number) => {
		const newOptions = options.filter((_, i) => i !== index);
		setOptions(newOptions);
	};

	const handleRemoveVariant = (index: number) => {
		const newVariants = variants.filter((_, i) => i !== index);
		setVariants(newVariants);
	};

	return (
		<div>
			<Title order={5}>Create Product</Title>
			<Button mt="xl" onClick={handleSubmit(onSubmit)}>
				Create Product
			</Button>
			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<Grid>
					<Grid.Col span="auto">
						<UploadForm />
					</Grid.Col>
					<Grid.Col span={8}>
						<Flex direction={"column"}>
							<Switch
								defaultChecked
								label="Availabe for sale"
								{...register("availableForSale")}
							/>
							<TextInput
								label="Product Name"
								placeholder="Product Name"
								required
								mt="md"
								{...register("title")}
							/>
							<Textarea
								label="Product Description"
								placeholder="Product Description"
								mt="md"
								{...register("description")}
							/>
							<Flex mt="lg" direction="column" bd="1px solid gray.6" p="xs">
								<Title order={6}>Options Product</Title>
								{options.map((option, index) => (
									<Group key={index} style={{ alignItems: "flex-end" }}>
										<TextInput
											label="Option Name"
											placeholder="Enter option name"
											value={option.name}
											onChange={(e) =>
												handleOptionChange(index, "name", e.target.value)
											}
										/>
										<TextInput
											label="Option Value"
											placeholder="Enter option value"
											value={option.values}
											onChange={(e) =>
												handleOptionChange(index, "values", e.target.value)
											}
										/>
										<Button
											color="red"
											onClick={() => handleRemoveOption(index)}
										>
											Remove
										</Button>
									</Group>
								))}
								<Button
									mt="md"
									w="120px"
									// color="white"
									variant="outline"
									onClick={handleAddOption}
								>
									Add Option
								</Button>
							</Flex>
							<Flex direction={"column"} mt="lg" bd="1px solid gray.6" p="xs">
								<Title order={6}>Variants Product</Title>
								{variants.map((variant, index) => (
									<Flex direction={"column"}>
										<Group key={index} style={{ alignItems: "flex-end" }}>
											<TextInput
												label="Variant Name"
												placeholder="Enter variant name"
												value={variant.title}
												onChange={(e) =>
													handleVariantChange(index, "title", e.target.value)
												}
											/>

											<TextInput
												label="Price Value"
												placeholder="Enter price value"
												value={variant.price.amount}
												onChange={(e) =>
													handleVariantChange(index, "price", e.target.value)
												}
											/>

											<Button
												color="red"
												onClick={() => handleRemoveVariant(index)}
											>
												Remove
											</Button>
										</Group>
										<Switch
											defaultChecked
											label="Availabe for sale"
											checked={variant.availableForSale}
											mt="md"
											onChange={(e) =>
												handleVariantChange(
													index,
													"availableForSale",
													e.target.value
												)
											}
										/>
									</Flex>
								))}
								<Button
									mt="md"
									w="120px"
									variant="outline"
									onClick={handleAddVariants}
								>
									Add Variant
								</Button>
							</Flex>

							<MultiSelect
								label="Collections"
								placeholder="Select collections"
								data={["React", "Angular", "Vue", "Svelte"]}
							/>

							<TagsInput
								label="Press Enter to submit a tag"
								placeholder="Enter tag"
							/>
							<TextInput
								label="Product Vendor"
								placeholder="Product Vendor"
								{...register("vendor")}
							/>
						</Flex>
					</Grid.Col>
				</Grid>
				<Space h="md" />
			</Paper>
		</div>
	);
}
