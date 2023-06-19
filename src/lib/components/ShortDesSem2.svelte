<script context="module">
	import Button from '$lib/components/atoms/Button.svelte';
	import { entries } from '$lib/data/experience';
	import { sem2 } from '$lib/semesters';
	import ProjectsIcon from '$lib/icons/projects.svelte';
	//     import Tab1 from "./Tab1.svelte";
	// 	import Tab2 from "./Tab2.svelte";
	// 	import Tab3 from "./Tab3.svelte";
	//   import Tabs from "./Tabs.svelte";
</script>

<div class="main">
	The project methodology in the second semester is applied to the following themes: Industry and
	Technology, International Project Week and Designing a Two-storey Single-family House with a
	Basement.
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.outline {
		// display: flex;
		padding: 5px 15px;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		font-weight: 500;
		font-size: 0.85rem;
		// background-color: #e2e9e9;
	}

	.main {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding-left: 30%;
		font-size: 0.8rem;
		padding-bottom: 3%;
		padding-right: 30%;
		color: black;
		font-family: 'Cera Pro';
	}
</style>
