import { fetcher } from '@/services/global/api';
import { TickerApiResponse } from '@/types/ticker-response';
import { useQuery } from '@tanstack/react-query';

type Params = {
	pageIndex: number;
	pageSize: number;
};

export const useTickers = ({ pageIndex, pageSize }: Params) =>
	useQuery({
		queryKey: [
			'ticker-data',
			pageIndex, //refetch when pagination.pageIndex changes
			pageSize, //refetch when pagination.pageSize changes
		],
		queryFn: async () => {
			const data = await fetcher<TickerApiResponse>(
				`/api/tickers?page=${pageIndex}&limit=${pageSize}`
			);
			console.log(data);
			return data;
		},
		keepPreviousData: true,
	});
