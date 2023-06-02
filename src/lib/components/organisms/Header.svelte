<script>
	import Logo from '$lib/components/atoms/Logo.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';

	export let animated = true;
	export let showBackground = false;
	export let showFullLogo = true;
</script>

<header class:has-background={showBackground}>
	<nav class="container">
		<a class="logo" href="/" aria-label="Site logo">
			<Logo {animated} {showFullLogo} />
		</a>
		<a href="/resume">Resume</a>
		<div class="links">
			<ThemeToggle />
		</div>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: relative;
		padding: 30px 0;

		@include for-phone-only {
			padding: 20px 0;
		}

		&.has-background {
			background: linear-gradient(
				60deg,
				var(--color--waves-start) 0%,
				var(--color--waves-end) 100%
			);
		}

		.container {
			display: flex;
			align-items: center;
			gap: 30px;

			@include for-phone-only {
				.links {
					a {
						display: none;
					}
				}
			}
		}

		.logo {
			height: 44px;
			flex: 1;
		}

		a {
			color: var(--color--text);
		}
	}
</style>
