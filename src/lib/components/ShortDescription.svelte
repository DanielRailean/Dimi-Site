<script context="module">
	import Button from '$lib/components/atoms/Button.svelte';
	import { entries } from '$lib/data/experience';
	import { sem2 } from '$lib/semesters';
</script>

<div class="main">
	{#each Object.entries(sem2) as [key, value]}
		<div class="outline">
			<div>
				<p class="">{key}</p>
			</div>
			{#each Object.entries(value) as [key2, value2]}
				<div>
					<a href="/data/sem2/{value2}" target="_blank">{key2}</a>
				</div>
			{/each}
		</div>
	{/each}
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
	}
</style>
