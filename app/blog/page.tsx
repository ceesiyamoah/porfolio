import Navbar from '@/components/Navbar';
import { getAllPosts, BlogPostMeta } from '@/lib/blog';
import { Metadata } from 'next';
import Link from 'next/link';

function formatDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

export default function BlogPage() {
	const blogPosts: BlogPostMeta[] = getAllPosts();
	return (
		<div className='size-full relative'>
			<Navbar />

			{/* Schema.org structured data for Blog */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Blog',
						name: 'Cyril Yamoah Developer Blog',
						description: 'Technical articles on web development, deployment, React, Next.js, Django, and DevOps.',
						url: 'https://cyrilyamoah.com/blog',
						author: {
							'@type': 'Person',
							name: 'Cyril Yamoah',
							url: 'https://cyrilyamoah.com',
						},
						blogPost: blogPosts.map((post: BlogPostMeta) => ({
							'@type': 'BlogPosting',
							headline: post.title,
							description: post.excerpt,
							datePublished: post.date,
							author: {
								'@type': 'Person',
								name: 'Cyril Yamoah',
							},
							url: `https://cyrilyamoah.com/blog/${post.slug}`,
						})),
					}),
				}}
			/>

			{/* Hero Section */}
			<section className='py-24 md:py-32 px-4 md:px-40'>
				<div className='max-w-4xl'>
					<h1 className='text-5xl md:text-7xl font-light font-[family-name:var(--font-newsreader)] mb-6 leading-tight animate-fade-in-up'>
						Blog
					</h1>
					<p
						className='text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl animate-fade-in-up'
						style={{ animationDelay: '100ms' }}
					>
						Technical deep-dives, deployment guides, and lessons learned from building production applications.
					</p>
				</div>
			</section>

			{/* Blog Posts List */}
			<section className='pb-24 px-4 md:px-40' aria-label='Blog Posts'>
				<div className='max-w-4xl space-y-6'>
					{blogPosts.map((post, idx) => (
						<article key={post.slug} className='group animate-fade-in-up' style={{ animationDelay: `${idx * 100}ms` }}>
							<Link href={`/blog/${post.slug}`} className='block'>
								<div className='p-6 md:p-8 bg-[var(--card-bg)] border border-[var(--muted)] hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10 hover:-translate-y-1'>
									<div className='flex flex-wrap items-center gap-3 mb-4'>
										<time className='text-sm text-[var(--accent)]' dateTime={post.date}>
											{formatDate(post.date)}
										</time>
										<span className='text-[var(--muted)]'>•</span>
										<span className='text-sm opacity-60'>{post.readTime}</span>
									</div>

									<h2 className='text-xl md:text-2xl font-semibold font-[family-name:var(--font-bricolage)] mb-3 group-hover:text-[var(--accent)] transition-colors'>
										{post.title}
									</h2>

									<p className='opacity-70 leading-relaxed mb-4'>{post.excerpt}</p>

									<div className='flex flex-wrap gap-2'>
										{post.tags.map((tag) => (
											<span
												key={tag}
												className='text-xs px-3 py-1 bg-[var(--background)] text-[var(--accent)] border border-[var(--muted)]'
											>
												{tag}
											</span>
										))}
									</div>

									<div className='mt-4 inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium'>
										<span>Read article</span>
										<span aria-hidden='true' className='group-hover:translate-x-1 transition-transform'>
											→
										</span>
									</div>
								</div>
							</Link>
						</article>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-24 px-4 md:px-40 text-center border-t border-[var(--muted)]'>
				<div className='max-w-2xl mx-auto'>
					<h2 className='text-3xl md:text-4xl font-[family-name:var(--font-newsreader)] font-light mb-6'>
						Want to Work Together?
					</h2>
					<p className='opacity-80 mb-8'>
						I write about what I build. If you need a developer who documents and delivers, let&apos;s talk.
					</p>
					<Link
						href='mailto:info@cyrilyamoah.com'
						className='inline-block px-8 py-4 bg-[var(--accent)] text-[var(--background)] font-medium hover:bg-[var(--accent-dark)] transition-colors'
					>
						Get in Touch →
					</Link>
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

export const metadata: Metadata = {
	title: 'Blog — Cyril Yamoah | Web Development & Deployment Guides',
	description:
		'Technical articles on deploying Next.js, Django, Docker, and building production web applications. Practical guides from real-world projects.',
	keywords: [
		'web development blog',
		'Next.js deployment guide',
		'Django Docker tutorial',
		'EC2 deployment',
		'frontend development articles',
		'React tutorials',
		'DevOps for developers',
		'full-stack development blog',
		'Cyril Yamoah blog',
	],
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://cyrilyamoah.com/blog',
		siteName: 'Cyril Yamoah — Web Developer',
		title: 'Blog — Cyril Yamoah | Web Development & Deployment Guides',
		description: 'Technical articles on deploying Next.js, Django, Docker, and building production web applications.',
		images: [
			{
				url: '/logo.png',
				width: 1200,
				height: 630,
				alt: 'Cyril Yamoah Developer Blog',
				type: 'image/png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Blog — Cyril Yamoah | Web Development & Deployment Guides',
		description: 'Technical articles on deploying Next.js, Django, Docker, and building production web applications.',
		creator: '@ceesiyamoah',
		images: ['/logo.png'],
	},
	alternates: {
		canonical: 'https://cyrilyamoah.com/blog',
	},
};
