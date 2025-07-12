'use client'

import { PostType } from '@/inteface'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

const Posts: FC<{ data: PostType[] }> = ({ data }) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	})

	return (
		<table border={1}>
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
				</tr>
			</thead>
			<tbody>
				{data.map(post => (
					<tr key={post.id}>
						<td>{post.id}</td>
						<td>
							<Link href={`/posts/${post.id}`}>{post.title}</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Posts
