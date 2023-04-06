import { PageContainer } from '@/components/PageContainer';
import { AdminLayout } from '@/layouts/AdminLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { getTickersServerSide } from '@/pages/api/tickers';
import { useTickers } from '@/services/ticker';
import { Ticker, TickerApiResponse } from '@/types/ticker-response';
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

export const getStaticProps: GetStaticProps = () => {
	const tickerData = getTickersServerSide();
	return { props: { tickerData } };
};

interface Props {
	tickerData: TickerApiResponse;
}

const PaginationTable: NextPageWithLayout<Props> = ({ tickerData }) => {
	const [pagination, setPagination] = useState<MRT_PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	const { data, isError, isFetching, isLoading, refetch } = useTickers(
		{
			pageIndex: pagination.pageIndex,
			pageSize: pagination.pageSize,
		},
		tickerData
	);

	const columns = useMemo<MRT_ColumnDef<Ticker>[]>(
		() => [
			{
				accessorKey: 'market.name',
				header: 'Market',
			},
			{
				accessorKey: 'volume',
				header: 'Volume',
			},
			{
				accessorKey: 'trust_score',
				header: 'Score',
				Cell: ({ cell }) => {
					const value = cell.getValue<string>();
					return <Badge color={value}>{value}</Badge>;
				},
			},
			{
				accessorKey: 'timestamp',
				header: 'Time',
			},
		],
		[]
	);

	return (
		<PageContainer title="Pagination" fluid>
			<MantineReactTable
				columns={columns}
				data={data?.list ?? []}
				initialState={{ showColumnFilters: false, density: 'lg' }}
				manualPagination
				localization={MRT_Localization_ZH_HANS}
				enableColumnActions={false}
				enableDensityToggle={false}
				enableFullScreenToggle={false}
				enableGlobalFilter={false}
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
				rowCount={data?.total ?? 0}
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
