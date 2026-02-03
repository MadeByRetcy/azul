<script lang="ts">
	import { page } from "$app/state"
	import { fly } from "svelte/transition"

    let status: number | null = $state(null)

    const textToCopy = `\n
        \<script defer src="https://azul.msharf.in/script/main.js"\>\</script\>
        <link rel="stylesheet" href="https://azul.msharf.in/script/main.css">\n
    `

    // Just for better UX
    $effect(() => {setTimeout(() => status = null, 5000)})
</script>


<div in:fly={{ y: 15 }} class="md:mx-30 mx-8 mt-4 md:mt-0">
    <h1 class="flex items-center text-2xl font-semibold mb-3">
        <span class="az-ico:download text-3xl me-2 text-blue-500"></span>
        <span>Get started</span>
    </h1>
    <p>To get started with Azul, add the following lines to your main HTML file:</p>

    <div class="bg-sky-50 flex items-center justify-between rounded-2xl p-4 my-4">
        <code class="block">
            <span class="text-slate-400">&lt;</span><span class="text-blue-500">script</span> defer src<span class="text-slate-400">=</span><span class="text-sky-500">"https://azul.msharf.in/script/main.js"</span><span class="text-slate-400">&gt;</span><span class="text-slate-400">&lt;/</span><span class="text-blue-500">script</span><span class="text-slate-400">&gt;</span>
            <br>
            <span class="text-slate-400">&lt;</span><span class="text-blue-500">link</span> rel<span class="text-slate-400">=</span><span class="text-sky-500">"stylesheet"</span> href<span class="text-slate-400">=</span><span class="text-sky-500">"https://azul.msharf.in/script/main.css"</span><span class="text-slate-400">&gt;</span>
        </code>
        <button onclick={() => {
            navigator.clipboard.writeText(textToCopy)
            status = 1
        }} class="px-3 py-1 flex items-center border-2 border-blue-300 rounded-lg">
            <span class="icon-[charm--copy] me-2 text-sky-500"></span>
            <span class="text-blue-600 font-medium">{status === 1 ? "Copied!" : "Copy"}</span>
        </button>
    </div>

    <p>To use the icons from the Registry, use the following structure:</p>

    <div class="bg-sky-50 flex items-center justify-between rounded-2xl p-5 mt-4">
        <code class="block">
            <span class="text-slate-400">&lt;</span><span class="text-blue-600">span</span> class<span class="text-slate-400">=</span><span class={page.url.searchParams.get("ic")? "text-blue-500 animate-pulse font-semibold" :"text-sky-500"}>"az-ico:{page.url.searchParams.get("ic") ? page.url.searchParams.get("ic"): "icon-name [...]"}"</span><span class="text-slate-400">&gt;</span><span class="text-slate-400">&lt;/</span><span class="text-blue-500">span</span><span class="text-slate-400">&gt;</span>
        </code>
        {#if page.url.searchParams.get("ic")}
            <button onclick={() => {
                navigator.clipboard.writeText(`<span class="az-ico:${page.url.searchParams.get("ic")}"></span>`)
                status = 2
            }} aria-label="Copy" class="px-3 py-1 flex items-center border-2 border-blue-300 rounded-lg">
                <span class="icon-[charm--copy] me-2 text-sky-500"></span>
                <span class="text-blue-600 font-medium">{status === 2 ? "Copied!" : "Copy"}</span>
            </button>
        {/if}
    </div>

    <h1 class="flex items-center text-2xl font-semibold mb-3 mt-6">
        <span class="az-ico:riad-error text-3xl me-2 text-blue-500"></span>
        <span>Have issues?</span>
    </h1>

    <p>If you encounter any issues or have questions, feel free to reach out to us on our <a class="text-blue-600 underline" href="https://github.com/madebyretcy/azul/issues">GitHub</a> or <a class="text-blue-600 underline" href="https://discord.gg/sWpCeBt5jF">Discord server</a>.</p>
</div>