"use client";

import {
	Badge,
	Button,
	Menu,
	Modal,
	Paper,
	Rating,
	Space,
	Title,
} from "@mantine/core";
import { MantineReactTable, type MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { useCustomTable } from "@/hooks/use-custom-table";
import { useProducts } from "@/services/products";
import type { Product } from "@/services/products/types";
import { useRouter } from "next/navigation";

export function ProductTable() {
	const { data, isError, isFetching, isLoading } = useProducts();
	const router = useRouter();

	const columns = useMemo<MRT_ColumnDef<Product>[]>(
		() => [
			{
				accessorKey: "handle", //access nested data with dot notation
				header: "Handle",
			},
			{
				accessorKey: "title", //access nested data with dot notation
				header: "Title",
			},
			{
				accessorKey: "description",
				header: "Description",
			},
			{
				accessorKey: "featuredImage.url",
				header: "FeaturedImage",
			},
			{
				accessorKey: "vendor",
				header: "Vendor",
			},
			{
				accessorKey: "priceRange.maxVariantPrice.amount",
				header: "Price",
				accessorFn: (row) => `$${Number(row.priceRange ?? 0).toFixed(2)}`,
			},
			{
				accessorKey: "collections.title",
				header: "Collections",
			},
			// {
			// 	accessorKey: "rating",
			// 	header: "Reviews",
			// 	Cell: ({ cell }) => (
			// 		<Rating defaultValue={cell.getValue<number>()} readOnly />
			// 	),
			// },
			// {
			// 	accessorKey: "inventoryStatus",
			// 	header: "Status",
			// 	Cell: ({ cell }) => {
			// 		const status = cell.getValue<"INSTOCK" | "OUTOFSTOCK" | "LOWSTOCK">();
			// 		let color: "red" | "yellow" | "green" = "red";
			// 		if (status === "INSTOCK") color = "green";
			// 		else if (status === "LOWSTOCK") color = "yellow";
			// 		return <Badge color={color}>{status}</Badge>;
			// 	},
			// 	filterVariant: "select",
			// 	mantineFilterSelectProps: {
			// 		data: [
			// 			{ label: "In Stock", value: "INSTOCK" },
			// 			{ label: "Out of Stock", value: "OUTOFSTOCK" },
			// 			{ label: "Low Stock", value: "LOWSTOCK" },
			// 		] as any,
			// 	},
			// },
		],
		[]
	);

	const table = useCustomTable<Product>({
		columns,
		data: data ?? [],
		rowCount: data?.length ?? 0,
		state: {
			isLoading,
			showAlertBanner: isError,
			showProgressBars: isFetching,
		},
		enableHiding: true,
		enableRowNumbers: true,
		enableRowActions: true,
		renderRowActionMenuItems: ({ row }) => (
			<>
				<Menu.Item onClick={() => console.info("Deactivate")}>
					View Detail
				</Menu.Item>
				<Menu.Item onClick={() => console.info("Update")}>Update</Menu.Item>
				<Menu.Item onClick={() => console.info("Delete")}>Delete</Menu.Item>
			</>
		),
	});

	return (
		<Paper withBorder radius="md" p="md" mt="lg">
			<Button onClick={() => router.push("/dashboard/products/createProduct")}>
				Create Product
			</Button>
			<Space h="md" />
			<MantineReactTable table={table} />
		</Paper>
	);
}
