<script>
	export let animated = true;
	export let showFullLogo = true;
	import Logo from '../logo.svelte'
</script>

<div class="logo" class:animated>
	<Logo />
	{#if showFullLogo}
		<svg
			id="logo-name"
			width="723.84009"
			height="86.720268"
			viewBox="0 0 723.84009 86.720269"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<text
				xml:space="preserve"
				id="name"
				transform="translate(-278.77228,-206.83728)"
				><tspan x="275.57227" y="292.17088" id="tspan1319"
					><tspan
						style="font-size:106.667px;font-family:YoungSerif;"
						id="tspan1317">Dimitrian</tspan
					></tspan
				></text
			>
		</svg>
	{/if}
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.logo {
		width: auto;
		height: 100%;

		display: flex;
		gap: 16px;
		align-items: center;

		@include for-phone-only {
			gap: 8px;
		}

		#logo-icon {
			width: auto;
			height: 100%;

			#icon {
				transition: all 0.2s ease-in-out;

				fill: var(--color--text-shade);
				stroke: var(--color--text-shade);

				#darker {
					transition: all 0.2s ease-in-out;

					fill: var(--color--text);
					stroke: var(--color--text);
				}

				path {
					fill: inherit;
					stroke: inherit;
				}
			}

			#icon-overlay {
				transition: all 0.2s ease-in-out;
				opacity: 0;
			}
		}

		#logo-name {
			width: auto;
			height: 100%;
			max-height: 28px;

			#name {
				transition: all 0.2s ease-in-out;
				fill: var(--color--text);
			}
		}

		&:hover {
			#logo-icon {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
				#icon {
					opacity: 0;
				}
				#icon-overlay {
					opacity: 1;
				}
			}
			#logo-name {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	@media screen and (prefers-reduced-motion: no-preference) {
		.animated {
			#icon {
				> path {
					--text-color: var(--color--text-shade);
					stroke-width: 2;
					animation: svg-text-stroke 3s;
				}

				#darker {
					> path {
						--text-color: var(--color--text);
						stroke-width: 2;
						animation: svg-text-stroke 3s;
					}
				}
			}

			#name {
				animation: svg-text-stroke 3s;
				stroke-width: 2;
				--text-color: var(--color--text);
			}
		}
	}
</style>
