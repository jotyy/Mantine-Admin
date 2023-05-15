import { fetcher } from '@/services/global/api';
import { BlocksResponse } from '@/types/ticker-response';
import { useQuery } from '@tanstack/react-query';

type Params = {
	pageIndex: number;
	pageSize: number;
};

export const getBlocks = ({ pageIndex, pageSize }: Params) =>
	fetcher<BlocksResponse>(
		`/api/v1/transactions?page=${pageIndex + 1}&page_size=${pageSize}`
	);

export const useBlocks = ({ pageIndex, pageSize }: Params) =>
	useQuery({
		queryKey: ['blocks', pageIndex, pageSize],
		queryFn: () => getBlocks({ pageIndex, pageSize }),
		keepPreviousData: true,
	});
