export const revalidate = 3600;

const SITE_URL = 'https://cyrilyamoah.com';

const content = `# Cyril Yamoah — Frontend Developer

> Personal portfolio and blog of Cyril Yamoah, a Frontend Developer based in Ghana specializing in React, Next.js, and TypeScript.

## About

Cyril Yamoah is a Frontend Developer with 3+ years of experience building production web applications — from e-commerce platforms and real estate CRMs to point-of-sale systems. He works with React, Next.js, TypeScript, Django, and Tailwind CSS. Available for freelance projects and full-time roles.

- **Email**: info@cyrilyamoah.com
- **GitHub**: https://github.com/ceesiyamoah
- **LinkedIn**: https://www.linkedin.com/in/cyril-yamoah/
- **Twitter/X**: https://twitter.com/ceesiyamoah

## Key Pages

- [Portfolio & About](${SITE_URL}): Homepage with projects, skills, and experience
- [Blog](${SITE_URL}/blog): Technical articles on web development, deployment, and performance

## Projects

- **Kendamil Ghana** (${SITE_URL}) — E-commerce platform for Kendamil British baby formula in Ghana. Next.js, TypeScript, Django, Paystack, AI inventory management.
- **POS System** (https://pos-testing.cyrilyamoah.com) — Point-of-sale app with inventory management and real-time sales tracking. Next.js, TypeScript, Django, Zustand.
- **Industry Professionals** (https://industryprofessionals.com) — Professional networking platform. Next.js, TypeScript, Material UI, Redux.
- **BPO TECH** (https://bpotech.io) — Real estate CRM with lead tracking and transaction management. React, JavaScript, Material UI.
- **BPO Homes** (https://bpohomes.com) — Property listing marketplace with advanced search and neighborhood insights. React, JavaScript, Material UI.

## Skills

React, Next.js, TypeScript, JavaScript, Webpack Module Federation, Django, Python, PHP, Tailwind CSS, Material UI, Redux, Zustand, React Query, REST APIs, Git, HTML5, CSS3, Responsive Design, Web Performance, SEO
`;

export async function GET() {
	return new Response(content, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
		},
	});
}
