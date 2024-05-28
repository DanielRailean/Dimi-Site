<script>
	import { siteTitle } from '$lib/config'
</script>


<footer class="mt-5 p-4 bg-gray-100 p-6 dark:bg-stone-800 text-[overpass] relative bottom-0">
    <div class="">
        <p class="text-gray-500 text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://github.com/ddlele" class="hover:underline">{siteTitle}</a>. All Rights Reserved.
        </p>
    </div>
</footer>

<style lang="postcss">
    p {
        @apply text-sm;
    }
</style>