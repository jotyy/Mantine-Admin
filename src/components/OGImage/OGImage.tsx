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
				fontWeight: 700,
				backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)',
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
					fontSize: 40,
					width: 'auto',
					maxWidth: 800,
					textAlign: 'center',
					color: 'white',
					lineHeight: 1.4,
				}}
			>
				<h2 style={{ margin: 0 }}>Mantine Admin</h2>
				<p style={{ fontSize: 36, margin: 0, opacity: 0.8 }}>
					A Modern Dashboard with Next.js.
				</p>
			</div>
		</div>
	);
};
