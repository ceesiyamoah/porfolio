import { getAllPosts } from '@/lib/blog';

export const revalidate = 3600;

const SITE_URL = 'https://cyrilyamoah.com';

const projects = [
	{
		title: 'Kendamil Ghana',
		description:
			'E-commerce platform for the official Ghanaian retailer of Kendamil British baby formula. Features a full product catalogue, cart, Paystack checkout, admin dashboard, and AI-assisted inventory management.',
		tech: 'Next.js, TypeScript, Django, Python, Tailwind CSS, Zustand, React Query',
		url: 'https://kendamilghana.com',
	},
	{
		title: 'POS System',
		description:
			'A modern point-of-sale application with inventory management, real-time sales tracking, and seamless payment processing for retail businesses.',
		tech: 'Next.js, TypeScript, Django, Zustand',
		url: 'https://pos-testing.cyrilyamoah.com',
	},
	{
		title: 'Industry Professionals',
		description: 'A professional networking platform to connect with industry professionals and learn from their experiences.',
		tech: 'Next.js, TypeScript, Material UI, Redux',
		url: 'https://industryprofessionals.com',
	},
	{
		title: 'BPO TECH',
		description:
			'A comprehensive CRM solution for real estate professionals featuring lead tracking, automated follow-ups, and transaction management.',
		tech: 'React, JavaScript, Material UI, Redux',
		url: 'https://bpotech.io',
	},
	{
		title: 'BPO Homes',
		description:
			'A property listing marketplace connecting buyers with agents, featuring advanced search filters, virtual tours, and neighborhood insights.',
		tech: 'React, JavaScript, Material UI, Redux',
		url: 'https://bpohomes.com',
	},
];

const experience = [
	{
		position: 'Frontend Developer',
		company: 'IT Consortium',
		date: 'April 2025–Present',
		highlights: [
			'Develop and maintain features for client-facing SaaS products built on a React micro-frontend architecture using Webpack Module Federation',
			'Improved frontend caching strategies across federated modules, reducing redundant network requests and improving perceived load times',
			'Strengthened TypeScript type definitions across Module Federation host and remote boundaries, reducing runtime errors and improving developer confidence',
			'Streamlined feature delivery workflows, contributing to faster time-to-market for new product releases',
		],
	},
	{
		position: 'Frontend Developer',
		company: 'Jotella Media Group',
		date: 'March 2022–March 2025',
		highlights: [
			'Developed high-performance responsive interfaces for real estate applications connecting agents to clients',
			'Implemented interactive features including property search filters, map views, and image galleries',
			'Optimized applications for SEO and performance while implementing secure authentication systems',
			'Conducted code reviews and refactored codebase to address performance bottlenecks and improve maintainability',
		],
	},
	{
		position: 'Frontend Developer',
		company: 'Infoview Data Solutions',
		date: 'June 2021–March 2022',
		highlights: [
			'Built responsive web application for school management system complementing existing mobile app',
			'Integrated backend APIs to display real-time data including student records, class schedules, and academic resources',
			'Implemented authentication and authorization mechanisms based on roles and permissions',
		],
	},
];

export async function GET() {
	const posts = getAllPosts();

	const projectsSection = projects
		.map(
			(p, i) =>
				`### ${i + 1}. ${p.title}\n- **URL**: ${p.url}\n- **Tech**: ${p.tech}\n- **Description**: ${p.description}`
		)
		.join('\n\n');

	const experienceSection = experience
		.map(
			(e) =>
				`### ${e.position} — ${e.company} (${e.date})\n${e.highlights.map((h) => `- ${h}`).join('\n')}`
		)
		.join('\n\n');

	const blogSection = posts.length
		? posts
				.map(
					(p) =>
						`### [${p.title}](${SITE_URL}/blog/${p.slug})\n- **Date**: ${p.date}\n- **Read time**: ${p.readTime}\n- **Tags**: ${p.tags.join(', ')}\n- **Summary**: ${p.excerpt}`
				)
				.join('\n\n')
		: '_No posts yet._';

	const content = `# Cyril Yamoah — Full Portfolio Content

> Complete content dump for AI agents and crawlers. Short index available at ${SITE_URL}/llms.txt

## Identity

- **Name**: Cyril Yamoah
- **Role**: Frontend Developer
- **Location**: Ghana
- **Email**: info@cyrilyamoah.com
- **Website**: ${SITE_URL}
- **GitHub**: https://github.com/ceesiyamoah
- **LinkedIn**: https://www.linkedin.com/in/cyril-yamoah/
- **Twitter/X**: https://twitter.com/ceesiyamoah

## Bio

Cyril Yamoah is a Frontend Developer with 3+ years of experience building production web applications. He specialises in React, Next.js, and TypeScript on the frontend, with Django and Python on the backend. His work spans e-commerce, real estate CRMs, point-of-sale systems, and SaaS platforms — with a strong focus on performance, clean code, and interfaces that users enjoy. Based in Ghana, available for freelance and full-time opportunities globally.

## Skills

React, Next.js, TypeScript, JavaScript, Webpack Module Federation, Django, Python, PHP, Tailwind CSS, Material UI, Redux, Zustand, React Query, REST APIs, Git, HTML5, CSS3, Responsive Design, Web Performance, SEO, Docker, AWS EC2, Nginx, PM2

## Projects

${projectsSection}

## Experience

${experienceSection}

## Blog Posts

${blogSection}
`;

	return new Response(content, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
		},
	});
}
