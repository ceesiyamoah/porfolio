import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://portfolio.cyrilyamoah.com';
	const currentDate = new Date();

	// Note: Only include actual page URLs, not anchor links
	// Search engines don't index anchor fragments (#about, #projects, etc.)
	return [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 1,
		},
	];
}
