<script lang="ts">
	import { fade } from 'svelte/transition';
	import './layout.css';
	import { navigating, page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/icon.webp" />
	<title>Azul | Moroccan Icons for the Digital Age.</title>

	<!-- Preview Embeds  -->
	<meta property="og:title" content="Azul | Moroccan Icons for the Digital Age." />
	<meta property="og:description" content="Enjoy a selection of high quality, modern icons inspired by Moroccan culture." />
	<meta property="og:image" content="/icon.webp" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://azul.msharf.in" />

	<script defer src="{page.url.origin}/script/main.js"></script>
</svelte:head>

<header class="mx-12 relative px-18 py-10 flex items-center justify-between">
	{#if navigating.complete}
		<span
			transition:fade={{ duration: 100 }}
			class="z-100 flex overflow-hidden dark:bg-gray/75 fixed top-0 left-0 backdrop-blur-lg h-1 w-full"
		>
			<span
				class="moving bg-sky-500 rounded-b-full h-1.5"
			></span>
		</span>
	{/if}
	<a href="/">	
		<img src="/icon.webp" alt="Azul Logo" class="size-10">
	</a>
	<div class="flex text-lg font-medium">
		<a href="/registry" class="me-8 flex items-center">
			<span class="icon-[charm--layout-dashboard] text-blue-500 me-1"></span>
			<span>Registry</span>
		</a>
		<a href="/docs" class="me-8 flex items-center">
			<span class="icon-[charm--book-open] text-blue-500 me-1"></span>
			<span>Docs</span>
		</a>		
		<!-- <a href="#" class="me-8 flex items-center">
			<span class="icon-[charm--github] text-blue-500 me-1"></span>
			<span>Github</span>
		</a> -->
		<a href="/itri" class="bg-blue-500 hover:bg-blue-600 transition-colors text-white flex items-center px-4 py-2 rounded-2xl">
			<span class="icon-[charm--north-star] text-sky-200 me-1"></span>
			<span>Go <span class="font-semibold">Itri</span></span>
		</a>
	</div>
</header>

<section class="flex-1 flex flex-col">
	{@render children()}
</section>

<footer class="mx-12 px-18 py-10 flex items-center justify-between">
	<div class="text-slate-400 text-sm">
		<img src="/author.webp" alt="Made by Retcy Logo" class="h-4">
		<p>&copy; {new Date().getFullYear()}, All rights reserved</p>
	</div>

	<img src="/morocco.webp" class="h-10" alt="Made in Morocco">
</footer>

<style>
	@keyframes move {
		0% {
			transform: translateX(-100%);
			width: 0px;
		}
		50% {
			width:50%;
			transform: translateX(400%)
		}
		100% {
			transform: translateX(-200%);
			width:25%;
		}
	}

	.moving {
		animation: move 4s linear infinite;
	}
</style>