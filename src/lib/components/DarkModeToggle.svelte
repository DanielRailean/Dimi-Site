<script>
    import { onMount } from "svelte";
    import Icons from "./icons/Icons.svelte";

    let value = -1;

    const handleDark = () => {
        if (!localStorage.theme) {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
                value = 1
			} else {
				document.documentElement.classList.remove("dark");
                value = 0
            }
		} else {
			if (localStorage.theme === "dark") {
				document.documentElement.classList.add("dark");
                value = 1
			} else {
				document.documentElement.classList.remove("dark");
                value = 0
			}
		}
    };

    const handleClick = () => {
        value++;
        if (value > 1) {
            value = 0;
        }
        if (value == 0) {
            localStorage.theme = "light";
        }
        if (value == 1) {
            localStorage.theme = "dark";
        }
        handleDark();
    };

    onMount(() => {
        handleDark()
        setInterval(() => {
            handleDark(true);
        }, 500);
    });
</script>

<div class="h-10">
    {#if value === 0}
        <Icons icon="moon" title="turn on dark mode" size="10" filled={true} extraClass="hover:fill-none rotate-[-15deg] stroke-[3px]" on:click={handleClick}/>
    {:else if value === 1}
        <Icons icon="sun" title="turn off dark mode" size="10" extraClass="stroke-2 hover:stroke-[3px]" on:click={handleClick}/>
    {/if}
</div>
