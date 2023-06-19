<script lang="ts">
	import type { Project } from '$lib/utils/types';
	import type { Semester2 } from '$lib/utils/types';
	import ProjectCard from '$lib/components/molecules/ProjectCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';

	export let semesters2: Project[];
</script>

<ContentSection
	id="projects"
	title="Semester 2"
	description="I like to build some small projects when learning. Technologies are varied and so are their purposes. Most of them are open source!"
>
	<div class="projects-container">
		<div class="three-group-grid">
			{#each semesters2 as semester}
				<ProjectCard
					name={semester.name}
					description={semester.description}
					image={semester.image}
					link={semester.link}
					sourceCode={semester.sourceCode}
					blogPostLink={semester.blogPostLink}
					tags={semester.tags}
				/>
			{/each}
		</div>
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.projects-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}

	.three-group-grid {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-gap: 20px;

		@media (max-width: 1085px) {
			grid-template-columns: 1fr 1fr;
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
		}

		// Select every 3 elements, starting from position 2
		// And make it take up 2 rows
		@media (min-width: 1086px) {
			> :global(:nth-child(3n + 2)) {
				grid-row: span 2;
			}
		}

		// Select every 3 elements, starting from position 1
		// And make it take up 2 columns
		> :global(:nth-child(3n + 1)) {
			@media (max-width: 1085px) {
				grid-column: span 2;
			}

			@include for-tablet-portrait-down {
				grid-template-columns: 1fr;
				grid-column: unset;
			}
		}
	}
</style>
