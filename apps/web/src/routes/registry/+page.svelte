
<script lang="ts">
	import { goto } from "$app/navigation"
	import { fly } from "svelte/transition"
    import stringComparison from "string-comparison"

    const { data } = $props()

    let viewMode: string | null = $state("grid")

    let chosenIcon: { name: string } | null = $state(null)
    let showIcon: boolean = $state(true)

    let searchValue: string | null = $state(null)
    let results: { name: string }[] = $derived(searchValue ? (searchValue as string).length <= 2 ? data.lineIcons.filter((i) => i.name.startsWith(searchValue ?? "")): data.lineIcons.filter(icon => stringComparison.diceCoefficient.similarity(icon.name, searchValue ?? "") > 0.25) : data.lineIcons)

    $effect(() => {
        if (!searchValue) {
            results = data.lineIcons
        }
    })
</script>  

<div class="md:px-30 px-8 flex md:flex-row flex-col">
    <div class="flex flex-col md:w-1/3 w-full">
        <h1 class="flex items-center text-3xl md:mb-0 mb-3">
            <span class="icon-[charm--layout-dashboard] me-2 text-blue-600"></span>
            <span class="font-semibold">Registry</span>
        </h1>

        <div class="rounded-2xl md:rounded-e-none overflow-hidden border md:border-e-0 border-blue-100 flex flex-col mb-6 md:sticky top-10 md:mt-10 mt-2">
            {#if chosenIcon && chosenIcon.name}
                <div class="w-full h-42 flex items-center justify-center border-b border-blue-100 bg-sky-50">
                    {#if showIcon}
                        <span 
                            class="text-7xl text-blue-700 az-ico:{chosenIcon.name}"
                        ></span>
                    {/if}
                </div>

                <div class="flex flex-col px-4 pb-4 mt-2">
                    <div class="flex items-center justify-between select-none">
                        <h1 class="text-lg font-semibold flex items-center">
                            Icon name
                        </h1>

                        <p class="font-medium font-mono text-blue-400">
                            {chosenIcon.name}
                        </p>
                    </div>

                    <div class="bg-sky-50 border border-blue-100 flex flex-col text-xs rounded-xl p-3 mt-3">
                        <div class="flex items-center justify-between mb-2">
                            <h1 class="flex items-center font-medium select-none text-blue-400">
                                <span class="icon-[charm--code] me-1"></span>
                                <span>Code snippet</span>
                            </h1>
                            <button aria-label="Copy code" title="Copy code" onclick={() => {
                                navigator.clipboard.writeText(`<span class="az-ico:${chosenIcon?.name}"></span>`)
                            }}>
                                <span class="icon-[charm--copy] text-blue-400"></span>
                            </button>
                        </div>
                        <code class="block text-nowrap w-full overflow-x-auto pb-2">
                            <span class="text-blue-300">&lt;</span><span class="text-blue-600">span</span> class<span class="text-blue-300">=</span><span class="text-sky-500">"az-ico:{chosenIcon.name}"</span><span class="text-blue-300">&gt;</span><span class="text-blue-300">&lt;/</span><span class="text-blue-600">span</span><span class="text-blue-300">&gt;</span>
                        </code>
                    </div>
                    <div class="flex self-center items-center justify-center font-medium py-2 px-2 bg-blue-500 active:bg-blue-600 border-x border-blue-600 border-b transition-all rounded-b-2xl">
                        <button class="me-4 ps-2 text-white flex items-center" onclick={() => goto(`/docs?ic=${chosenIcon?.name}`)}>
                            <span class="icon-[charm--plus] text-sky-200 me-1"></span>
                            <span>
                                Use icon
                            </span>                            
                        </button>
                        
                        <a href="https://github.com/MadeByRetcy/azul/blob/stable/packages/icons/src/line/{chosenIcon.name}.svg" class="bg-white border flex items-center font-semibold text-xs text-blue-500 border-sky-200 rounded-xl px-3 py-1">
                            <span class="az-ico:download text-lg text-sky-400 me-1.5"></span>
                            <span>
                                Download .svg
                            </span>      
                        </a>
                    </div>
                    <p class="text-xs font-medium flex items-center justify-center text-blue-400 mt-2">
                        <a href="https://github.com/MadeByRetcy/azul" class="underline flex items-center ms-1"><span class="icon-[bi--github] me-1.5"></span> <span>Contribute to Azul</span></a> 
                    </p>
                </div>
            {:else}
                <div class="w-full h-42 flex items-center justify-center bg-sky-50 border-b border-blue-100">
                        <span 
                            class="text-7xl text-blue-700"
                        >?</span>
                </div>

                <div class="flex items-center justify-between select-none p-3">
                    <h1 class="text-lg font-semibold flex items-center">
                        Choose an icon first
                    </h1>
                </div>
            {/if}
        </div>
    </div>
    <div in:fly={{ y: 15 }} class="flex flex-col items-center md:w-2/3 w-full">
        <div class="md:w-3/4 w-11/12 flex items-center border-blue-100 border-x border-t rounded-t-2xl">
            <div class="flex items-center w-full relative">
                <span class="absolute text-lg text-sky-500 icon-[charm--search] start-4"></span>
                <input bind:value={searchValue} class="ps-11 pe-3 py-3 w-full placeholder:text-blue-300 rounded-tl-2xl" type="text" placeholder="Search for an icon">
            </div>
            <span class="me-4 text-blue-100">|</span>
            <div class="flex md:text-2xl text-xl items-center text-blue-300 pe-3">
                <button onclick={() => viewMode = "grid"} aria-label="Grid View" class="me-4 px-1 py-3 flex items-center transition-all border-b-2 {viewMode === "grid" ? "border-b-blue-600 text-sky-500" : "border-b-transparent"}">
                    <span class="icon-[charm--layout-grid]"></span>
                </button>
                <button onclick={() => viewMode = "rows"} aria-label="Rows View" class="px-1 py-3 flex items-center transition-all border-b-2 {viewMode === "rows" ? "border-b-blue-600 text-sky-500" : "border-b-transparent"}">
                    <span class="icon-[charm--layout-rows]"></span>       
                </button>
            </div>
        </div>
        <div class="flex items-start content-start w-full rounded-2xl min-h-screen bg-blue-50 border border-blue-100 overflow-hidden h-full flex-wrap">
            {#each results as icon, i (icon)}
                <button onclick={() => {
                        chosenIcon = results[i]
                        showIcon = false
                        setTimeout(() => showIcon = true, 25)
                    }} class="bg-white { viewMode === "grid" ? "w-1/4 md:h-32 h-28" : "w-1/3"} {
                    viewMode === "grid" ? 
                        i >= results.length - 4 && results.length % 4 < 0 ? null : "border-b border-b-blue-100"
                        :
                        i >= results.length - 3 && results.length % 4 < 0 ? null : "border-b border-b-blue-100"
                    } {
                    viewMode === "grid" ?
                        i > 0 && (i + 1) % 4 === 0 ? null: "border-e border-e-blue-100"
                        :
                        i > 0 && (i + 1) % 3 === 0 ? null: "border-e border-e-blue-100"
                    }">
                    <div class="flex transition-all { viewMode === "grid" ? "flex-col py-6 md:px-2" : "justify-between py-4 md:px-6 px-2"} items-center">
                        <span 
                            class="md:text-4xl text-3xl az-ico:{icon.name} text-blue-700 {viewMode === "grid" ? "mb-2.5" : null}"
                        >
                        </span>
                        <p class="md:text-xs text-[0.5rem] {viewMode === "grid" ? "mt-2" : null} font-sans text-blue-400">{icon.name}</p>
                    </div>                    
                </button>
            {:else}
                <div class="size-full flex flex-col items-center justify-start pt-15">
                    <span class="az-ico:content-revoked text-3xl text-blue-600"></span>
                    <p class="text-blue-400 font-medium mt-3">
                        No icons found
                    </p>                
                </div>

            {/each}
        </div>    
    </div>
</div>
