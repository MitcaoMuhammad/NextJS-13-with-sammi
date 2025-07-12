import { PostType } from '@/inteface'
import axios from 'axios'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getData() {
	const { data } = await axios.get(
		'https://jsonplaceholder.typicode.com/posts?_limit=10'
	)

	return data
}

const PostsPage = async () => {
	const data: PostType[] = await getData()

	if (!data || data.length === 0) {
		notFound()
	}

	return (
		<>
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
		</>
	)
}

export default PostsPage
