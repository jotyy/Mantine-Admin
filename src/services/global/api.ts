import fetch from 'cross-fetch';

export const fetcher = async <Data>(url: RequestInfo | URL, init?: RequestInit) => {
	const response = await fetch(url, init);
	const data = await response.json();
	return data as Data;
};
