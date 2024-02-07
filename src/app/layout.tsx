import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const font = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Pokédex',
	description: 'Find your favorities pokémons',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Navbar />

				{children}

				<Footer />
			</body>
		</html>
	)
}
