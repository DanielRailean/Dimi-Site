<script>
    import { onMount } from "svelte";

    export let src = "";
    export let alt;
    export let width;
    export let height;
    export let classes;
    export let pictureClasses;
    export let id;
    export let loading = "eager"

    const supported = ["png", "jpg", "jpeg"]

    const getAvifFormat = (file) => `${file.substring(0,file.length-3)}avif`
    const getWebpFormat = (file) => `${file.substring(0,file.length-3)}webp`
    onMount(()=> {
        // console.log(supported.includes(src.split(".").at(-1) ?? ""))
    })
</script>

<div class="{pictureClasses}">
    {#if supported.includes(src.split(".").at(-1) ?? "")}
    <picture>
        <source srcset={getAvifFormat(src)} type="image/avif" />
        <source srcset={getWebpFormat(src)} type="image/webp" />
        <img class="{classes}" src={src} alt={alt} width={width} height={height} loading="{loading}" decoding="async"/>
    </picture>
    {:else}
    <img class="{classes}" src={src} alt={alt} width={width} height={height} loading="{loading}" decoding="async"/>
    {/if}
</div>