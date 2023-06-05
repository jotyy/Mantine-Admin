import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
	baseURL: '/',
});

export const fetcher = async <Data>(url: string) => {
	const response = await api.request<Data, AxiosResponse<Data>>({
		url,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response.data as Data;
};
