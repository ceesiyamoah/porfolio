import { Newsreader, IBM_Plex_Mono, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const newsreader = Newsreader({
	variable: '--font-newsreader',
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
	variable: '--font-ibm-plex-mono',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
});

const bricolageGrotesque = Bricolage_Grotesque({
	variable: '--font-bricolage',
	subsets: ['latin'],
	weight: ['400', '600', '700'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={`${newsreader.variable} ${ibmPlexMono.variable} ${bricolageGrotesque.variable} antialiased`}>{children}</body>
		</html>
	);
}
