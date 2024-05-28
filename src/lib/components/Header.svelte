<script>
	import { navItems, siteTitle } from "$lib/config";
	import { page } from "$app/stores";
	import DarkModeToggle from "./DarkModeToggle.svelte";
	import Icons from "./icons/Icons.svelte";

	const formatCurrentPage = (element, currentPath) => {
		if (!currentPath) return "";
		if (currentPath.includes(element)) {
			return "font-bold text-gray-800 no-underline dark:text-gray-100";
		} else
			return "text-gray-600 hover:text-gray-800 hover:text-underline dark:text-gray-400 hover:dark:text-gray-100";
	};

	let currentClasses = "bg-gray-100 dark:bg-stone-800";
	let isMenuClosed = true;

	const toggleMenu = () => {
		isMenuClosed = !isMenuClosed;
		// console.log(isMenuClosed)
	};
</script>

<header
	id="header"
	class="flex flex-col w-full z-20 top-0 dark:text-gray-100 {currentClasses}"
>
	<div
		class="w-full h-full md:max-w-4xl mx-auto flex flex-wrap items-end justify-center sm:justify-between mt-0 pt-[0.8rem]"
	>
		<div class="pl-3 lg:pl-7 flex flex-row z-0">
			<a href="/" class="hover:no-underline">
				<h1
					class="my-0 text-gray-800 dark:text-gray-100 text-4xl lg:text-4xl no-underline hover:no-underline font-extrabold font-sans"
					href="/"
				>
					{siteTitle}
				</h1></a
			>
		</div>

		<div class="flex flex-row items-end ml-6 lg:pr-6 pr-1">
			<div class="mr-4">
				<div class="lg:hidden">
					<Icons
						icon="chevron"
						title="{isMenuClosed ? "open": "close"} menu"
						extraClass="stroke-[4px] transition-all duration-1000 {isMenuClosed ? "rotate-180" : ""}"
						size="10"
						on:click={toggleMenu}
					/>
				</div>
				<div class="hidden lg:block">
					<ul
						class="justify-end flex flex-row items-center  list-none px-5 bg-gray-100 dark:bg-stone-800"
					>
						{#each navItems as item}
							<!-- content here -->
							<li class="mr-3">
								<a
									class="inline-block px-4 {formatCurrentPage(
										item.route,
										$page.url.pathname
									)}"
									href={item.route}
									on:click={() => {
										toggleMenu();
									}}>{item.title}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
	
			<DarkModeToggle />
		</div>
	</div>

	<div
		class="w-full flex-grow lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20 {currentClasses}"
		class:hidden={isMenuClosed}
		id="nav-content"
	>
		<ul
			class="lg:hidden justify-end flex-1 items-center  list-none bg-gray-100 dark:bg-stone-800"
		>
			{#each navItems as item}
				<!-- content here -->
				<li class="mr-3">
					<a
						class="inline-block px-4 {formatCurrentPage(
							item.route,
							$page.url.pathname
						)}"
						href={item.route}
						on:click={() => {
							toggleMenu();
						}}>{item.title}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</header>

<style lang="postcss">
	li::before {
		content: "";
	}
	a {
		@apply text-lg;
		vertical-align: middle;
	}
</style>
