<script context="module">
	import Button from '$lib/components/atoms/Button.svelte';
	import { entries } from '$lib/data/experience';
	import { sem2 } from '$lib/semesters';
	import Picture3 from '$lib/images/3rd.png?width=300&format=avif;webp;png&meta&imagetools';
	import { getSrcsetFromImport } from '$lib/utils/functions';
	const photo3 = getSrcsetFromImport(Picture3);
</script>

<div class="desc-photo" style="display:flex">
	<div class="main">
		The overall theme in the 3rd semester is "Industrialised building design". As with the previous
		two semesters, the predominant work method was project work - carried out as group work whenever
		possible.
	</div>
	<div class="photo" style="margin-top: -6rem; padding-left: 2rem; ">
		<img class="image" src={photo3.png} alt="Dimitrian" />
	</div>
</div>

