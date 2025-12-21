import Navbar from '@/components/Navbar';
import MDXContent from '@/components/MDXContent';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

function formatDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	return (
		<div className='size-full relative'>
			<Navbar />

			{/* Schema.org structured data */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.title,
						description: post.excerpt,
						datePublished: post.date,
						dateModified: post.date,
						author: {
							'@type': 'Person',
							name: 'Cyril Yamoah',
							url: 'https://portfolio.cyrilyamoah.com',
						},
						publisher: {
							'@type': 'Person',
							name: 'Cyril Yamoah',
						},
						url: `https://portfolio.cyrilyamoah.com/blog/${slug}`,
						keywords: post.tags.join(', '),
					}),
				}}
			/>

			{/* Article Header */}
			<header className='py-16 md:py-24 px-4 md:px-40 border-b border-[var(--muted)]'>
				<div className='max-w-3xl'>
					<Link
						href='/blog'
						className='inline-flex items-center gap-2 text-[var(--accent)] hover:opacity-70 transition-opacity mb-8 text-sm'
					>
						<span>←</span>
						<span>Back to Blog</span>
					</Link>

					<div className='flex flex-wrap items-center gap-3 mb-6'>
						<time className='text-sm text-[var(--accent)]' dateTime={post.date}>
							{formatDate(post.date)}
						</time>
						<span className='text-[var(--muted)]'>•</span>
						<span className='text-sm opacity-60'>{post.readTime}</span>
					</div>

					<h1 className='text-3xl md:text-5xl font-light font-[family-name:var(--font-newsreader)] mb-6 leading-tight animate-fade-in-up'>
						{post.title}
					</h1>

					<p className='text-lg opacity-80 leading-relaxed mb-6 animate-fade-in-up' style={{ animationDelay: '100ms' }}>
						{post.excerpt}
					</p>

					<div className='flex flex-wrap gap-2 animate-fade-in-up' style={{ animationDelay: '200ms' }}>
						{post.tags.map((tag) => (
							<span
								key={tag}
								className='text-xs px-3 py-1 bg-[var(--card-bg)] text-[var(--accent)] border border-[var(--muted)]'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</header>

			{/* Article Content */}
			<main className='py-12 px-4 md:px-40'>
				<div className='max-w-3xl animate-fade-in-up' style={{ animationDelay: '300ms' }}>
					<MDXContent source={post.content} />
				</div>
			</main>

			{/* Author Section */}
			<section className='py-12 px-4 md:px-40 border-t border-[var(--muted)]'>
				<div className='max-w-3xl'>
					<div className='bg-[var(--card-bg)] border border-[var(--muted)] p-6 md:p-8'>
						<p className='text-sm text-[var(--accent)] mb-2'>Written by</p>
						<h3 className='text-xl font-semibold font-[family-name:var(--font-bricolage)] mb-2'>Cyril Yamoah</h3>
						<p className='opacity-80 mb-4'>
							Software Developer building production web applications. I write about deployment, performance, and
							lessons learned from real projects.
						</p>
						<Link
							href='mailto:info@cyrilyamoah.com'
							className='inline-flex items-center gap-2 text-[var(--accent)] hover:opacity-70 transition-opacity text-sm font-medium'
						>
							<span>Get in touch</span>
							<span>→</span>
						</Link>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='py-12 px-4 md:px-40 border-t border-[var(--muted)]'>
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
					<p className='text-sm opacity-60'>&copy; {new Date().getFullYear()} Cyril Yamoah. All rights reserved.</p>
					<nav aria-label='Footer navigation'>
						<ul className='flex gap-6 text-sm'>
							<li>
								<Link href='/#about' className='hover:text-[var(--accent)] transition-colors'>
									About
								</Link>
							</li>
							<li>
								<Link href='/#projects' className='hover:text-[var(--accent)] transition-colors'>
									Projects
								</Link>
							</li>
							<li>
								<Link href='/blog' className='text-[var(--accent)]'>
									Blog
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

export async function generateStaticParams() {
	const slugs = getAllSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		return {
			title: 'Post Not Found',
		};
	}

	return {
		title: `${post.title} — Cyril Yamoah`,
		description: post.excerpt,
		keywords: post.tags,
		openGraph: {
			type: 'article',
			locale: 'en_US',
			url: `https://portfolio.cyrilyamoah.com/blog/${slug}`,
			siteName: 'Cyril Yamoah — Web Developer',
			title: post.title,
			description: post.excerpt,
			publishedTime: post.date,
			authors: ['Cyril Yamoah'],
			images: [
				{
					url: '/logo.png',
					width: 1200,
					height: 630,
					alt: post.title,
					type: 'image/png',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.excerpt,
			creator: '@ceesiyamoah',
			images: ['/logo.png'],
		},
		alternates: {
			canonical: `https://portfolio.cyrilyamoah.com/blog/${slug}`,
		},
	};
}
