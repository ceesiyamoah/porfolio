import React from 'react';
import MobileNavbar from './MobileNavbar';
import { navlinks } from '@/utils/constants';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='p-4 md:px-40 flex items-center w-full justify-between backdrop-blur-md sticky top-0 z-50 border-b border-[var(--muted)] bg-[var(--background)]/90'>
			<h1 className='text-lg font-medium'>
				CY
			</h1>
			<div className='items-center gap-8 hidden md:flex'>
				{navlinks.map((item) => (
					<Link 
						href={item.href} 
						key={item.href} 
						className='text-sm hover:text-[var(--accent)] transition-colors'
					>
						{item.label}
					</Link>
				))}
			</div>
			<MobileNavbar />
		</nav>
	);
};

export default Navbar;
