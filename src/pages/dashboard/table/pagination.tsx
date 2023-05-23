import { PageContainer } from '@/components/PageContainer';
import { AdminLayout } from '@/layouts/AdminLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { useBlocks } from '@/services/ticker';
import { Data } from '@/types/ticker-response';
import { ActionIcon, Badge, Tooltip } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import {
	MRT_ColumnDef,
	MRT_PaginationState,
	MantineReactTable,
} from 'mantine-react-table';
import { MRT_Localization_ZH_HANS } from 'mantine-react-table/locales/zh-Hans';
import { GetStaticProps } from 'next';

import { useMemo, useState } from 'react';

const PaginationTable: NextPageWithLayout = () => {
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
		<PageContainer title="Pagination">
			<MantineReactTable
				columns={columns}
				data={data?.data ?? []}
				initialState={{ showColumnFilters: false, density: 'lg' }}
				manualPagination
				localization={MRT_Localization_ZH_HANS}
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
		</PageContainer>
	);
};

PaginationTable.getLayout = page => <AdminLayout>{page}</AdminLayout>;

export default PaginationTable;
