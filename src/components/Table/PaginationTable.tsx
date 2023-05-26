'use client';

import { useBlocks } from '@/services/ticker';
import { Data } from '@/types/ticker-response';
import { ActionIcon, Badge, Stack, Title, Tooltip } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import {
	MRT_ColumnDef,
	MRT_PaginationState,
	MantineReactTable,
} from 'mantine-react-table';

import { useMemo, useState } from 'react';

export function PaginationTable() {
	const [pagination, setPagination] = useState<MRT_PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	const { data, isError, isFetching, isLoading, refetch } = useBlocks({
		pageIndex: pagination.pageIndex,
		pageSize: pagination.pageSize,
	});

	const columns = useMemo<MRT_ColumnDef<Data>[]>(
		() => [
			{
				accessorKey: 'id',
				header: 'ID',
			},
			{
				accessorKey: 'attributes.transaction_hash',
				header: 'Hash',
			},
			{
				accessorKey: 'attributes.capacity_involved',
				header: 'Capacity',
				Cell: ({ cell }) => {
					const value = cell.getValue<string>();
					return <Badge color={value}>{value}</Badge>;
				},
			},
			{
				accessorKey: 'attributes.block_timestamp',
				header: 'Time',
			},
		],
		[]
	);

	return (
		<Stack mt="lg">
			<Title order={5}>Pagintion Example</Title>
			<MantineReactTable
				columns={columns}
				data={data?.data ?? []}
				initialState={{ showColumnFilters: false, density: 'lg' }}
				manualPagination
				enableColumnActions={false}
				enableDensityToggle={false}
				enableFullScreenToggle={false}
				enableGlobalFilter={false}
				mantinePaperProps={{ shadow: '0' }}
				mantineToolbarAlertBannerProps={
					isError
						? {
								color: 'error',
								children: 'Error fetching data',
						  }
						: undefined
				}
				onPaginationChange={setPagination}
				renderTopToolbarCustomActions={() => (
					<Tooltip withArrow label="Refresh Data">
						<ActionIcon onClick={() => refetch()}>
							<IconRefresh />
						</ActionIcon>
					</Tooltip>
				)}
				rowCount={data?.meta.total ?? 0}
				state={{
					isLoading,
					pagination,
					showAlertBanner: isError,
					showProgressBars: isFetching,
				}}
			/>
		</Stack>
	);
}
