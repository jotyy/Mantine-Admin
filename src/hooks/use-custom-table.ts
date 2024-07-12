import {
  type MRT_TableOptions,
  useMantineReactTable,
} from "mantine-react-table";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type CustomTableOptions<TData extends Record<string, any> = {}> = Omit<
  MRT_TableOptions<TData>,
  | "manualPagination"
  | "enablePagination"
  | "mantinePaginationProps"
  | "paginationDisplayMode"
  | "mantineTableProps.align"
  | "mantinePaperProps"
  | "initialState.density"
>;

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export const useCustomTable = <TData extends Record<string, any> = {}>(
  tableOptions: CustomTableOptions<TData>,
) => {
  return useMantineReactTable({
    ...{
      paginationDisplayMode: "pages",
      // filters
      manualFiltering: true,
      // styles
      mantineTableProps: {
        align: "center",
      },
      positionActionsColumn: "last",
      mantinePaperProps: {
        shadow: "0",
        radius: "md",
        p: "md",
        withBorder: false,
      },
      displayColumnDefOptions: {
        "mrt-row-actions": {
          size: 200, //make actions column wider
        },
      },
      mantineFilterTextInputProps: {
        style: { borderBottom: "unset", marginTop: "8px" },
        variant: "filled",
      },
      mantineFilterSelectProps: {
        style: { borderBottom: "unset", marginTop: "8px" },
        variant: "filled",
      },
      // features
      enableColumnActions: false,
      enableDensityToggle: false,
      enableFullScreenToggle: false,
      enableHiding: false,
      enablePinning: false,
      // states
      initialState: {
        density: "md",
      },
      columns: [],
      data: [],
    },
    ...tableOptions,
  });
};
