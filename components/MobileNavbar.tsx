'use client';

import { navlinks } from '@/utils/constants';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const MobileNavbar = () => {
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
				setMobileMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, []);
	return (
		<>
			<button
				className='block rounded-lg p-2 md:hidden '
				aria-label='Toggle Menu'
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
				>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
				</svg>
			</button>

			{mobileMenuOpen && (
				<nav
					id='home'
					className='absolute right-0 top-[73px] w-2/3 border border-t-0 border-slate-500 rounded-bl-lg shadow md:hidden z-10 bg-background '
					ref={mobileMenuRef}
				>
					<div className='flex flex-col items-center gap-4 p-2 '>
						{navlinks.map((item) => (
							<Link
								href={item.href}
								key={item.href}
								className='w-full rounded-lg p-2 text-center'
								onClick={() => setMobileMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
					</div>
				</nav>
			)}
		</>
	);
};

export default MobileNavbar;
