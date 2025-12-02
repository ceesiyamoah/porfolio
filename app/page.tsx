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
			
			{/* Hero Section - Simple & Clean */}
			<section className='py-24 md:py-32 px-4 md:px-40' id='about'>
				<div className='max-w-4xl'>
					<h1 className='text-5xl md:text-7xl font-light font-[family-name:var(--font-newsreader)] mb-6 leading-tight'>
						Cyril Yamoah
					</h1>
					<p className='text-xl md:text-2xl text-[var(--accent)] mb-8 font-medium'>
						Frontend Developer
					</p>
					<p className='text-lg md:text-xl leading-relaxed mb-12 opacity-80 max-w-2xl'>
						Building scalable, user-centric digital solutions with React, Next.js, and TypeScript. 
						Currently crafting experiences in the real estate industry.
					</p>
					<div className='flex gap-6'>
						{contactLinks.map((link) => (
							<Link 
								href={link.url} 
								className='w-6 h-6 hover:opacity-70 transition-opacity' 
								key={link.url}
								aria-label={link.url.includes('github') ? 'GitHub' : link.url.includes('linkedin') ? 'LinkedIn' : 'Email'}
							>
								{link.icon}
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Projects */}
			<section className='py-24 px-4 md:px-40' id='projects'>
				<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-newsreader)] font-light mb-12'>
					Selected Work
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{projects.map((project, idx) => (
						<ProjectCard {...project} key={project.title} index={idx} />
					))}
				</div>
			</section>

			{/* Experience */}
			<section className='py-24 px-4 md:px-40' id='experience'>
				<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-newsreader)] font-light mb-12'>
					Experience
				</h2>
				<div className='space-y-8 max-w-3xl'>
					{experience.map((exp) => (
						<div key={exp.company} className='border-l-2 border-[var(--accent)] pl-6'>
							<h3 className='text-xl font-semibold mb-1'>{exp.position}</h3>
							<p className='text-[var(--accent)] mb-2'>{exp.company}</p>
							<p className='text-sm opacity-60'>{exp.date}</p>
						</div>
					))}
				</div>
			</section>

			{/* Skills */}
			<section className='py-24 px-4 md:px-40' id='skills'>
				<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-newsreader)] font-light mb-12'>
					Technologies
				</h2>
				<div className='flex flex-wrap gap-3 max-w-3xl'>
					{skills.map((skill) => (
						<span 
							key={skill} 
							className='px-4 py-2 bg-[var(--card-bg)] border border-[var(--muted)] text-sm'
						>
							{skill}
						</span>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className='py-12 px-4 md:px-40 border-t border-[var(--muted)]' id='contact'>
				<p className='text-sm opacity-60'>
					&copy; {new Date().getFullYear()} Cyril Yamoah
				</p>
			</footer>
		</div>
	);
}

const ProjectCard = (project: Project & { index: number }) => {
	return (
		<article className='group bg-[var(--card-bg)] border border-[var(--muted)] overflow-hidden hover:border-[var(--accent)] transition-colors flex flex-col'>
			<div className='relative overflow-hidden aspect-video'>
				<Image
					src={project.image}
					alt={project.title}
					width={1000}
					height={1000}
					className='w-full h-full object-cover'
					quality={100}
					loading='lazy'
				/>
			</div>
			<div className='p-6 flex flex-col flex-1'>
				<h3 className='text-2xl font-bold font-[family-name:var(--font-bricolage)] mb-4'>
					{project.title}
				</h3>
				<p className='text-sm opacity-80 leading-relaxed mb-4'>
					{project.description}
				</p>
				<div className='flex flex-wrap gap-2 mb-6'>
					{project.tech.split(', ').map((tech) => (
						<span key={tech} className='text-xs px-2 py-1 bg-[var(--background)] text-[var(--accent)]'>
							{tech}
						</span>
					))}
				</div>
				<Link 
					href={project.link} 
					target='_blank'
					className='inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--foreground)] transition-colors text-sm font-medium mt-auto'
				>
					<span>View Project</span>
					<span>→</span>
				</Link>
			</div>
		</article>
	);
};

export const metadata: Metadata = {
	title: 'Cyril Yamoah - Frontend Developer',
	description:
		'Cyril Yamoah is a frontend developer specializing in building scalable, user-centric solutions using Next.js, React, and TypeScript. Explore his portfolio, skills, and professional experience in the real estate industry.',
	keywords:
		'Cyril Yamoah, Frontend Developer, Next.js, React, TypeScript, Portfolio, Real Estate, Web Development, JavaScript, Redux, Tailwind, Software',
	icons: {
		icon: [{ url: '/favicon.ico', sizes: 'any' }],
		apple: [{ url: '/apple-touch-icon', sizes: 'any' }],
	},
	openGraph: {
		title: 'Cyril Yamoah - Frontend Developer',
		description:
			'Explore the portfolio, skills, and professional experience of Cyril Yamoah, a frontend developer specializing in Next.js, React, and TypeScript.',
		type: 'website',
		images: [
			{
				url: '/logo.png',
				width: 1200,
				height: 630,
				alt: 'Cyril Yamoah - Frontend Developer',
			},
		],
		url: 'https://cyrilyamoah.vercel.app',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Cyril Yamoah - Frontend Developer',
		description:
			'Explore the portfolio, skills, and professional experience of Cyril Yamoah, a frontend developer specializing in Next.js, React, and TypeScript.',
		images: [
			{
				url: '/logo.png',
				alt: 'Cyril Yamoah - Frontend Developer',
			},
		],
	},
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_TAG,
	},
	robots: 'index, follow',
	metadataBase: new URL('https://cyrilyamoah.vercel.app/'),
};
