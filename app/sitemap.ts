import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://cyrilyamoah.com';
	const currentDate = new Date();

	const posts = getAllPosts();
	const blogUrls = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: 'monthly' as const,
		priority: 0.6,
	}));

	return [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'monthly' as const,
			priority: 1.0,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: currentDate,
			changeFrequency: 'weekly' as const,
			priority: 0.8,
		},
		...blogUrls,
	];
}
