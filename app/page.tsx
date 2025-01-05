import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

/*
TODO:
- Add about me section -done
- Add a skills section -done
- Add more projects -done
- Add a blog section
- Add a resume section
- Add contact section
- Add a footer

*/

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
		description: 'A  to real estate brokers to manage their properties and clients.',
		tech: 'React, Javascript, Material UI, Redux',
		image: '/bpotech.png',
		link: 'https://bpotech.io',
	},
];

const skills = ['React', 'Nextjs', 'Typescript', 'Redux', 'Tailwind', 'Javascript'];

export default function Home() {
	return (
		<div className='size-full'>
			<Navbar />
			<div className='p-4 md:px-32 space-y-8'>
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

				<div>
					<h2 className='text-xl md:text-3xl font-bold'>Contact</h2>
					<p className=''>
						Email:
						<Link href='mailto:ccyamoah@gmail.com'>ccyamoah@gmail.com</Link>
					</p>
				</div>
			</div>
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
