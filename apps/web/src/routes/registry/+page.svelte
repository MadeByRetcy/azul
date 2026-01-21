
<script lang="ts">
	import { fly } from "svelte/transition";

    const { data } = $props()

    let viewMode: string | null = $state("grid")
</script>

<div class="md:px-30 px-8">
    <div class="flex items-center justify-between md:mx-6 mx-3 text-2xl">
        <h1 class="flex items-center md:mb-0 mb-3">
            <span class="icon-[charm--layout-dashboard] me-2 text-blue-600"></span>
            <span class="font-semibold">Icon Registry</span>
        </h1>
        <div class="flex md:text-2xl text-lg items-center text-slate-500">
            <button onclick={() => viewMode = "grid"} aria-label="Grid View" class="me-2 md:p-4 p-2 transition-all border-b-2 {viewMode === "grid" ? "border-b-blue-600 text-blue-600" : "border-b-transparent"}">
                <span class="icon-[charm--layout-grid]"></span>
            </button>
            <button onclick={() => viewMode = "rows"} aria-label="Rows View" class="md:p-4 p-2 transition-all border-b-2 {viewMode === "rows" ? "border-b-blue-600 text-blue-600" : "border-b-transparent"}">
                <span class="icon-[charm--layout-rows]"></span>       
            </button>
        </div>
    </div>
    <div in:fly={{ y: 15 }} class="flex justify-center rounded-2xl bg-slate-100 pb-3 md:px-12 px-4 md:pt-12 pt-6 w-full">
        <div class="flex h-full overflow-hidden flex-wrap rounded-lg">
            {#each data.lineIcons as icon}
                <div class="{ viewMode === "grid" ? "md:w-1/6 w-1/3" : "md:w-1/3 w-1/2"} transition-all md:mb-4 mb-1 md:pe-4 pe-1">
                    <div class="flex transition-all bg-white { viewMode === "grid" ? "flex-col py-6 md:px-2" : "justify-between py-4 px-6"} rounded-xl items-center">
                        <span 
                            class="text-4xl az-ico:{icon} text-blue-800 {viewMode === "grid" ? "mb-2.5" : null} icon"
                        >
                        </span>
                        <p class="md:text-xs text-[0.5rem] {viewMode === "grid" ? "mt-2" : null} font-sans text-slate-400">{icon}</p>
                    </div>                    
                </div>
            {/each}
        </div>    
    </div>    
</div>
