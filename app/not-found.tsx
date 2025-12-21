import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '404 — Page Not Found | Cyril Yamoah',
	description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center px-4'>
			<div className='text-center max-w-md'>
				<h1 className='text-8xl md:text-9xl font-light font-[family-name:var(--font-newsreader)] text-[var(--accent)] mb-4'>
					404
				</h1>
				<h2 className='text-2xl md:text-3xl font-[family-name:var(--font-bricolage)] mb-4'>Page not found</h2>
				<p className='opacity-70 mb-8'>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
				<Link
					href='/'
					className='inline-block px-6 py-3 bg-[var(--accent)] text-[var(--background)] font-medium hover:bg-[var(--accent-dark)] transition-colors'
				>
					← Back to Home
				</Link>
			</div>
		</div>
	);
}
