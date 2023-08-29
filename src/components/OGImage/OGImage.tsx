import React from 'react';

export const OGImage = () => {
	return (
		<div
			style={{
				display: 'flex',
				height: '100%',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				letterSpacing: '-.02em',
				textShadow: '8px 8px 8px #0000008c',
				fontWeight: 700,
				backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.25' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), linear-gradient(to right top, #343a40, #2b2c31, #211f22, #151314, #000000)`,
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
						background: 'white',
					}}
				/>
				<span
					style={{
						marginLeft: 8,
						fontSize: 20,
						color: 'white',
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
					padding: '100px 0px',
					margin: '0 42px',
					fontSize: 30,
					width: 'auto',
					maxWidth: 800,
					textAlign: 'center',
					color: 'white',
					lineHeight: 1.4,
				}}
			>
				<h2 style={{ margin: 0 }}>Mantine Admin</h2>
				<p style={{ fontSize: 28, margin: 0 }}>A Modern Dashboard with Next.js.</p>
			</div>
		</div>
	);
};
