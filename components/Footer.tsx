import Link from 'next/link';

interface FooterProps {
	currentPage?: 'home' | 'blog';
}

export default function Footer({ currentPage = 'home' }: FooterProps) {
	return (
		<footer className='py-12 px-4 md:px-40 border-t border-muted' id='contact'>
			<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
				<p className='text-sm opacity-60'>&copy; {new Date().getFullYear()} Cyril Yamoah. All rights reserved.</p>
				<nav aria-label='Footer navigation'>
					<ul className='flex gap-6 text-sm'>
						<li>
							<Link
								href='/#about'
								className={`hover:text-accent transition-colors ${
									currentPage === 'home' ? 'text-accent' : ''
								}`}
							>
								About
							</Link>
						</li>
						<li>
							<Link href='/#projects' className='hover:text-accent transition-colors'>
								Projects
							</Link>
						</li>
						<li>
							<Link
								href='/blog'
								className={`hover:text-accent transition-colors ${
									currentPage === 'blog' ? 'text-accent' : ''
								}`}
							>
								Blog
							</Link>
						</li>
						<li>
							<Link href='mailto:info@cyrilyamoah.com' className='hover:text-accent transition-colors'>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}
