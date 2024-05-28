<script context="module">
	import Picture4 from '$lib/images/Renders.png?width=300&format=avif;webp;png&meta&imagetools';
	import { getSrcsetFromImport } from '$lib/utils/functions';
	const photo4 = getSrcsetFromImport(Picture4);
</script>

<div class="desc-photo" style="display:flex">
	<div class="main">
		The 4th semester was focused on Multi-storey buildings with dwellings. The main goal was to
		design a building for a mixed residential in 3 floors including partial basement.
	</div>
	<div class="photo" style="margin-top: -6rem; padding-left: 2rem; ">
		<img class="image" src={photo4.png} alt="Dimitrian" />
	</div>
</div>
