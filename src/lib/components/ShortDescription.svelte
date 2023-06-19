<script context="module">
	import Button from '$lib/components/atoms/Button.svelte';
	import { entries } from '$lib/data/experience';
	import { sem2 } from '$lib/semesters';
	import Picture1 from '$lib/images/1st.png?width=400&format=avif;webp;png&meta&imagetools';
	import { getSrcsetFromImport } from '$lib/utils/functions';
	const photo1 = getSrcsetFromImport(Picture1);
</script>

<div class="desc-photo" style="display:flex">
	<div class="main">
		The first semester project is a "single-family house," covering all aspects relating to
		situating the house on a plot, specifying and arranging rooms, selecting materials, selecting
		building services, costing, time management etc.
	</div>
	<div class="photo" style="margin-top: -6rem; padding-left: 2rem; ">
		<img style="border-radius:25px; height:200px" src={photo1.png} alt="Dimitrian" />
	</div>
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
		width: 80%;
		flex-direction: row;
		justify-content: center;
		padding-left: 30%;
		font-size: 0.8rem;
		padding-bottom: 3%;
		// padding-right: 30%;
		color: black;
		font-family: 'Cera Pro';
	}
</style>
