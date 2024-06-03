<script context="module">
	import { semesters } from "$lib/semesters";
</script>

<h5>The project consists of multiple drawings, divided into sections:</h5>
<div class="flex flex-row justify-center">
	{#each Object.entries(semesters["3"]) as [key, value]}
		<div class="mx-4">
			<div>
				<p class="text-md"><b><u>{key}</u></b></p>
			</div>
			{#each Object.entries(value) as [key2, value2]}
				<div>
					<a href="/data/sem3/{value2}" target="_blank">
						<p>
							{key2}
						</p></a
					>
				</div>
			{/each}
		</div>
	{/each}
</div>
