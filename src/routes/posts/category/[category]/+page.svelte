<!-- Renders any page at /posts/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage } from '$lib/config'

	export let data

  const { page, posts, category, total } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, total)
</script>


<svelte:head>
	<title>Category: {category}</title>
</svelte:head>


<h1>Blog category: <span class="text-blue-600">{category}</span></h1>

{#if posts.length}
	<PostsList posts={posts} />
	<Pagination currentPage={page} totalPosts={total} path="/posts/category/{category}/page" />
{:else}
	<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

	<p><a href="/posts/">Back to blog</a></p>
{/if}