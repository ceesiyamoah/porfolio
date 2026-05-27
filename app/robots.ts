import { MetadataRoute } from 'next';

const SITE_URL = 'https://cyrilyamoah.com';

const AI_CRAWLERS = [
	'GPTBot',
	'OAI-SearchBot',
	'ChatGPT-User',
	'ClaudeBot',
	'Claude-Web',
	'anthropic-ai',
	'PerplexityBot',
	'Perplexity-User',
	'Google-Extended',
	'Applebot-Extended',
	'Bytespider',
	'CCBot',
	'Meta-ExternalAgent',
	'Amazonbot',
	'cohere-ai',
	'DuckAssistBot',
	'YouBot',
	'Diffbot',
];

export default function robots(): MetadataRoute.Robots {
	const crawlerRules = AI_CRAWLERS.map((userAgent) => ({
		userAgent,
		allow: '/',
	}));

	return {
		rules: [
			{ userAgent: '*', allow: '/' },
			...crawlerRules,
		],
		sitemap: `${SITE_URL}/sitemap.xml`,
		host: SITE_URL,
	};
}
