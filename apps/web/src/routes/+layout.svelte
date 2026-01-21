<script lang="ts">
	import { fade } from 'svelte/transition';
	import './layout.css';
	import { navigating, page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/icon.webp" />
	<title>Azul | Moroccan Icons for the Digital Age</title>

	<meta property="og:title" content="Azul | Moroccan Icons for the Digital Age." />
	<meta
		property="og:description"
		content="Enjoy a selection of high quality, modern icons inspired by Moroccan culture."
	/>
	<meta property="og:image" content="/icon.webp" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://azul.msharf.in" />

	<script defer src="{page.url.origin}/script/main.js"></script>
	<link rel="stylesheet" href="{page.url.origin}/script/main.css">
</svelte:head>

<header class="relative md:mx-30 md:py-10 mx-8 py-8 p flex items-center justify-between">
	{#if navigating.complete}
		<span
			transition:fade={{ duration: 100 }}
			class="dark:bg-gray/75 fixed top-0 left-0 z-100 flex h-1 w-full overflow-hidden backdrop-blur-lg"
		>
			<span class="moving h-1.5 rounded-b-full bg-sky-500"></span>
		</span>
	{/if}
	<a href="/">
		<img src="/icon.webp" alt="Azul Logo" class="md:size-10 size-8" />
	</a>
	<div class="flex md:text-lg font-medium">
		<a href="/registry" class="md:me-8 me-4 flex items-center">
			<span class="me-1 icon-[charm--layout-dashboard] text-blue-500"></span>
			<span>Registry</span>
		</a>
		<a href="/docs" class="md:me-8 me-4 flex items-center">
			<span class="me-1 icon-[charm--book-open] text-blue-500"></span>
			<span>Docs</span>
		</a>
		<a href="https://github.com/MadeByRetcy/azul" class="flex items-center">
			<span class="icon-[charm--github] text-blue-500 me-1"></span>
			<span>Github</span>
		</a>
		<!-- <a
			href="/itri"
			class="flex items-center rounded-2xl bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
		>
			<span class="me-1 icon-[charm--north-star] text-sky-200"></span>
			<span>Go <span class="font-semibold">Itri</span></span>
		</a> -->
	</div>
</header>

<section class="flex flex-1 flex-col">
	{@render children()}
</section>

<footer class="md:mx-30 mx-8 flex items-center justify-between py-10">
	<div class="md:text-sm text-xs text-slate-400">
		<img src="/author.webp" alt="Made by Retcy Logo" class="md:h-4 h-3" />
		<p>&copy; {new Date().getFullYear()}, All rights reserved</p>
	</div>

	<img src="/morocco.webp" class="md:h-10 h-6" alt="Made in Morocco" />
</footer>

<style>
	@keyframes move {
		0% {
			transform: translateX(-100%);
			width: 0px;
		}
		50% {
			width: 50%;
			transform: translateX(400%);
		}
		100% {
			transform: translateX(-200%);
			width: 25%;
		}
	}

	.moving {
		animation: move 4s linear infinite;
	}
</style>
