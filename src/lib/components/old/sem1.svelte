<script context="module">
	import { semesters } from "$lib/semesters";
</script>

<h5>Links to the documentation we wrote:</h5>
<div class="flex flex-row justify-center">
	{#each Object.entries(semesters["1"]) as [key, value]}
		<div class="mx-4">
			<div>
				<p class="text-xs">{key}</p>
			</div>
			{#each Object.entries(value) as [key2, value2]}
				<div>
					<a href="/data/sem1/{value2}" target="_blank">
						<p>
							{key2}
						</p></a
					>
				</div>
			{/each}
		</div>
	{/each}
</div>
