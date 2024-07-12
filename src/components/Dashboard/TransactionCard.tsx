"use client";

import { useCustomTable } from "@/hooks/use-custom-table";
import { Card, Title } from "@mantine/core";
import { type MRT_ColumnDef, MRT_Table } from "mantine-react-table";
import classes from "./Dashboard.module.css";

type Block = {
  epoch: number;
  previous_hash: string;
  producer: string;
  hash: string;
  parent_number: number;
  number: number;
  data_size: number;
  number_of_transactions: number;
  successful_transactions: number;
  vote_transactions: number;
  total_tx_fees: number;
  number_of_rewards: number;
  total_reward_amount: number;
  total_compute_units_consumed: number;
  total_compute_units_limit: number;
  block_time: number;
};

const data: Block[] = [
  {
    epoch: 496,
    previous_hash: "7rfbm171XjGBCt4LUvDFWZHipf9eNfzytXJ8N1zpqWh9",
    producer: "BUv44cVtsdvU9z2BfFGk6s5JZZWrmVnq5qCaii5ARyyB",
    hash: "Cwq1LgDsP7GWJR1TnDTU7K8njznejmFq3RsGpqnLQwFz",
    parent_number: 214359912,
    number: 214359913,
    data_size: 0,
    number_of_transactions: 1589,
    successful_transactions: 1544,
    vote_transactions: 1476,
    total_tx_fees: 9522350,
    number_of_rewards: 1,
    total_reward_amount: 4761175,
    total_compute_units_consumed: 9636648,
    total_compute_units_limit: 255000479,
    block_time: 1693323140,
  },
  {
    epoch: 496,
    previous_hash: "32DQWHhTLYLzkBiTLMMsHhboddLYCdKhhA4t1bEA8BTr",
    producer: "BUv44cVtsdvU9z2BfFGk6s5JZZWrmVnq5qCaii5ARyyB",
    hash: "7rfbm171XjGBCt4LUvDFWZHipf9eNfzytXJ8N1zpqWh9",
    parent_number: 214359911,
    number: 214359912,
    data_size: 0,
    number_of_transactions: 4181,
    successful_transactions: 3782,
    vote_transactions: 4093,
    total_tx_fees: 20992667,
    number_of_rewards: 1,
    total_reward_amount: 10496334,
    total_compute_units_consumed: 5234224,
    total_compute_units_limit: 230252310,
    block_time: 1693323140,
  },
  {
    epoch: 496,
    previous_hash: "Gum1NmbcLumoEvZoKebigqnN2tP4LeDKZKFK18WSs8wZ",
    producer: "7aR6AjK87ehUxwEJrPpnoizUKtxJKxqZCQCEGD3h1Xgf",
    hash: "32DQWHhTLYLzkBiTLMMsHhboddLYCdKhhA4t1bEA8BTr",
    parent_number: 214359910,
    number: 214359911,
    data_size: 0,
    number_of_transactions: 370,
    successful_transactions: 342,
    vote_transactions: 261,
    total_tx_fees: 1904984,
    number_of_rewards: 1,
    total_reward_amount: 952492,
    total_compute_units_consumed: 11874276,
    total_compute_units_limit: 263779957,
    block_time: 1693323139,
  },
  {
    epoch: 496,
    previous_hash: "7kax9YhPrNGcyfT7pumVGEicid1o4Ggc2XrQrc6iTE6X",
    producer: "7aR6AjK87ehUxwEJrPpnoizUKtxJKxqZCQCEGD3h1Xgf",
    hash: "Gum1NmbcLumoEvZoKebigqnN2tP4LeDKZKFK18WSs8wZ",
    parent_number: 214359909,
    number: 214359910,
    data_size: 0,
    number_of_transactions: 2147,
    successful_transactions: 2114,
    vote_transactions: 2052,
    total_tx_fees: 10813882,
    number_of_rewards: 1,
    total_reward_amount: 5406941,
    total_compute_units_consumed: 4919275,
    total_compute_units_limit: 108130684,
    block_time: 1693323139,
  },
  {
    epoch: 496,
    previous_hash: "Aju6MJabA2Rbij8raReDqWF76JSRvQbcktzyEESPvhmr",
    producer: "7aR6AjK87ehUxwEJrPpnoizUKtxJKxqZCQCEGD3h1Xgf",
    hash: "7kax9YhPrNGcyfT7pumVGEicid1o4Ggc2XrQrc6iTE6X",
    parent_number: 214359908,
    number: 214359909,
    data_size: 0,
    number_of_transactions: 1450,
    successful_transactions: 1431,
    vote_transactions: 1352,
    total_tx_fees: 7471349,
    number_of_rewards: 1,
    total_reward_amount: 3735675,
    total_compute_units_consumed: 11068369,
    total_compute_units_limit: 272699725,
    block_time: 1693323139,
  },
  {
    epoch: 496,
    previous_hash: "EfrBgQ4tZAFajruKCZUz9zMi1GW7TybJ13RLR5uiwBQq",
    producer: "7aR6AjK87ehUxwEJrPpnoizUKtxJKxqZCQCEGD3h1Xgf",
    hash: "Aju6MJabA2Rbij8raReDqWF76JSRvQbcktzyEESPvhmr",
    parent_number: 214359907,
    number: 214359908,
    data_size: 0,
    number_of_transactions: 4172,
    successful_transactions: 3552,
    vote_transactions: 4043,
    total_tx_fees: 20944907,
    number_of_rewards: 1,
    total_reward_amount: 10472454,
    total_compute_units_consumed: 10387975,
    total_compute_units_limit: 196380521,
    block_time: 1693323139,
  },
  {
    epoch: 496,
    previous_hash: "9zhdfT9mR663R4NanjGkoxNGUcYUhcMn2wak3Le9grja",
    producer: "BXAxLMMMUNYfC1z166VjWHR3WjTmqzLxB837o5ghmRtH",
    hash: "EfrBgQ4tZAFajruKCZUz9zMi1GW7TybJ13RLR5uiwBQq",
    parent_number: 214359906,
    number: 214359907,
    data_size: 0,
    number_of_transactions: 396,
    successful_transactions: 332,
    vote_transactions: 261,
    total_tx_fees: 2025999,
    number_of_rewards: 454,
    total_reward_amount: 1016659,
    total_compute_units_consumed: 10832252,
    total_compute_units_limit: 220064683,
    block_time: 1693323138,
  },
  {
    epoch: 496,
    previous_hash: "4uvN5skKkkQsTcjY3RuGXBHBG8wpuwrq7BdEDbpSZRbh",
    producer: "BXAxLMMMUNYfC1z166VjWHR3WjTmqzLxB837o5ghmRtH",
    hash: "9zhdfT9mR663R4NanjGkoxNGUcYUhcMn2wak3Le9grja",
    parent_number: 214359905,
    number: 214359906,
    data_size: 0,
    number_of_transactions: 2848,
    successful_transactions: 2825,
    vote_transactions: 2722,
    total_tx_fees: 14323393,
    number_of_rewards: 1,
    total_reward_amount: 7161697,
    total_compute_units_consumed: 15248764,
    total_compute_units_limit: 334537303,
    block_time: 1693323138,
  },
  {
    epoch: 496,
    previous_hash: "7jbnhf67Vx5d1nZJ9dKm11Fpqp6A9Bx4gurrLBCNNZak",
    producer: "BXAxLMMMUNYfC1z166VjWHR3WjTmqzLxB837o5ghmRtH",
    hash: "4uvN5skKkkQsTcjY3RuGXBHBG8wpuwrq7BdEDbpSZRbh",
    parent_number: 214359904,
    number: 214359905,
    data_size: 0,
    number_of_transactions: 812,
    successful_transactions: 757,
    vote_transactions: 691,
    total_tx_fees: 4118294,
    number_of_rewards: 1,
    total_reward_amount: 2059147,
    total_compute_units_consumed: 13216082,
    total_compute_units_limit: 284932304,
    block_time: 1693323137,
  },
  {
    epoch: 496,
    previous_hash: "6b3Sb7avBnsAj1ssbc3hppcC2CHaAhbY2GyrAPtvHY7V",
    producer: "BXAxLMMMUNYfC1z166VjWHR3WjTmqzLxB837o5ghmRtH",
    hash: "7jbnhf67Vx5d1nZJ9dKm11Fpqp6A9Bx4gurrLBCNNZak",
    parent_number: 214359903,
    number: 214359904,
    data_size: 0,
    number_of_transactions: 4635,
    successful_transactions: 3563,
    vote_transactions: 4434,
    total_tx_fees: 23281624,
    number_of_rewards: 1,
    total_reward_amount: 11640812,
    total_compute_units_consumed: 21629889,
    total_compute_units_limit: 563319258,
    block_time: 1693323137,
  },
];

export function TransactionCard() {
  const columns: MRT_ColumnDef<Block>[] = [
    {
      accessorKey: "number",
      header: "Number",
    },
    {
      accessorKey: "hash",
      accessorFn: (row) => `${row.hash.slice(0, 10)}..`,
      header: "Hash",
    },
    {
      accessorKey: "number_of_transactions",
      header: "Transactions",
    },
    {
      accessorKey: "number_of_rewards",
      header: "Block Rewards",
    },
    {
      accessorKey: "producer",
      header: "Validator",
    },
    {
      accessorKey: "block_time",
      accessorFn: (row) => new Date(row.block_time * 1000).toLocaleString(),
      header: "Age",
    },
  ];

  const table = useCustomTable({
    columns,
    data: data ?? [],
    rowCount: data?.length ?? 0,
    enableTopToolbar: false,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  return (
    <Card radius="md">
      <Card.Section className={classes.section}>
        <Title order={5}>Latest Block</Title>
      </Card.Section>
      <Card.Section className={classes.section}>
        <MRT_Table table={table} />
      </Card.Section>
    </Card>
  );
}
