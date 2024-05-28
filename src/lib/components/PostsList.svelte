<script>
	import Img from "./Img.svelte";

	export let posts = [];
</script>

<div class="flex flex-col">
	{#each posts as post}
		<a href="/posts/{post.slug}" class="hover:no-underline my-10 h-full w-full ">
			<article
				class="h-full w-full bg-gray-0 rounded-md bg-clip-paddin bg-opacity-0 cursor-pointer"
			>
				<div class="grid grid-cols-1 md:grid-cols-3">
					<div class="m-auto w-full col-span-2">
						<div class="flex items-center">
							<Img
								loading="lazy"
								decoding="async"
								classes="object-cover object-center w-5 h-5 rounded-full"
								src={post.authorImageUrl}
								alt=""
							/>
							<div class="mx-2">
								<p
									class="text-sm font-bold text-gray-700 dark:text-gray-200"
								>
									{post.author}
								</p>
							</div>
						</div>
						<div class=" mt-3">
							<a
								href="/posts/{post.slug}"
								class="block text-2xl font-semibold text-gray-800 hover:underline dark:text-gray-100"
							>
								{post.title}
							</a>

							<p
								class="mt-3 text-gray-500 dark:text-gray-300 "
							>
								{post.excerpt}
							</p>

							<div class="flex mt-2">
								<p
									class="mr-4 inline-bloc md:whitespace-nowrap dark:text-blue-500 text-blue-500"
									>{post.minutesToRead ? post.minutesToRead : 7} min read</p>
								
								<tags
									class="text-sm text-blue-500 capitalize flex flex-row flex-wrap"
								>
									{#each post.categories as category}
										<a
											class="text-blue-500"
											href="/posts/category/{category}/"
										>
											<tag class="">
												<p class="mr-3">
													{category}
												</p>
											</tag>
										</a>
									{/each}
								</tags>
							</div>
						</div>
					</div>
					<Img
						classes="ml-auto object-cover md:h-32 md:w-52 mt-5 md:mt-0"
						pictureClasses="ml-auto w-full"
						src={post.coverImage}
						alt=""
					/>
				</div>
			</article>
		</a>
	{/each}
</div>

<style>
</style>
