import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
	baseURL: 'https://mainnet-api.explorer.nervos.org',
});

export const fetcher = async <Data>(url: string) => {
	const response = await api.request<Data, AxiosResponse<Data>>({
		url,
		headers: {
			'Content-Type': 'application/vnd.api+json',
		},
	});

	return response.data as Data;
};
