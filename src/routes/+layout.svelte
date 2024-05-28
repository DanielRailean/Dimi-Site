<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
	import ProgressBar from './../lib/components/ProgressBar.svelte';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { afterUpdate, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
    import { addCopyButton } from '$lib/util';
	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	export const prerender = true;

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});

	afterUpdate(addCopyButton);
</script>

<div>
	<div class="min-h-[100vh] min-w-full bg-stone-100 dark:bg-stone-800 pb-10 cool-bg">
		<ProgressBar/>
		<Header />
		<div class="container w-full max-w-4xl mx-auto pt-12 pb-16 px-3 lg:px-8">
			{#key data.path}
				<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
					<slot />
				</main>
			{/key}
		</div>
	</div>
	<Footer />
</div>

<style>
</style>
