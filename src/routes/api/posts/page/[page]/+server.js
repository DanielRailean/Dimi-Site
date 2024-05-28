import { postsPerPage } from '$lib/config'
import { fetchPosts } from '$lib/fetchPosts'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async ({ params }) => {
  const { page } = params || 1

  const options = {
    skip: (page - 1) * postsPerPage,
    take: postsPerPage
  }

  const { posts } = await fetchPosts(options)
  
  return json(posts)
}