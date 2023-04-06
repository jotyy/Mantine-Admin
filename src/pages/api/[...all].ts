/* eslint-disable import/no-anonymous-default-export */
import httpProxy from 'http-proxy';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
	api: {
		// Enable `externalResolver` option in Next.js
		bodyParser: false,
	},
};

export default (req: NextApiRequest, res: NextApiResponse) =>
	new Promise((resolve, reject) => {
		const proxy: httpProxy = httpProxy.createProxy();
		proxy.once('proxyRes', resolve).once('error', reject).web(req, res, {
			changeOrigin: true,
			target: process.env.BASE_URL,
		});
	});
