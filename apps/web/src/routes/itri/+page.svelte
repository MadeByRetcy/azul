<script lang="ts">
	import { goto } from "$app/navigation";
	import { fly } from "svelte/transition"
</script>

<div in:fly={{ y: 15 }} class="flex w-fit items-center rounded-4xl p-8 self-center flex-col border border-slate-300">
    <span class="icon-[charm--north-star] text-3xl text-blue-500">
    </span>
    <h1 class="text-3xl">Azul <b>Itri</b></h1>
    <p class="text-slate-400">Get the best of Moroccan icons</p>

    <div class="flex items-end font-bold my-4">
        <h1 class="text-5xl me-1">35</h1>
        <h2 class="text-slate-500 flex items-center"><span class="az-ico:dirham text-2xl"></span><span>/mo</span></h2>
    </div>

    <ul class="self-start">
        <li class="flex items-center"><span class="text-sky-500 az-ico:appearance me-2 text-lg"></span> Get exclusive icons</li>
        <li class="flex items-center"><span class="text-sky-500 az-ico:riad-join me-2 text-lg"></span> Access bold & duotone icons</li>
        <li class="flex items-center"><span class="text-sky-500 az-ico:download me-2 text-lg"></span> Get latest updates</li>
        <li class="flex items-center"><span class="text-sky-500 az-ico:content-create me-2 text-lg"></span> Suggest new icons</li>
        <li class="flex items-center"><span class="text-sky-500 az-ico:donation me-2 text-lg"></span> Support us</li>
    </ul>
    <button onclick={() => alert("Coming in V2")} class="bg-blue-500 mt-6 py-3 text-lg w-full flex items-center justify-center text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
        <span class="icon-[charm--arrow-right] text-sky-200 me-1"></span>
        <span>Get Started</span>
    </button>
</div>