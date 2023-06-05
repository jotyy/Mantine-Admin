import { fetcher } from '@/services/global/api';
import { useQuery } from '@tanstack/react-query';
import { Product } from './types';

export const getProducts = async () => {
	const res = await fetcher<{ data: Product[] }>('/mock/products.json');

	return res.data;
};

export const useProducts = () =>
	useQuery<Product[]>({
		queryKey: ['products'],
		queryFn: () => getProducts(),
		keepPreviousData: true,
	});
