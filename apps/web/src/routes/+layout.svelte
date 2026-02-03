<script lang="ts">
	import "./layout.css"

	import { fade } from "svelte/transition"

	import { navigating, page } from "$app/state"
	import { goto } from "$app/navigation"

	let { children, data } = $props()
	let { supabase } = $derived(data)
	
	let wave: boolean = $state(false)

	setInterval(() => {
		// There is a 10% chance you'd get a waving hand every 4 seconds, and 1% chance you'd get 2 waves in a row
		if (Math.random() < 0.1) {
			wave = true
			setTimeout(() => (wave = false), 500)
		}
	}, 4000)
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
	<link rel="stylesheet" href="{page.url.origin}/script/main.css" />
</svelte:head>

<header class="relative mx-8 flex items-center justify-between py-8 md:mx-30 {page.url.pathname.startsWith("/itri/checkout") ? "md:py-4" : "md:py-10"}">
	{#if navigating.complete}
		<span
			transition:fade={{ duration: 100 }}
			class="dark:bg-gray/75 fixed top-0 left-0 z-100 flex h-1 w-full overflow-hidden backdrop-blur-lg"
		>
			<span class="moving h-1.5 rounded-b-full bg-sky-500"></span>
		</span>
	{/if}
	<a href="/">
		<img src="/icon.webp" alt="Azul Logo" class="size-8 md:size-10 {wave ? 'waving' : null}" />
	</a>
	{#if page.url.pathname.startsWith("/itri/checkout")}
		<button onclick={
			async () => {
				await supabase.auth.signOut()
				goto("/")
			}
		} class="border-orange-500 border py-2 px-4 rounded-xl flex items-center justify-center mb-3 text-orange-500">
			<span class="me-2 az-ico:riad-leave"></span>
			<span>Sign out</span>
		</button>
	{:else}
		<div class="flex font-medium md:text-lg">
			<a href="/registry" class="me-4 flex items-center md:me-8">
				<span class="me-1 icon-[charm--layout-dashboard] text-blue-500"></span>
				<span>Registry</span>
			</a>
			<a href="/docs" class="flex items-center">
				<span class="me-1 icon-[charm--book-open] text-blue-500"></span>
				<span class="hidden md:inline">Docs</span>
			</a>
			<span class="mx-4 md:mx-8 text-slate-300">|</span>
			<a href="https://discord.gg/sWpCeBt5jF" aria-label="Discord Server" title="Join our Discord server!" class="flex items-center">
				<span class="icon-[mingcute--discord-fill] text-2xl text-blue-500"></span>
			</a>
		</div>
	{/if}

</header>

<section class="flex flex-1 flex-col">
	{@render children()}
</section>

<footer class="mx-8 flex items-center justify-between {page.url.pathname.startsWith("/itri/checkout") ? "pb-10" : "py-10"} md:mx-30">
	<div class="text-xs text-slate-400 md:text-sm">
		<img src="/author.webp" alt="Made by Retcy Logo" class="h-3 md:h-4" />
		<p>&copy; {new Date().getFullYear()}, All rights reserved</p>
		<p>
			<a href="/docs/privacy" class="underline">Privacy Policy</a>
			·
			<a href="/docs/license" class="underline">License Agreement</a>
		</p>
	</div>

	<img src="/morocco.webp" class="h-6 md:h-10" alt="Made in Morocco" />
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

	@keyframes wave {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(-25deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.moving {
		animation: move 4s linear infinite;
	}

	.waving {
		animation: wave 500ms ease-in-out;
	}
</style>
