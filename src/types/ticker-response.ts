export interface Attribute {
	transaction_hash: string;
	block_number: string;
	block_timestamp: string;
	capacity_involved: string;
	live_cell_changes: string;
}

export interface Data {
	id: string;
	type: string;
	attributes: Attribute;
}

export interface Meta {
	total: number;
	page_size: number;
}

export interface BlocksResponse {
	data: Data[];
	meta: Meta;
}
