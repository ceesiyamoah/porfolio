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
		title: 'POS System',
		description:
			'A modern point-of-sale application with inventory management, real-time sales tracking, and seamless payment processing for retail businesses.',
		tech: 'Next.js, TypeScript, Django, Zustand',
		image: '/pos_main.png',
		link: 'https://pos-testing.cyrilyamoah.com',
	},
	{
		title: 'Industry Professionals',
		description: 'A website to connect with industry professionals and learn from their experiences.',
		tech: 'Nextjs, Typescript, Material UI, Redux',
		image: '/indProf.png',
		link: 'https://industryprofessionals.com',
	},
	{
		title: 'BPO TECH',
		description:
			'A comprehensive CRM solution for real estate professionals featuring lead tracking, automated follow-ups, and transaction management.',
		tech: 'React, Javascript, Material UI, Redux',
		image: '/bpotech.png',
		link: 'https://bpotech.io',
	},
	{
		title: 'BPO Homes',
		description:
			'A property listing marketplace connecting buyers with agents, featuring advanced search filters, virtual tours, and neighborhood insights.',
		tech: 'React, Javascript, Material UI, Redux',
		image: '/bpohomes.png',
		link: 'https://bpohomes.com',
	},
];

const experience = [
	{
		position: 'Frontend Developer',
		company: 'Jotella Media Group',
		date: 'March 2022-Present',
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
		date: 'June 2021-March 2022',
		highlights: [
			'Built responsive web application for school management system complementing existing mobile app',
			'Integrated backend APIs to display real-time data including student records, class schedules, and academic resources',
			'Implemented authentication and authorization mechanisms based on roles and permissions',
		],
	},
];

const skills = [
	'React',
	'Next.js',
	'TypeScript',
	'JavaScript',
	'Redux',
	'Tailwind CSS',
	'Material UI',
	'HTML5',
	'CSS3',
	'Git',
	'REST APIs',
	'Responsive Design',
	'Web Performance',
	'Django',
];

const contactLinks = [
	{
		url: 'mailto:info@cyrilyamoah.com',
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
						url: 'https://cyrilyamoah.com',
						image: 'https://cyrilyamoah.com/logo.png',
						jobTitle: 'Frontend Developer',
						worksFor: {
							'@type': 'Organization',
							name: 'Jotella Media Group',
						},
						description:
							'Expert Frontend Developer specializing in React, Next.js, and TypeScript with 3+ years of experience building scalable web applications.',
						email: 'info@cyrilyamoah.com',
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

			{/* Hero Section */}
			<section className='py-24 md:py-32 px-4 md:px-40' id='about'>
				<div className='max-w-4xl'>
					<h1 className='text-5xl md:text-7xl font-light font-[family-name:var(--font-newsreader)] mb-6 leading-tight animate-fade-in-up'>
						Cyril Yamoah
					</h1>
					<h2
						className='text-xl md:text-2xl text-[var(--accent)] mb-8 font-medium animate-fade-in-up'
						style={{ animationDelay: '100ms' }}
					>
						I build websites that convert visitors into customers.
					</h2>
					<p
						className='text-lg md:text-xl leading-relaxed mb-12 opacity-80 max-w-2xl animate-fade-in-up'
						style={{ animationDelay: '200ms' }}
					>
						Your users expect fast, polished experiences. I create them—websites and apps that load instantly, work
						flawlessly, and help your business grow. From real estate platforms to SaaS dashboards, I&apos;ve shipped
						products that real people use every day.
					</p>
					<div className='flex gap-6 animate-fade-in-up' style={{ animationDelay: '300ms' }}>
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
					Selected Work
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{projects.map((project, idx) => (
						<div key={project.title} className='animate-fade-in-up h-full' style={{ animationDelay: `${idx * 150}ms` }}>
							<ProjectCard {...project} index={idx} />
						</div>
					))}
				</div>
			</section>

			{/* Experience */}
			<section className='py-24 px-4 md:px-40' id='experience' aria-label='Professional Experience'>
				<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-newsreader)] font-light mb-12'>Experience</h2>
				<div className='space-y-8 max-w-3xl'>
					{experience.map((exp, idx) => (
						<article
							key={exp.company}
							className='border-l-2 border-[var(--accent)] pl-6 animate-fade-in-up'
							style={{ animationDelay: `${idx * 100}ms` }}
						>
							<h3 className='text-xl font-semibold mb-1'>{exp.position}</h3>
							<p className='text-[var(--accent)] mb-2'>{exp.company}</p>
							<time className='text-sm opacity-60 block mb-3'>{exp.date}</time>
							<ul className='space-y-2'>
								{exp.highlights.map((highlight) => (
									<li key={highlight} className='text-sm opacity-80 flex gap-2'>
										<span className='text-[var(--accent)]'>→</span>
										{highlight}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</section>

			{/* Skills */}
			<section className='py-24 px-4 md:px-40' id='skills' aria-label='Technical Skills'>
				<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-newsreader)] font-light mb-12'>Skills</h2>
				<div className='flex flex-wrap gap-3 max-w-3xl' role='list'>
					{skills.map((skill, idx) => (
						<span
							key={skill}
							className='px-4 py-2 bg-[var(--card-bg)] border border-[var(--muted)] text-sm hover:border-[var(--accent)] transition-colors cursor-default animate-fade-in-up'
							role='listitem'
							style={{ animationDelay: `${idx * 50}ms` }}
						>
							{skill}
						</span>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-24 px-4 md:px-40 text-center'>
				<div className='max-w-2xl mx-auto'>
					<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-newsreader)] font-light mb-6'>
						Let&apos;s Build Something Great
					</h2>
					<p className='opacity-80 mb-8'>
						Looking for a frontend developer who ships fast and sweats the details? I’m available for new projects.
					</p>
					<Link
						href='mailto:info@cyrilyamoah.com'
						className='inline-block px-8 py-4 bg-[var(--accent)] text-[var(--background)] font-medium hover:bg-[var(--accent-dark)] transition-colors'
					>
						Get in Touch →
					</Link>
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
								<Link href='mailto:info@cyrilyamoah.com' className='hover:text-[var(--accent)] transition-colors'>
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
			className='group bg-[var(--card-bg)] border border-[var(--muted)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:shadow-[var(--accent)]/10 hover:-translate-y-1'
			itemScope
			itemType='https://schema.org/CreativeWork'
		>
			<div className='relative overflow-hidden aspect-video'>
				<Image
					src={project.image}
					alt={`${project.title} - Frontend web development project screenshot`}
					width={1000}
					height={1000}
					className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
					quality={85}
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
	title: 'Cyril Yamoah — Web Developer for Startups & Growing Businesses',
	description: `I build fast, modern websites that help businesses grow. Specializing in React and Next.js development for startups, real estate companies, and SaaS products. View my work and let's talk about your project.`,
	keywords: [
		// Brand
		'Cyril Yamoah',
		'Cyril Yamoah developer',
		'Cyril Yamoah portfolio',

		// Business-Focused Services
		'website developer for startups',
		'web developer for small business',
		'hire web developer',
		'freelance website developer',
		'custom website development',
		'professional website builder',
		'business website developer',
		'website redesign services',

		// Industry Solutions
		'real estate website developer',
		'SaaS website development',
		'startup web developer',
		'e-commerce website builder',
		'company website development',
		'landing page developer',
		'web app development services',

		// Outcome-Focused
		'fast loading websites',
		'mobile-friendly website',
		'SEO-optimized websites',
		'conversion-focused web design',
		'modern website design',
		'responsive website development',

		// Technical (minimal, for developer searches)
		'React developer',
		'Next.js developer',
		'frontend developer',
		'JavaScript developer',

		// Location & Work Style
		'remote web developer',
		'freelance developer for hire',
	],
	authors: [{ name: 'Cyril Yamoah', url: 'https://cyrilyamoah.com' }],
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
		url: 'https://cyrilyamoah.com',
		siteName: 'Cyril Yamoah — Web Developer',
		title: 'Cyril Yamoah — Web Developer for Startups & Growing Businesses',
		description: `I build fast, modern websites that help businesses grow. From real estate platforms to SaaS dashboards—see my work and let's talk about your next project.`,
		images: [
			{
				url: '/logo.png',
				width: 1200,
				height: 630,
				alt: 'Cyril Yamoah — Web Developer Portfolio',
				type: 'image/png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Cyril Yamoah — Web Developer for Startups & Growing Businesses',
		description:
			'I build fast, modern websites that help businesses grow. Real estate platforms, SaaS dashboards, and more.',
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
		canonical: 'https://cyrilyamoah.com',
	},
	verification: {
		google: 'KwN1HnFyo_kPeFkSozTVQ3qUsVLC033RLyrt-2fIFMI',
	},
	category: 'Technology',
	classification: 'Web Development Portfolio',
	metadataBase: new URL('https://cyrilyamoah.com/'),
	other: {
		'og:email': 'info@cyrilyamoah.com',
		'og:locality': 'Remote',
		'og:region': 'Global',
		'og:country-name': 'Ghana',
		'linkedin:owner': 'cyril-yamoah',
	},
};
