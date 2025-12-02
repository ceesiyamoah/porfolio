import Navbar from '@/components/Navbar';
import Github from '@/components/SVG/Github';
import Gmail from '@/components/SVG/Gmail';
import Linkedin from '@/components/SVG/Linkedin';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
	title: string;
	description: string;
	tech: string;
	image: string;
	link: string;
}
const projects: Project[] = [
	{
		title: 'Industry Professionals',
		description: 'A website to connect with industry professionals and learn from their experiences.',
		tech: 'Nextjs, Typescript, Material UI, Redux',
		image: '/indProf.png',
		link: 'https://industryprofessionals.com',
	},
	{
		title: 'BPO TECH',
		description: 'A platform real estate agents to manage their properties and clients.',
		tech: 'React, Javascript, Material UI, Redux',
		image: '/bpotech.png',
		link: 'https://bpotech.io',
	},
	{
		title: 'BPO Homes',
		description: 'A platform real estate agents to manage their properties and clients.',
		tech: 'React, Javascript, Material UI, Redux',
		image: '/bpohomes.png',
		link: 'https://bpohomes.com',
	},
];

const experience = [
	{
		position: 'Frontend Developer',
		company: 'Jotella Media Group',
		date: '2022 - Present',
	},
	{
		position: 'Frontend Developer',
		company: 'Infoview Data Solutions',
		date: '2021 - 2022',
	},
];

const skills = ['React', 'Nextjs', 'Typescript', 'Redux', 'Tailwind', 'Javascript'];

const contactLinks = [
	{
		url: 'mailto:ccyamoah@gmail.com',
		icon: <Gmail />,
	},
	{
		url: 'https://www.linkedin.com/in/cyril-yamoah/',
		icon: <Linkedin />,
	},
	{
		url: 'https://github.com/ceesiyamoah',
		icon: <Github />,
	},
];

export default function Home() {
	return (
		<div className='size-full relative'>
			<Navbar />

			{/* Schema.org structured data */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Person',
						name: 'Cyril Yamoah',
						url: 'https://portfolio.cyrilyamoah.app',
						image: '/logo.png',
						jobTitle: 'Frontend Developer',
						worksFor: {
							'@type': 'Organization',
							name: 'Jotella Media Group',
						},
						description:
							'Expert Frontend Developer specializing in React, Next.js, and TypeScript with 3+ years of experience building scalable web applications.',
						email: 'ccyamoah@gmail.com',
						sameAs: ['https://github.com/ceesiyamoah', 'https://www.linkedin.com/in/cyril-yamoah/'],
						knowsAbout: [
							'React.js',
							'Next.js',
							'TypeScript',
							'JavaScript',
							'Redux',
							'Tailwind CSS',
							'Material UI',
							'Web Development',
							'Frontend Development',
							'Responsive Design',
							'Web Performance',
						],
					}),
				}}
			/>

			{/* Hero Section - Simple & Clean */}
			<section className='py-24 md:py-32 px-4 md:px-40' id='about'>
				<div className='max-w-4xl'>
					<h1 className='text-5xl md:text-7xl font-light font-[family-name:var(--font-newsreader)] mb-6 leading-tight'>
						Cyril Yamoah
					</h1>
					<h2 className='text-xl md:text-2xl text-[var(--accent)] mb-8 font-medium'>
						Expert Frontend Developer | React, Next.js & TypeScript Specialist
					</h2>
					<p className='text-lg md:text-xl leading-relaxed mb-12 opacity-80 max-w-2xl'>
						Professional frontend developer with 3+ years of experience building scalable, high-performance web
						applications. Specialized in React, Next.js, and TypeScript development for real estate technology, SaaS
						platforms, and enterprise solutions. Delivering pixel-perfect, accessible, and SEO-optimized user interfaces
						that drive business results.
					</p>
					<div className='flex gap-6'>
						{contactLinks.map((link) => (
							<Link
								href={link.url}
								className='w-6 h-6 hover:opacity-70 transition-opacity'
								key={link.url}
								aria-label={
									link.url.includes('github')
										? 'GitHub Profile - Cyril Yamoah'
										: link.url.includes('linkedin')
										? 'LinkedIn Profile - Cyril Yamoah'
										: 'Email Cyril Yamoah'
								}
							>
								{link.icon}
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Projects */}
			<section className='py-24 px-4 md:px-40' id='projects' aria-label='Portfolio Projects'>
				<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-newsreader)] font-light mb-12'>
					Featured Web Development Projects
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{projects.map((project, idx) => (
						<ProjectCard {...project} key={project.title} index={idx} />
					))}
				</div>
			</section>

			{/* Experience */}
			<section className='py-24 px-4 md:px-40' id='experience' aria-label='Professional Experience'>
				<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-newsreader)] font-light mb-12'>
					Professional Experience - Frontend Development
				</h2>
				<div className='space-y-8 max-w-3xl'>
					{experience.map((exp) => (
						<article key={exp.company} className='border-l-2 border-[var(--accent)] pl-6'>
							<h3 className='text-xl font-semibold mb-1'>{exp.position}</h3>
							<p className='text-[var(--accent)] mb-2'>{exp.company}</p>
							<time className='text-sm opacity-60'>{exp.date}</time>
						</article>
					))}
				</div>
			</section>

			{/* Skills */}
			<section className='py-24 px-4 md:px-40' id='skills' aria-label='Technical Skills'>
				<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-newsreader)] font-light mb-12'>
					Core Technologies & Skills
				</h2>
				<div className='flex flex-wrap gap-3 max-w-3xl' role='list'>
					{skills.map((skill) => (
						<span
							key={skill}
							className='px-4 py-2 bg-[var(--card-bg)] border border-[var(--muted)] text-sm'
							role='listitem'
						>
							{skill}
						</span>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className='py-12 px-4 md:px-40 border-t border-[var(--muted)]' id='contact'>
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
					<p className='text-sm opacity-60'>&copy; {new Date().getFullYear()} Cyril Yamoah. All rights reserved.</p>
					<nav aria-label='Footer navigation'>
						<ul className='flex gap-6 text-sm'>
							<li>
								<Link href='#about' className='hover:text-[var(--accent)] transition-colors'>
									About
								</Link>
							</li>
							<li>
								<Link href='#projects' className='hover:text-[var(--accent)] transition-colors'>
									Projects
								</Link>
							</li>
							<li>
								<Link href='#experience' className='hover:text-[var(--accent)] transition-colors'>
									Experience
								</Link>
							</li>
							<li>
								<Link href='mailto:ccyamoah@gmail.com' className='hover:text-[var(--accent)] transition-colors'>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</div>
	);
}

const ProjectCard = (project: Project & { index: number }) => {
	return (
		<article
			className='group bg-[var(--card-bg)] border border-[var(--muted)] overflow-hidden hover:border-[var(--accent)] transition-colors flex flex-col'
			itemScope
			itemType='https://schema.org/CreativeWork'
		>
			<div className='relative overflow-hidden aspect-video'>
				<Image
					src={project.image}
					alt={`${project.title} - Frontend web development project screenshot`}
					width={1000}
					height={1000}
					className='w-full h-full object-cover'
					quality={100}
					loading='lazy'
				/>
			</div>
			<div className='p-6 flex flex-col flex-1'>
				<h3 className='text-2xl font-bold font-[family-name:var(--font-bricolage)] mb-4' itemProp='name'>
					{project.title}
				</h3>
				<p className='text-sm opacity-80 leading-relaxed mb-4' itemProp='description'>
					{project.description}
				</p>
				<div className='flex flex-wrap gap-2 mb-6' aria-label='Technologies used'>
					{project.tech.split(', ').map((tech) => (
						<span
							key={tech}
							className='text-xs px-2 py-1 bg-[var(--background)] text-[var(--accent)]'
							itemProp='keywords'
						>
							{tech}
						</span>
					))}
				</div>
				<Link
					href={project.link}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--foreground)] transition-colors text-sm font-medium mt-auto'
					aria-label={`View ${project.title} project live demo`}
					itemProp='url'
				>
					<span>View Project</span>
					<span aria-hidden='true'>→</span>
				</Link>
			</div>
		</article>
	);
};

export const metadata: Metadata = {
	title: 'Cyril Yamoah - Expert Frontend Developer | React, Next.js & TypeScript Specialist',
	description:
		'Hire Cyril Yamoah, an experienced Frontend Developer specializing in React, Next.js, TypeScript, and modern web development. 3+ years building scalable, high-performance web applications for real estate, SaaS, and enterprise clients. View portfolio and case studies.',
	keywords: [
		// Primary Keywords
		'Cyril Yamoah',
		'Frontend Developer',
		'React Developer',
		'Next.js Developer',
		'TypeScript Developer',
		// Technical Skills
		'React.js expert',
		'Next.js specialist',
		'TypeScript programming',
		'JavaScript developer',
		'Redux state management',
		'Tailwind CSS',
		'Material UI developer',
		'Responsive web design',
		'Web performance optimization',
		'Progressive Web Apps',
		'PWA developer',
		// Industry & Domain
		'Real estate web development',
		'SaaS application developer',
		'Enterprise web solutions',
		'Full-stack JavaScript developer',
		'Frontend engineer',
		// Service Keywords
		'Hire frontend developer',
		'React developer for hire',
		'Freelance web developer',
		'Remote frontend developer',
		'Web application development',
		'UI/UX implementation',
		'Component-based architecture',
		'Single Page Application developer',
		'SPA development',
		// Location-based (adjust as needed)
		'Frontend developer Ghana',
		'React developer remote',
		// Project Types
		'Custom web applications',
		'E-commerce development',
		'Dashboard development',
		'Admin panel development',
		'Client portal development',
		// Specific Technologies
		'Server-side rendering',
		'Static site generation',
		'API integration',
		'RESTful API',
		'GraphQL',
		'Git version control',
		'Agile development',
		'Web accessibility',
		'WCAG compliance',
		'Cross-browser compatibility',
		// Portfolio Terms
		'Web developer portfolio',
		'Frontend projects',
		'React portfolio',
		'Developer showcase',
	],
	authors: [{ name: 'Cyril Yamoah', url: 'https://portfolio.cyrilyamoah.app' }],
	creator: 'Cyril Yamoah',
	publisher: 'Cyril Yamoah',
	formatDetection: {
		email: true,
		address: false,
		telephone: false,
	},
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
		other: [
			{
				rel: 'android-chrome-192x192',
				url: '/android-chrome-192x192.png',
			},
			{
				rel: 'android-chrome-512x512',
				url: '/android-chrome-512x512.png',
			},
		],
	},
	manifest: '/site.webmanifest',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://portfolio.cyrilyamoah.app',
		siteName: 'Cyril Yamoah - Frontend Developer Portfolio',
		title: 'Cyril Yamoah - Expert Frontend Developer | React, Next.js & TypeScript',
		description:
			'Professional Frontend Developer with 3+ years of experience building high-performance web applications using React, Next.js, and TypeScript. Specialized in real estate tech, SaaS platforms, and enterprise solutions. View my portfolio of production-ready projects.',
		images: [
			{
				url: '/logo.png',
				width: 1200,
				height: 630,
				alt: 'Cyril Yamoah - Frontend Developer Portfolio',
				type: 'image/png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Cyril Yamoah - Expert Frontend Developer | React, Next.js & TypeScript',
		description:
			'Professional Frontend Developer specializing in React, Next.js, TypeScript. 3+ years experience. View portfolio of real estate tech & SaaS projects.',
		creator: '@ceesiyamoah',
		site: '@ceesiyamoah',
		images: ['/logo.png'],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: 'https://portfolio.cyrilyamoah.app',
	},
	verification: {
		google: 'KwN1HnFyo_kPeFkSozTVQ3qUsVLC033RLyrt-2fIFMI',
	},
	category: 'Technology',
	classification: 'Web Development Portfolio',
	metadataBase: new URL('https://portfolio.cyrilyamoah.app/'),
	other: {
		'og:phone_number': '+233204612277',
		'og:email': 'ccyamoah@gmail.com',
		'og:locality': 'Remote',
		'og:region': 'Global',
		'og:country-name': 'Ghana',
		'linkedin:owner': 'cyril-yamoah',
	},
};
