
<script lang="ts">
	import { fly } from "svelte/transition"

    let status: string | null = $state(null)
</script>

<div>
    
</div>

<div in:fly={{ y: 15 }} class="mx-30 z-0 flex flex-1 pb-6 pt-6 flex-col items-center justify-center">

    <h1 class="text-3xl text-center font-bold">
        Have questions?
        We got answers!
    </h1>
    <p class="text-lg text-slate-400 mt-2">Everything you need about Azul and Azul Itri subscription.</p>

</div>

<div class="mx-30">
    <h1 class="flex items-center text-2xl font-semibold mb-3">
        <span class="az-ico:download text-3xl me-2 text-blue-500"></span>
        <span>Get started</span>
    </h1>
    <p>To get started with Azul, add the following script to your main HTML file:</p>

    <div class="bg-sky-50 flex items-center justify-between rounded-2xl p-4 my-4">
        <code class="block">
            <span class="text-slate-400">&lt;</span><span class="text-blue-500">script</span> defer src<span class="text-slate-400">=</span><span class="text-sky-500">"https://azulflawn.msharf.in/script/main.js"</span><span class="text-slate-400">&gt;</span><span class="text-slate-400">&lt;/</span><span class="text-blue-500">script</span><span class="text-slate-400">&gt;</span>
        </code>
        <button onclick={() => {navigator.clipboard.writeText("<script defer src='https://azulflawn.msharf.in/script/main.js'></script>"); status = "copied"}} class="px-3 py-1 flex items-center border-2 border-blue-400 rounded-lg">
            <span class="icon-[charm--link-external] me-2 text-sky-500"></span>
            <span>{!status ? "Copy" : "Copied!"}</span>
        </button>
    </div>

    <p>To use the icons from the Registry, use the following structure:</p>

    <div class="bg-sky-50 flex items-center justify-between rounded-2xl p-5 mt-4">
        <code class="block">
            <span class="text-slate-400">&lt;</span><span class="text-blue-500">span</span> class<span class="text-slate-400">=</span><span class="text-sky-500">"az-ico:icon-name [...]"</span><span class="text-slate-400">&gt;</span><span class="text-slate-400">&lt;/</span><span class="text-blue-500">span</span><span class="text-slate-400">&gt;</span>
        </code>
    </div>
</div>