<script lang="ts">
	import { fly } from "svelte/transition"
</script>


<div in:fly={{ y: 15 }} class="mx-30 z-0 flex flex-1 pb-24 pt-12 flex-col items-center justify-center">

    <div class="text-sm font-semibold tracking-widest flex items-center px-4 py-1 border-2 rounded-full border-sky-200 mb-3 text-blue-500">
        <span class="me-2 icon-[charm--conical-flask] text-sky-500"></span>
        <span>NOW IN BETA</span>
    </div>
    <h1 class="text-4xl text-center font-bold">
        Empowering The Moroccan <br>
        Digital Future
    </h1>
    <p class="text-lg text-slate-400 mb-5 mt-2">Enjoy a selection of high quality, modern icons inspired by Moroccan culture.</p>
    
    <!-- <div class="flex items-center border-2 rounded-full border-slate-200">
        <input 
            type="text"
            class="py-3 px-6 rounded-s-full placeholder:text-slate-400"
            placeholder="Get started here..."
        >
        <kbd class="px-1 mx-2 rounded-lg border-2 font-sans font-medium border-slate-200 text-slate-400">
            Alt

            K
        </kbd>
        <button aria-label="Go!" class="text-2xl rounded-full m-1 p-2 bg-blue-600 text-sky-200 flex items-center justify-center">
            <span class="icon-[charm--search]"></span>
        </button>
    </div> -->

</div>

<div in:fly={{ y: 15 }} class="mx-30 flex items-center justify-center pb-12">
    <h2 class="uppercase font-semibold tracking-widest text-slate-400 me-4">Used by people at</h2>

    <img src="/msharfin.webp" alt="Msharfin Logo" title="https://msharf.in - Msharfin" class="h-6">
</div>

<div in:fly={{ y: 15 }} class="flex mx-30">
    <div class="w-1/3 p-8 rounded-4xl bg-blue-100 me-3">
        <div class="bg-blue-600 rounded-xl flex items-center justify-center size-12 mb-3">
            <span class="az-ico:riads text-blue-100 text-xl"></span>
        </div>
        <h2 class="text-xl text-blue-600 font-semibold mb-2">Universal</h2>
        <p class="text-lg text-blue-500">Icons that are framework and environment agnostic, you only need a script tag and you're good to go!</p>
    </div>
    <div class="w-1/3 p-8 rounded-4xl bg-sky-100 me-3">
        <div class="bg-sky-600 rounded-xl flex items-center justify-center size-12 mb-3">
            <span class="az-ico:appearance text-blue-100 text-xl"></span>
        </div>
        <h2 class="text-xl font-semibold mb-2 text-sky-600">Sleek & Modern</h2>
        <p class="text-lg text-sky-500">Designed with the latest design trends in mind, Azul icons fit perfectly in any modern application.</p>
    </div>
    <div class="w-1/3 p-8 rounded-4xl bg-cyan-100/50">
        <div class="bg-sky-500 rounded-xl flex items-center justify-center size-12 mb-3">
            <span class="az-ico:flag-morocco text-blue-100 text-xl"></span>
        </div>
        <h2 class="text-xl font-semibold mb-2 text-sky-500">Proudly Moroccan</h2>
        <p class="text-lg text-sky-400">Icons inspired by the rich cultural heritage of Morocco, bringing traditional motifs into the digital realm.</p>
    </div>
</div>