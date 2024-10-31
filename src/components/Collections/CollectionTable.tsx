"use client";

import { Button, Menu, Paper, Space } from "@mantine/core";
import { MantineReactTable, type MRT_ColumnDef } from "mantine-react-table";
import { useMemo } from "react";
import { useCustomTable } from "@/hooks/use-custom-table";
import { useRouter } from "next/navigation";
import { useCollections } from "@/services/collections";
import { Collection } from "@/services/collections/types";

export function CollectionTable() {
	const { data, isError, isFetching, isLoading } = useCollections();
	const router = useRouter();

	const columns = useMemo<MRT_ColumnDef<Collection>[]>(
		() => [
			{
				accessorKey: "slug",
				header: "Handle",
			},
			{
				accessorKey: "title",
				header: "Title",
			},
			{
				accessorKey: "description",
				header: "Description",
			},
			{
				accessorKey: "path",
				header: "Path",
			},
		],
		[]
	);

	const table = useCustomTable<Collection>({
		columns,
		data: data ?? [],
		rowCount: data?.length ?? 0,
		state: {
			isLoading,
			showAlertBanner: isError,
			showProgressBars: isFetching,
		},
		enableHiding: true,
		enableRowNumbers: true,
		enableRowActions: true,
		renderRowActionMenuItems: ({ row }) => (
			<>
				<Menu.Item onClick={() => console.info("Deactivate")}>
					View Detail
				</Menu.Item>
				<Menu.Item onClick={() => console.info("Update")}>Update</Menu.Item>
				<Menu.Item onClick={() => console.info("Delete")}>Delete</Menu.Item>
			</>
		),
	});

	return (
		<Paper withBorder radius="md" p="md" mt="lg">
			<Button
				onClick={() => router.push("/dashboard/collections/createCollection")}
			>
				Create Collection
			</Button>
			<Space h="md" />
			<MantineReactTable table={table} />
		</Paper>
	);
}
