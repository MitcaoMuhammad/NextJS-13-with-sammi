'use client'
import { useRouter } from 'next/navigation'

const Navbar = () => {
	const router = useRouter()

	return (
		<div className='navbar-1'>
			<button onClick={() => router.push('/')}>Bosh sahifa</button>
			<button onClick={() => router.push('/about')}>Men haqqimda</button>
			<button onClick={() => router.push('/contact')}>Bog'lanish </button>
		</div>
	)
}

export default Navbar
