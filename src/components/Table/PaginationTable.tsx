'use client';

import { useProducts } from '@/services/products';
import { Product } from '@/services/products/types';
import {
	ActionIcon,
	Badge,
	Paper,
	Rating,
	Space,
	Stack,
	Title,
	Tooltip,
} from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import { MRT_ColumnDef, MantineReactTable } from 'mantine-react-table';

import { useMemo } from 'react';

export function PaginationTable() {
	const { data, isError, isFetching, isLoading, refetch } = useProducts();

	const columns = useMemo<MRT_ColumnDef<Product>[]>(
		() => [
			{
				accessorKey: 'code',
				header: 'Code',
			},
			{
				accessorKey: 'name',
				header: 'Name',
			},
			{
				accessorKey: 'price',
				header: 'Price',
				accessorFn: row => `$${row.price.toFixed(2)}`,
			},
			{
				accessorKey: 'category',
				header: 'Category',
			},
			{
				accessorKey: 'rating',
				header: 'Reviews',
				Cell: ({ cell }) => <Rating defaultValue={cell.getValue<number>()} readOnly />,
			},
			{
				accessorKey: 'inventoryStatus',
				header: 'Status',
				Cell: ({ cell }) => {
					const status = cell.getValue<'INSTOCK' | 'OUTOFSTOCK' | 'LOWSTOCK'>();
					let color: 'red' | 'yellow' | 'green' = 'red';
					if (status === 'INSTOCK') color = 'green';
					else if (status === 'LOWSTOCK') color = 'yellow';
					return <Badge color={color}>{status}</Badge>;
				},
				filterVariant: 'select',
				mantineFilterSelectProps: {
					data: [
						{ label: 'In Stock', value: 'INSTOCK' },
						{ label: 'Out of Stock', value: 'OUTOFSTOCK' },
						{ label: 'Low Stock', value: 'LOWSTOCK' },
					] as any,
				},
			},
		],
		[]
	);

	return (
		<Paper withBorder radius="md" p="md" mt="lg">
			<Title order={5}>Pagintion Example</Title>
			<Space h="md" />
			<MantineReactTable
				columns={columns}
				data={data ?? []}
				initialState={{ density: 'md' }}
				enableDensityToggle={false}
				mantinePaperProps={{ shadow: '0', withBorder: false }}
				mantineFilterTextInputProps={{
					sx: { borderBottom: 'unset', marginTop: '8px' },
					variant: 'filled',
				}}
				mantineFilterSelectProps={{
					sx: { borderBottom: 'unset', marginTop: '8px' },
					variant: 'filled',
				}}
				mantineToolbarAlertBannerProps={
					isError
						? {
								color: 'error',
								children: 'Error fetching data',
						  }
						: undefined
				}
				rowCount={data?.length ?? 0}
				state={{
					isLoading,
					showAlertBanner: isError,
					showProgressBars: isFetching,
				}}
			/>
		</Paper>
	);
}
