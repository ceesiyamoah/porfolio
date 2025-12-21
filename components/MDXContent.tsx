import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { ReactNode } from 'react';

interface MDXContentProps {
	source: string;
}

const components = {
	h1: ({ children }: { children: ReactNode }) => (
		<h1 className='text-3xl md:text-4xl font-bold font-[family-name:var(--font-bricolage)] mt-12 mb-6 text-[var(--foreground)]'>
			{children}
		</h1>
	),
	h2: ({ children }: { children: ReactNode }) => (
		<h2 className='text-2xl md:text-3xl font-semibold font-[family-name:var(--font-bricolage)] mt-10 mb-4 text-[var(--foreground)] border-b border-[var(--muted)] pb-2'>
			{children}
		</h2>
	),
	h3: ({ children }: { children: ReactNode }) => (
		<h3 className='text-xl md:text-2xl font-semibold font-[family-name:var(--font-bricolage)] mt-8 mb-3 text-[var(--foreground)]'>
			{children}
		</h3>
	),
	p: ({ children }: { children: ReactNode }) => <p className='mb-4 leading-relaxed opacity-90'>{children}</p>,
	ul: ({ children }: { children: ReactNode }) => (
		<ul className='mb-4 ml-6 space-y-2 list-disc marker:text-[var(--accent)]'>{children}</ul>
	),
	ol: ({ children }: { children: ReactNode }) => (
		<ol className='mb-4 ml-6 space-y-2 list-decimal marker:text-[var(--accent)]'>{children}</ol>
	),
	li: ({ children }: { children: ReactNode }) => <li className='opacity-90'>{children}</li>,
	a: ({ href, children }: { href?: string; children: ReactNode }) => (
		<a
			href={href}
			className='text-[var(--accent)] hover:underline underline-offset-2'
			target={href?.startsWith('http') ? '_blank' : undefined}
			rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
		>
			{children}
		</a>
	),
	blockquote: ({ children }: { children: ReactNode }) => (
		<blockquote className='border-l-4 border-[var(--accent)] pl-4 my-6 italic opacity-80'>{children}</blockquote>
	),
	hr: () => <hr className='my-8 border-[var(--muted)]' />,
	code: ({ children, className, ...props }: { children: ReactNode; className?: string; 'data-language'?: string }) => {
		const isInlineCode = !props['data-language'] && !className;
		if (isInlineCode) {
			return (
				<code className='bg-[var(--card-bg)] border border-[var(--muted)] px-1.5 py-0.5 rounded text-sm text-[var(--accent)]'>
					{children}
				</code>
			);
		}
		// Block code - let rehype-pretty-code handle styling
		return (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
	pre: ({ children, ...props }: { children: ReactNode }) => (
		<pre className='bg-[#0d1117] rounded-lg my-6 overflow-x-auto text-sm' {...props}>
			{children}
		</pre>
	),
	table: ({ children }: { children: ReactNode }) => (
		<div className='overflow-x-auto my-6'>
			<table className='w-full border-collapse border border-[var(--muted)]'>{children}</table>
		</div>
	),
	th: ({ children }: { children: ReactNode }) => (
		<th className='border border-[var(--muted)] bg-[var(--card-bg)] px-4 py-2 text-left font-semibold'>{children}</th>
	),
	td: ({ children }: { children: ReactNode }) => <td className='border border-[var(--muted)] px-4 py-2'>{children}</td>,
	strong: ({ children }: { children: ReactNode }) => (
		<strong className='font-semibold text-[var(--foreground)]'>{children}</strong>
	),
	em: ({ children }: { children: ReactNode }) => <em className='italic'>{children}</em>,
};

const options = {
	theme: 'github-dark',
	keepBackground: true,
	defaultLang: 'bash',
	grid: true,
	// Don't process inline code
	bypassInlineCode: true,
};

export default function MDXContent({ source }: MDXContentProps) {
	return (
		<article className='prose prose-invert max-w-none'>
			<MDXRemote
				source={source}
				components={components}
				options={{
					mdxOptions: {
						rehypePlugins: [[rehypePrettyCode, options]],
					},
				}}
			/>
		</article>
	);
}
