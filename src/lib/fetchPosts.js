export const posts = await Promise.all(
	Object.entries(import.meta.glob('/posts/*.md')).map(async ([path, resolver]) => {
		const { metadata } = await resolver()
		const slug = path.split('/').pop().slice(0, -3)
		return { ...metadata, slug }
	})
)

export const fetchPosts = async ({ skip = 0, take = 10, category }) => {
	let sortedPosts = posts
	.sort((a, b) => new Date(b.date) - new Date(a.date))
	.filter(post => category ? post.categories.includes(category) : true)
	.slice(skip, take ? skip+take : undefined)

	return {
		posts: sortedPosts
	}
}