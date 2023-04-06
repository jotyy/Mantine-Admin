import { fetcher } from '@/services/global/api';
import { TickerApiResponse } from '@/types/ticker-response';
import { useQuery } from '@tanstack/react-query';

type Params = {
	pageIndex: number;
	pageSize: number;
};

export const getTickers = ({ pageIndex, pageSize }: Params) =>
	fetcher<TickerApiResponse>(`/api/tickers?page=${pageIndex}&limit=${pageSize}`);

export const useTickers = (
	{ pageIndex, pageSize }: Params,
	initialData?: TickerApiResponse
) =>
	useQuery({
		queryKey: ['ticker-data', pageIndex, pageSize],
		queryFn: () => getTickers({ pageIndex, pageSize }),
		keepPreviousData: true,
		initialData,
	});
