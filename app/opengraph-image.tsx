import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Cyril Yamoah - Expert Frontend Developer';
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
					fontSize: 72,
					background: '#0f1419',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					padding: '80px',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						width: '100%',
					}}
				>
					<div
						style={{
							fontSize: 96,
							fontWeight: 300,
							color: '#e6e1dc',
							marginBottom: 20,
							letterSpacing: '-0.02em',
						}}
					>
						Cyril Yamoah
					</div>
					<div
						style={{
							fontSize: 48,
							color: '#7c9cbf',
							marginBottom: 40,
							fontWeight: 500,
						}}
					>
						Expert Frontend Developer
					</div>
					<div
						style={{
							fontSize: 32,
							color: '#e6e1dc',
							opacity: 0.7,
							lineHeight: 1.4,
							maxWidth: 900,
						}}
					>
						React • Next.js • TypeScript • 3+ Years Experience
					</div>
				</div>
				<div
					style={{
						position: 'absolute',
						bottom: 60,
						right: 80,
						fontSize: 24,
						color: '#7c9cbf',
						opacity: 0.6,
					}}
				>
					portfolio.cyrilyamoah.app
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
