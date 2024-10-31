import { Image } from "../products/types";

export type Collection = {
	id: string;
	slug: string;
	title: string;
	description: string;
	updatedAt: string;
	path?: string;
	image?: Image;
};
