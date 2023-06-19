<script context="module">
	import Button from '$lib/components/atoms/Button.svelte';
	import { entries } from '$lib/data/experience';
	import { sem2 } from '$lib/semesters';
</script>

<div class="main">
	The overall theme in the 3rd semester is "Industrialised building design". As with the previous
	two semesters, the predominant work method was project work - carried out as group work whenever
	possible.
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
