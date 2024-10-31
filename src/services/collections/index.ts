import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { Collection } from "./types";

export const getCollections = async () => {
	const res = await ky
		.get("http://localhost:3002/collections")
		.json<{ docs: any }>();

	return res.docs;
};

export const useCollections = () =>
	useQuery<Collection[]>({
		queryKey: ["collections"],
		queryFn: () => getCollections(),
	});
