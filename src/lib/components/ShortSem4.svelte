<script context="module">
	import Picture4 from '$lib/images/Renders.png?width=300&format=avif;webp;png&meta&imagetools';
	import { getSrcsetFromImport } from '$lib/utils/functions';
	const photo4 = getSrcsetFromImport(Picture4);
</script>

<div class="desc-photo" style="display:flex">
	<div class="main">
		The overall theme in the 3rd semester is "Industrialised building design". As with the previous
		two semesters, the predominant work method was project work - carried out as group work whenever
		possible.
	</div>
	<div class="photo" style="margin-top: -6rem; padding-left: 2rem; ">
		<img class="image" src={photo4.png} alt="Dimitrian" />
	</div>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	.image {
		border-radius: 25px;
		height: 12.5rem;
	}
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
