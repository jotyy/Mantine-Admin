import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import type { Product } from "./types";

export const getProducts = async () => {
  const res = await ky.get("/mock/products.json").json<{ data: Product[] }>();

  return res.data;
};

export const useProducts = () =>
  useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
