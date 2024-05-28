import { posts } from '$lib/fetchPosts'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = () => {
  return json(posts.length)
} 