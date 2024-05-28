import { fetchPosts } from '$lib/fetchPosts'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async (req) => {
  const { posts } = await fetchPosts({
      skip: 0,
      take: undefined,
      category: undefined
    })

  return json(posts)
}