<script lang="ts">
	import { fly } from "svelte/transition"
</script>

<div in:fly={{ y: 15 }} class="flex w-fit items-center rounded-4xl p-8 self-center flex-col border-4 border-sky-200">
    <span class="icon-[charm--north-star] text-3xl text-blue-500">
    </span>
    <h1 class="text-3xl">Azul <b>Itri</b></h1>
    <p class="text-slate-400">Get the best of Moroccan icons</p>

    <div class="flex items-end font-bold my-4">
        <h1 class="text-5xl me-1">25</h1>
        <h2 class="text-slate-500 flex items-center"><span class="az-ico:dirham text-2xl"></span><span>/mo</span></h2>
    </div>

    <ul class="self-start">
        <li class="flex items-center"><span class="text-slate-400 icon-[charm--star] me-1"></span> Get exclusive icons</li>
        <li class="flex items-center"><span class="text-slate-400 icon-[charm--file-symlink] me-1"></span> Access bold & duotone icons</li>
        <li class="flex items-center"><span class="text-slate-400 icon-[charm--chip] me-1"></span> Get latest updates</li>
        <li class="flex items-center"><span class="text-slate-400 icon-[charm--clover] me-1"></span> Suggest new icons</li>
        <li class="flex items-center"><span class="text-slate-400 icon-[charm--coffee] me-1"></span> Support us</li>
    </ul>
    <button class="bg-blue-500 mt-6 py-3 text-lg w-full flex items-center justify-center text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
        <!-- <span class="icon-[charm--arrow-right] text-sky-200 me-1"></span> -->
        <span>Coming soon...</span>
    </button>
</div>