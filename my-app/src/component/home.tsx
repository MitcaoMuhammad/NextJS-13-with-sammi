'use client'

import { PostType } from '@/inteface'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Text from './text/text'

const Home = () => {
	const [posts, setPosts] = useState<PostType[]>([])
	const [IsLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get(
					'https://jsonplaceholder.typicode.com/posts?_limit=10'
				)
			} catch (error) {
				console.error('Error fetching posts:', error)
			} finally {
				setIsLoading(false)
			}
		}
	})

	return (
		<>
			{IsLoading
				? 'Loading...'
				: posts.map(c => (
						<div key={c.id}>
							<Link href={c.id}>{c.title}</Link>
						</div>
				  ))}
			<Text text='Hello, this is a sample text component!' />
		</>
	)
}

export default Home
