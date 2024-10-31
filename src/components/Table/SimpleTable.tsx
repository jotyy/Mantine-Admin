"use client";

import { Product } from "@/services/products/types";
import { Paper, Space, Title } from "@mantine/core";
import { type MRT_ColumnDef, MantineReactTable } from "mantine-react-table";
import { useMemo } from "react";

// nested data is ok, see accessorKeys in ColumnDef below
const data: Product[] = [
	{
		id: "6721e1bbf7190fab9f843de8",
		handle: "utpote-virgo-solus",
		availableForSale: false,
		title: "Ergonomic Plastic Fish",
		description:
			"The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
		options: [],
		priceRange: {
			minVariantPrice: {
				amount: "233623",
				currencyCode: "VND",
			},
			maxVariantPrice: {
				amount: "476672",
				currencyCode: "VND",
			},
		},
		compareAtPriceRange: {
			maxVariantPrice: {
				amount: "406314",
				currencyCode: "VND",
			},
		},
		variants: [],
		featuredImage: {
			url: "https://loremflickr.com/200/200/tshirt,product/all?lock=2534756838414152",
			altText: "curatio audax aeger arguo theologus",
			width: 200,
			height: 200,
		},
		images: [],
		tags: ["Recycled", "Modern", "Oriental", "Recycled"],
		vendor: "Abbott LLC",
		collections: [
			{
				_id: "6721e1bbf7190fab9f843de2",
				slug: "curtus-tenuis-nemo",
				title: "aliqua taedium verto minima",
			},
			{
				_id: "6721e1bbf7190fab9f843de5",
				slug: "modi-tamisium-consuasor",
				title: "eum civis caute doloremque",
			},
		],
		createdAt: "2024-10-30T07:35:23.873Z",
		updatedAt: "2024-10-30T07:35:23.873Z",
	},
];

export const SimpleTable = () => {
	//should be memoized or stable
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
				accessorKey: "vendor", //normal accessorKey
				header: "Vendor",
			},
		],
		[]
	);

	return (
		<Paper withBorder radius="md" p="md">
			<Title order={5}>Simple</Title>
			<Space h="md" />
			<MantineReactTable
				columns={columns}
				data={data}
				mantinePaperProps={{ shadow: "0", withBorder: false }}
			/>
		</Paper>
	);
};
