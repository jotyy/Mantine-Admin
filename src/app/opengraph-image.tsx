import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export const alt = 'Mantine Admin';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					height: '100%',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					letterSpacing: '-.02em',
					fontWeight: 700,
					background: 'white',
				}}
			>
				<div
					style={{
						left: 42,
						top: 42,
						position: 'absolute',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<span
						style={{
							width: 24,
							height: 24,
							background: 'black',
						}}
					/>
					<span
						style={{
							marginLeft: 8,
							fontSize: 20,
						}}
					>
						@jotyy
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						padding: '20px 40px',
						margin: '0 42px',
						fontSize: 40,
						width: 'auto',
						maxWidth: 550,
						textAlign: 'center',
						backgroundColor: 'black',
						color: 'white',
						lineHeight: 1.4,
					}}
				>
					Mantine Admin
					<br />
					<p style={{ fontSize: 28, margin: 0 }}>A Modern Dashboard with Next.js.</p>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
