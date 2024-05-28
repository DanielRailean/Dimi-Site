<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	import Img from "$lib/components/Img.svelte";
	import { siteURL } from "$lib/config";

	export let data;
	
	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories, coverImageAlt } =
	data.meta;
	
	</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image" content="{siteURL}{coverImage}" />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<meta name="twitter:image" content="{siteURL}{coverImage}" />
</svelte:head>

<article class="w-full pt-3 text-xl text-gray-800 leading-normal overflow-auto">
	<!--Title-->
	<div class="font-sans">
		<p class="text-base md:text-sm font-bold">
			&lt; <a
				href="/posts/"
				class="text-base md:text-smfont-bold no-underline hover:underline"
				>Posts</a
			>
		</p>
		<h1 class="font-sans break-normal text-gray-800 dark:text-gray-100">
			{title}
		</h1>
		<p class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">Published: {date}</p>
		{#if updated}
		<p class="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">Updated: {updated}</p>

		{/if}
	</div>

	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	  
	<Img
		loading="lazy" decoding="async"
		classes="rounded my-4 p-0 mx-0 w-full"
		src={coverImage}
		alt="{coverImageAlt}"
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>
	
	<!--Post Content-->

	{@html data.PostContent}

	{#if categories}
	<div class="text-xl md:text-md text-gray-500 py-6">
		<div class="flex flex-row flex-wrap mt-1">
		{#each categories as category}
			<a class="text-xl font-normal md:text-md mr-2 mt-1  no-underline" href="/posts/category/{category}/">
				<tag class="no-underline">
					<p class="text-xl no-underline">
					{category}
				</p>
				</tag>
			</a>
			{/each}
		</div>
	</div>
	{/if}
</article>
