import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='size-full'>
			<Navbar />
			<div className='p-4'>
				<div className='grid grid-cols-3 md:px-16 gap-4'>
					<div className='col-span-3 md:col-span-1'>
						<div className='w-full p-4 flex-col flex border rounded-lg gap-4  shadow-light transition-shadow duration-300'>
							<Image
								src='/indProf.png'
								alt='Industry Professionals'
								width={1000}
								height={1000}
								className='rounded-sm w-full'
								quality={100}
							/>
							<h4 className='text-bold text-2xl '>Industry Professionals</h4>
							<p className='text-sm'>
								A website to connect with industry professionals and learn from their experiences.
							</p>
							<Link className=' font-bold py-2 px-4 rounded border w-fit text-sm' href={'/industry'}>
								View Demo
							</Link>
							<p>Nextjs, Typescript, Material UI</p>
						</div>
					</div>
					<div className='col-span-3 md:col-span-1'>
						<div className='w-full p-4 flex-col flex border rounded-lg gap-4  shadow-light transition-shadow duration-300'>
							<Image
								src='/indProf.png'
								alt='Industry Professionals'
								width={1000}
								height={1000}
								className='rounded-sm w-full'
								quality={100}
							/>
							<h4 className='text-bold text-2xl '>Industry Professionals</h4>
							<p className='text-sm'>
								A website to connect with industry professionals and learn from their experiences.
							</p>
							<Link className=' font-bold py-2 px-4 rounded border w-fit text-sm' href={'/industry'}>
								View Demo
							</Link>
							<p>Nextjs, Typescript, Material UI</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
