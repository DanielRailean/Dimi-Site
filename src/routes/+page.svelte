<script>
	import { siteTitle } from '$lib/config';
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'

	export let data
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<PostsList posts={data.posts} />
<Pagination currentPage={1} totalPosts={data.total} />