<script lang="ts">
	import { fly } from "svelte/transition"

    const { data } = $props()
    const { session } = $derived(data)
</script>


<div in:fly={{ y: 15 }} class="gradientBlue md:px-30 px-8 z-0 flex flex-1 md:pb-18 pb-9 pt-10 flex-col">

    <div class="flex flex-col items-center justify-center mb-24">
        <div class="text-[0.9rem] w-fit font-bold font-mono tracking-widest flex items-center px-3 py-0.5 rounded-full bg-amber-100 mb-2 text-amber-500">
            <span class="me-2 icon-[charm--conical-flask] text-amber-500"></span>
            <span>BETA</span>
        </div>
        <h1 class="md:text-4xl text-3xl font-bold text-center">
            Make Your Apps <br>
            Feel More Familiar
        </h1>
        <p class="md:text-lg text-slate-400 mb-4 mt-1 text-center">With <b>Azul</b>, The Modern & Culturally Inspired Icon Pack.</p>
        <div class="flex items-center orderIcons">
            <span class="az-ico:content-repost"></span>
            <span class="az-ico:riads"></span>
            <span class="az-ico:commerce-bag"></span>
            <a
                href={session ? "/itri/dashboard" : "/itri"}
                class="flex items-center rounded-full hover:*:first:animate-spin bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
                <span class="me-2 icon-[charm--north-star] text-sky-200"></span>
                <span class="text-nowrap">
                    {#if session?.access_token}
                        <span class="font-semibold">Itri</span> Dashboard
                    {:else}
                        Get more with <span class="font-semibold">Itri</span>
                    {/if}
                </span>
            </a> 
            <span class="az-ico:home"></span>
            <span class="az-ico:lang-translate"></span>
            <span class="az-ico:content-edit"></span>       
        </div>        
        <p class="text-sm font-medium flex items-center text-slate-500 mt-2">
            <a href="/registry" class="flex items-center me-1"><span class="az-ico:riad-join me-1"></span> <span>Use free icons</span></a> · <a href="https://github.com/MadeByRetcy/azul" class="underline flex items-center ms-1"><span class="icon-[bi--github] me-1.5"></span> <span>Contribute</span></a> 
        </p>
    </div>

    <div in:fly={{ y: 15 }} class="flex flex-col md:flex-row md:flex-none items-center justify-center text-sky-600/50">
        <h2 class="uppercase text-sm font-semibold tracking-widest">Used in projects like</h2>
        <img src="/msharfin.webp" alt="Msharfin Logo" title="https://msharf.in - Msharfin" class="h-4 md:mx-3 md:my-0 my-1.5 brightness-10">
        <h2 class="uppercase text-sm font-semibold tracking-widest">and Yours</h2>
    </div>
</div>

<div in:fly={{ y: 15 }} class="bg-linear-to-b from-[#d6f5ff] to-transparent px-6">
    <div class="bg-blue-500 md:px-24 px-8 md:py-14 py-8 flex flex-col items-center rounded-4xl">
        <h1 class="font-semibold items-center text-center flex-col text-white md:text-2xl text-lg md:mb-12 mb-6 flex">
            <span>Empowering The Moroccan Digital Transition</span>
            <span class="text-sky-300 text-3xl mt-2 animate-bounce icon-[mingcute--down-line]"></span>
        </h1>

        <div class="flex not-md:flex-col">
            <div class="md:w-1/3 p-8 rounded-xl rounded-t-4xl md:rounded-s-4xl md:rounded-tr-xl bg-blue-100 md:me-3 md:mt-0 mt-3">
                <div class="bg-blue-500 rounded-xl flex items-center justify-center size-12 mb-3">
                    <span class="az-ico:riads text-blue-100 text-xl"></span>
                </div>
                <h2 class="text-xl text-blue-500 font-semibold mb-2">Universal</h2>
                <p class="text-lg text-blue-400">Icons that are framework and environment agnostic, you only need a script tag and you're good to go!</p>
            </div>
            <div class="md:w-1/3 p-8 rounded-xl bg-sky-50 md:me-3 md:mt-0 mt-3">
                <div class="bg-sky-500 rounded-xl flex items-center justify-center size-12 mb-3">
                    <span class="az-ico:appearance text-blue-100 text-xl"></span>
                </div>
                <h2 class="text-xl font-semibold mb-2 text-sky-500 md:mt-0 mt-3">Sleek & Modern</h2>
                <p class="text-lg text-sky-500">Designed with the latest design trends in mind, Azul icons fit perfectly in any modern application.</p>
            </div>
            <div class="md:w-1/3 p-8 rounded-xl md:rounded-e-4xl rounded-b-4xl md:rounded-bl-xl  bg-white md:mt-0 mt-3">
                <div class="bg-sky-500 rounded-xl flex items-center justify-center size-12 mb-3">
                    <span class="az-ico:flag-morocco text-blue-100 text-xl"></span>
                </div>
                <h2 class="text-xl font-semibold mb-2 text-sky-500">Proudly Moroccan</h2>
                <p class="text-lg text-sky-400">Icons inspired by the rich cultural heritage of Morocco, bringing traditional motifs into the digital realm.</p>
            </div>  
        </div>
    </div>
</div>

<style>

@import "tailwindcss";

.orderIcons > span {
    font-size: 1.65rem;
    &:nth-child(1) {
        color: theme(--color-sky-200);
        margin-inline-end: 0.25rem;
        font-size: 1rem;
    }
    &:nth-child(2) {
        color: theme(--color-blue-300);
        margin-inline-end: 0.3rem;
        font-size: 1.5rem;
    }
    &:nth-child(3) {
        color: theme(--color-blue-400);
        margin-inline-end: 0.5rem;
    }
    &:nth-child(5) {
        color: theme(--color-blue-400);
        margin-inline-start: 0.5rem;
    }
    &:nth-child(6) {
        color: theme(--color-blue-300);
        margin-inline-start: 0.3rem;
        font-size: 1.5rem;
    }
    &:nth-child(7) {
        color: theme(--color-sky-200);
        margin-inline-start: 0.25rem;
        font-size: 1rem;
    }
}

.gradientBlue {
    background: #ffffff;
    background: radial-gradient(circle at 50% -100%, transparent 70%, #d6f5ff 100%);
}

</style>