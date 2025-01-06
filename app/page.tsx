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
		<div className='size-full'>
			<Navbar />
			<div className='p-4 md:px-40 space-y-12'>
				<div className='space-y-4 lg:w-2/3 text md:text-left' id='about'>
					<div className='space-y-4'>
						<h1 className='text-xl md:text-5xl font-bold'>Cyril Yamoah, Frontend Developer</h1>
						<h2 className='text-lg md:text-2xl font-semibold '>
							Building Scalable, User-Centric Solutions that Drive Business Growth and Enhance User Engagement
						</h2>
					</div>
					<p className=''>
						A software developer specialized in Frontend Development. using nextjs and react to solve problems,
						currently in the real estate industry
					</p>
				</div>

				<div className='space-y-4 lg:w-2/3' id='experience'>
					<h2 className='text-xl md:text-3xl font-bold '>Experience</h2>
					<div className='border-l space-y-4 relative border-dashed p-4'>
						{experience.map((exp, ind) => (
							<p
								className={`relative flex flex-col ${
									ind !== experience.length - 1
										? 'before:block before:absolute before:bg-white before:w-20 before:h-[1px] before:-bottom-2 before:-left-4'
										: ''
								}`}
								key={exp.company}
							>
								<span className='text-lg'>
									{exp.position} @ <span className='font-black '>{exp.company}</span>
								</span>{' '}
								<span className='text-sm'>{exp.date}</span>
							</p>
						))}
					</div>
				</div>

				<div className='space-y-4 lg:w-2/3' id='skills'>
					<h2 className='text-xl md:text-3xl font-bold'>Skills</h2>
					<ul className='grid grid-cols-4 gap-4'>
						{skills.map((skill) => (
							<li key={skill} className='text-sm col-span-2 md:col-span-1 border p-2 rounded-lg'>
								{skill}
							</li>
						))}
					</ul>
				</div>

				<div className='grid grid-cols-3  gap-4 scroll-m-32' id='projects'>
					{projects.map((project) => (
						<ProjectCard {...project} key={project.title} />
					))}
				</div>

				<div className='flex justify-center items-center gap-8 ' id='contact'>
					{contactLinks.map((link) => (
						<Link href={link.url} className='w-6 block' key={link.url}>
							{link.icon}
						</Link>
					))}
				</div>
			</div>

			<div className='py-4 text-center'> &copy; {new Date().getFullYear()}</div>
		</div>
	);
}

const ProjectCard = (project: Project) => {
	return (
		<div className='col-span-3 md:col-span-1'>
			<div className='w-full p-4 flex-col flex border rounded-lg gap-4  shadow-light transition-shadow duration-300'>
				<Image
					src={project.image}
					alt='Industry Professionals'
					width={1000}
					height={1000}
					className='rounded-sm w-full'
					quality={100}
					loading='lazy'
				/>
				<h4 className='text-bold text-2xl '>{project.title}</h4>
				<p className='text-sm'>{project.description}</p>
				<Link className=' font-bold py-2 px-4 rounded border w-fit text-sm' href={project.link} target='_blank'>
					View Demo
				</Link>
				<p>{project.tech}</p>
			</div>
		</div>
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
