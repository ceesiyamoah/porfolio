import React from 'react';
import MobileNavbar from './MobileNavbar';
import { navlinks } from '@/utils/constants';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='p-4 flex items-center w-full justify-center  backdrop-blur-lg sticky top-0 z-10 border-b border-b-slate-500  bg-[foreground] shadow-sm'>
			<div className=' items-center gap-4 p-2 hidden md:flex'>
				{navlinks.slice(0, 1).map((item) => (
					<Link href={item.href} key={item.href} className='w-full rounded-lg p-2 text-center'>
						{item.label}
					</Link>
				))}
			</div>
			<h1 className='text-2xl font-bold ml-auto flex-1 text-center'>CYRIL YAMOAH</h1>
			<div className=' items-center gap-4 p-2 hidden md:flex'>
				{navlinks.slice(1).map((item) => (
					<Link href={item.href} key={item.href} className='w-full rounded-lg p-2 text-center'>
						{item.label}
					</Link>
				))}
			</div>
			<MobileNavbar />
		</nav>
	);
};

export default Navbar;
