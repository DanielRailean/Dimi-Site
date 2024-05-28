<script context="module">
	import Button from '$lib/components/atoms/Button.svelte';
	import { entries } from '$lib/data/experience';
	import { sem2 } from '$lib/semesters';
	import ProjectsIcon from '$lib/icons/projects.svelte';
	import Picture2 from '$lib/images/2nd.png?width=400&format=avif;webp;png&meta&imagetools';
	import { getSrcsetFromImport } from '$lib/utils/functions';

	//     import Tab1 from "./Tab1.svelte";
	// 	import Tab2 from "./Tab2.svelte";
	// 	import Tab3 from "./Tab3.svelte";
	//   import Tabs from "./Tabs.svelte";
	const photo2 = getSrcsetFromImport(Picture2);
</script>

<div class="desc-photo" style="display:flex">
	<div class="main">
		The project methodology in the second semester is applied to the following themes: Industry and
		Technology, International Project Week and Designing a Two-storey Single-family House with a
		Basement.
	</div>
	<div class="photo" style="margin-top: -6rem; padding-left: 2rem; ">
		<img style="border-radius:25px" src={photo2.png} alt="Dimitrian" />
	</div>
</div>
