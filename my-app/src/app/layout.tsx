'use client'

import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import { useRouter } from 'next/navigation'
// import Link from 'next/link'

const fira_code = Fira_Code({ subsets: ['latin'], weight: '400' })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const router = useRouter()

	return (
		<html lang='en'>
			<body className={fira_code.className}>
				<div className='navbar-1'>
					<button onClick={() => router.push('/')}>Bosh sahifa</button>
					<button onClick={() => router.push('/about')}>Men haqqimda</button>
					<button onClick={() => router.push('/contact')}>Bog'lanish </button>
				</div>
				{/* <div className='navbar'>
					<Link href={'/'}>Bosh sahifa</Link>
					<Link href={'/about'}>Men haqqimda</Link>
					<Link href={'/contact'}>Bog'lanish</Link>
				</div> */}
				{children}
				<p>Footer</p>
			</body>
		</html>
	)
}
