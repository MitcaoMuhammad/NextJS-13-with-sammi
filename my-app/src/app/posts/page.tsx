import Posts from '@/component/posts'
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

	return <Posts data={data} />
}

export default PostsPage
