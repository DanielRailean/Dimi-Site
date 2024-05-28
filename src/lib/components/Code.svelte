<script>
	import { onMount } from 'svelte';
    export let lang
    export let file

    onMount(()=> {
        // console.log(lang)
        // console.log(file)
    })

</script>

<div class="bg-gray-50 dark:bg-stone-900 rounded-lg code-wrap shadow my-5">
    <div class="flex flex-row justify-between border-b-gray-300 dark:border-b-stone-700  border-b">
        <p class="px-3 py-[3px]">{lang}</p>
        <p class="px-3 py-[3px]">{file}</p>
    </div>
    <slot/>
</div>