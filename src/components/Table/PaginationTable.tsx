"use client";

import { Badge, Paper, Rating, Space, Title } from "@mantine/core";
import { MantineReactTable, type MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { useCustomTable } from "@/hooks/use-custom-table";
import { useProducts } from "@/services/products";
import type { Product } from "@/services/products/types";

export function PaginationTable() {
  const { data, isError, isFetching, isLoading } = useProducts();

  const columns = useMemo<MRT_ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: "code",
        header: "Code",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "price",
        header: "Price",
        accessorFn: (row) => `$${(row.price ?? 0).toFixed(2)}`,
      },
      {
        accessorKey: "category",
        header: "Category",
      },
      {
        accessorKey: "rating",
        header: "Reviews",
        Cell: ({ cell }) => (
          <Rating defaultValue={cell.getValue<number>()} readOnly />
        ),
      },
      {
        accessorKey: "inventoryStatus",
        header: "Status",
        Cell: ({ cell }) => {
          const status = cell.getValue<"INSTOCK" | "OUTOFSTOCK" | "LOWSTOCK">();
          let color: "red" | "yellow" | "green" = "red";
          if (status === "INSTOCK") color = "green";
          else if (status === "LOWSTOCK") color = "yellow";
          return <Badge color={color}>{status}</Badge>;
        },
        filterVariant: "select",
        mantineFilterSelectProps: {
          data: [
            { label: "In Stock", value: "INSTOCK" },
            { label: "Out of Stock", value: "OUTOFSTOCK" },
            { label: "Low Stock", value: "LOWSTOCK" },
          ] as any,
        },
      },
    ],
    [],
  );

  const table = useCustomTable<Product>({
    columns,
    data: data ?? [],
    rowCount: data?.length ?? 0,
    state: {
      isLoading,
      showAlertBanner: isError,
      showProgressBars: isFetching,
    },
  });

  return (
    <Paper withBorder radius="md" p="md" mt="lg">
      <Title order={5}>Pagintion Example</Title>
      <Space h="md" />
      <MantineReactTable table={table} />
    </Paper>
  );
}
