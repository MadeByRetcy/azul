
<script lang="ts">
	import { goto } from "$app/navigation"
	import { fly } from "svelte/transition"

    const { data } = $props()

    let viewMode: string | null = $state("grid")

    let chosenIcon: number | null = $state(null)
    let showIcon: boolean = $state(true)
</script>

<div class="md:px-30 px-8">
    <div class="flex items-center justify-between text-2xl">
        <h1 class="flex items-center md:mb-0 mb-3">
            <span class="icon-[charm--layout-dashboard] me-2 text-blue-600"></span>
            <span class="font-semibold">Icon Registry</span>
        </h1>
        <div class="flex md:text-2xl text-xl items-center text-slate-500 me-3">
            <button onclick={() => viewMode = "grid"} aria-label="Grid View" class="me-2 p-4 transition-all border-b-2 {viewMode === "grid" ? "border-b-blue-600 text-sky-500" : "border-b-transparent"}">
                <span class="icon-[charm--layout-grid]"></span>
            </button>
            <button onclick={() => viewMode = "rows"} aria-label="Rows View" class="p-4 transition-all border-b-2 {viewMode === "rows" ? "border-b-blue-600 text-sky-500" : "border-b-transparent"}">
                <span class="icon-[charm--layout-rows]"></span>       
            </button>
        </div>
    </div>
    <div in:fly={{ y: 15 }} class="flex md:flex-row flex-col items-start w-full">
        <div class="md:w-1/3 w-full flex flex-col md:pe-8 mb-6 md:sticky top-5">
            {#if typeof chosenIcon === "number"}
                <div class="w-full h-42 flex items-center justify-center bg-sky-50 rounded-2xl">
                    {#if showIcon}
                        <span 
                            class="text-7xl text-blue-700 az-ico:{data.lineIcons[chosenIcon].name}"
                        ></span>
                    {/if}
                </div>

                <div class="flex items-center justify-between mt-2 select-none">
                    <h1 class="text-lg font-semibold flex items-center">
                        <span class="az-ico:content me-2 text-blue-500"></span>
                        <span>Icon Name</span>
                    </h1>

                    <p class="font-medium font-mono text-slate-500">
                        {data.lineIcons[chosenIcon].name}
                    </p>
                </div>

                <div class="bg-sky-50 flex flex-col text-xs rounded-xl p-3 my-3">
                    <div class="flex items-center justify-between mb-2">
                        <h1 class="flex items-center font-medium select-none text-blue-400">
                            <span class="icon-[charm--code] me-2"></span>
                            <span>Code snippet - HTML</span>
                        </h1>
                        <button aria-label="Copy code" title="Copy code" onclick={() => {
                            navigator.clipboard.writeText(`<span class="az-ico:${data.lineIcons[chosenIcon ?? 0].name}"></span>`)
                        }}>
                            <span class="icon-[charm--copy] text-blue-400"></span>
                        </button>
                    </div>
                    <code class="block text-nowrap w-full">
                        <span class="text-slate-400">&lt;</span><span class="text-blue-500">span</span> class<span class="text-slate-400">=</span><span class="text-sky-500">"az-ico:{data.lineIcons[chosenIcon].name}"</span><span class="text-slate-400">&gt;</span><span class="text-slate-400">&lt;/</span><span class="text-blue-500">span</span><span class="text-slate-400">&gt;</span>
                    </code>
                </div>
                <button onclick={() => goto(`/docs?ic=${data.lineIcons[chosenIcon ?? 0].name}`)} class="flex items-center justify-center w-full font-medium text-white py-2 bg-blue-500 active:bg-blue-600 transition-all rounded-xl">
                    <span class="icon-[charm--plus] text-sky-200 me-2"></span>
                    <span>
                        Use icon
                    </span>
                </button>
                <p class="text-sm font-medium flex items-center justify-center text-slate-500 mt-2">
                    <a href="/itri" class="flex items-center me-1"><span class="icon-[charm--north-star] me-1"></span> <span>Subscribe to Itri</span></a> · <a href="https://github.com/MadeByRetcy/azul" class="underline flex items-center ms-1"><span class="icon-[bi--github] me-1.5"></span> <span>Contribute to Azul</span></a> 
                </p>
            {:else}
                <div class="w-full h-42 flex items-center justify-center bg-sky-50 rounded-2xl">
                        <span 
                            class="text-7xl text-blue-700"
                        >?</span>
                </div>

                <div class="flex items-center justify-between mt-2 select-none">
                    <h1 class="text-lg font-semibold flex items-center">
                        Choose an icon first
                    </h1>

                </div>
            {/if}
        </div>
        <div class="flex justify-center rounded-2xl bg-slate-100 border border-slate-200 md:w-2/3 w-full overflow-hidden">
            <div class="flex h-full overflow-hidden flex-wrap rounded-lg">
                {#each data.lineIcons as icon, i}
                    <button onclick={() => {
                            chosenIcon = i
                            showIcon = false
                            setTimeout(() => showIcon = true, 25)
                        }} class="{ viewMode === "grid" ? "w-1/4" : "w-1/3"} transition-all {
                        viewMode === "grid" ? 
                            i >= data.lineIcons.length - 4 ? null : "border-b border-b-slate-200"
                            :
                            i >= data.lineIcons.length - 3 ? null : "border-b border-b-slate-200"
                        } {
                        viewMode === "grid" ?
                            i > 0 && (i + 1) % 4 === 0 ? null: "border-e border-e-slate-200"
                            :
                            i > 0 && (i + 1) % 3 === 0 ? null: "border-e border-e-slate-200"
                        }">
                        <div class="flex transition-all bg-white { viewMode === "grid" ? "flex-col py-6 md:px-2" : "justify-between py-4 md:px-6 px-2"} items-center">
                            <span 
                                class="md:text-4xl text-2xl az-ico:{icon.name} text-blue-700 {viewMode === "grid" ? "mb-2.5" : null}"
                            >
                            </span>
                            <p class="md:text-xs text-[0.5rem] {viewMode === "grid" ? "mt-2" : null} font-sans text-slate-500">{icon.name}</p>
                        </div>                    
                    </button>
                {/each}
            </div>    
        </div>    
    </div>

</div>
