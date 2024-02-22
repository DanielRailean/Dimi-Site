<script context="module">
	import Button from '$lib/components/atoms/Button.svelte';
	import { entries } from '$lib/data/experience';
	import { sem4 } from '$lib/semesters';
	import Card from './atoms/Card.svelte';
</script>

<div class="main">
	{#each Object.entries(sem4) as [key, value]}
		<div class="outline">
			<div>
				<p class="">{key}</p>
			</div>
			{#each Object.entries(value) as [key2, value2]}
				<div>
					<a href="/data/sem4/{value2}" target="_blank">{key2}</a>
				</div>
			{/each}
			<!-- <Card>hi</Card> -->
		</div>
	{/each}
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	.outline {
		// display: flex;
		padding: 12px 27px;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		font-weight: 500;
		font-size: 0.85rem;
		background-color: #cccbce;
		margin: 0.5rem;
		font-family: 'Cera Pro';
	}

	.main {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
