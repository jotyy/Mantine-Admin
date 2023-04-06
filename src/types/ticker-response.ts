export interface Market {
	name: string;
	identifier: string;
	has_trading_incentive: boolean;
}

export interface ConvertedLast {
	btc: number;
	eth: number;
	usd: number;
}

export interface ConvertedVolume {
	btc: number;
	eth: number;
	usd: number;
}

export interface Ticker {
	base: string;
	target: string;
	market: Market;
	last: number;
	volume: number;
	converted_last: ConvertedLast;
	converted_volume: ConvertedVolume;
	trust_score: string;
	bid_ask_spread_percentage: number;
	timestamp: string;
	last_traded_at: string;
	last_fetch_at: string;
	is_anomaly: boolean;
	is_stale: boolean;
	trade_url: string;
	coin_id: string;
	target_coin_id: string;
}

export interface TickerApiResponse {
	total: number;
	list: Ticker[];
}
