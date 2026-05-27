import type { NextConfig } from "next";

const securityHeaders = [
	{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
	{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
	{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
	{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
	{ key: 'X-DNS-Prefetch-Control', value: 'on' },
	{
		key: 'Link',
		value: [
			'</llms.txt>; rel="describedby"; type="text/markdown"',
			'</llms-full.txt>; rel="describedby"; type="text/markdown"',
			'</sitemap.xml>; rel="sitemap"; type="application/xml"',
		].join(', '),
	},
];

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [{ type: 'host', value: 'www.cyrilyamoah.com' }],
				destination: 'https://cyrilyamoah.com/:path*',
				permanent: true,
			},
		];
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: securityHeaders,
			},
		];
	},
};

export default nextConfig;
