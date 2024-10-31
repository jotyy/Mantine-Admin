import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import type { Product } from "./types";

export const getProducts = async () => {
	const res = await ky
		.get("http://localhost:3002/products")
		.json<{ docs: any }>();

	return res.docs;
};

export const useProducts = () =>
	useQuery<Product[]>({
		queryKey: ["products"],
		queryFn: () => getProducts(),
	});
