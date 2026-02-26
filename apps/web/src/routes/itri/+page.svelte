<script lang="ts">
	import { fly } from "svelte/transition"
</script>

<div class="flex items-center justify-center">
    <div in:fly={{ y: 15 }} class="w-96 me-3 flex items-center rounded-4xl p-8 self-center flex-col border border-slate-300">
        <span class="icon-[charm--north-star] text-3xl text-blue-500">
        </span>
        <h1 class="text-3xl">Itri <b>Standard</b></h1>
        <p class="text-slate-400">Get the best of Moroccan inspired icons</p>

        <div class="flex items-end font-bold my-4">
            <h1 class="text-5xl me-1">35</h1>
            <h2 class="text-slate-500 flex items-center"><span class="az-ico:dirham text-2xl"></span><span>/mo</span></h2>
        </div>

        <ul class="self-start">
            <li class="flex items-center"><span class="text-sky-500 az-ico:appearance me-2 text-lg"></span> Access to bold & duotone icons</li>
            <li class="flex items-center"><span class="text-sky-500 az-ico:riad-join me-2 text-lg"></span> Higher rate limits</li>
            <li class="flex items-center"><span class="text-sky-500 az-ico:download me-2 text-lg"></span> Get early access to new icons</li>
            <li class="flex items-center"><span class="text-sky-500 az-ico:content-create me-2 text-lg"></span> Suggest new icons</li>
            <li class="flex items-center"><span class="text-sky-500 az-ico:donation me-2 text-lg"></span> Support us</li>
        </ul>
        <button onclick={() => alert("Coming in V2")} class="bg-blue-500 border border-blue-600 mt-6 py-3 text-lg w-full flex items-center justify-center text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
            <span class="icon-[charm--arrow-right] text-sky-200 me-1"></span>
            <span>Get Started</span>
        </button>
    </div>

    <div in:fly={{ y: 15 }} class="w-96 flex items-center rounded-4xl p-8 self-center flex-col border border-slate-300">
        <span class="icon-[charm--briefcase] text-3xl text-blue-500">
        </span>
        <h1 class="text-3xl">Itri <b>Enterprise</b></h1>
        <p class="text-slate-400">Propel your business with Moroccan icons</p>
        <div class="flex items-end font-bold my-4">
            <h1 class="text-5xl me-1">175</h1>
            <h2 class="text-slate-500 flex items-center"><span class="az-ico:dirham text-2xl"></span><span>/mo</span></h2>
        </div>

        <ul class="self-start">
            <li class="flex items-center"><span class="text-sky-500 icon-[charm--north-star] me-2 text-lg"></span> Everything in <b class="ms-1">Standard</b></li>
            <li class="flex items-center"><span class="text-sky-500 icon-[charm--chart-line] me-2 text-lg"></span> Unlimited access</li>
            <li class="flex items-center"><span class="text-sky-500 icon-[charm--message] me-2 text-lg"></span> Priority support</li>
            <li class="flex items-center"><span class="text-sky-500 icon-[charm--key] me-2 text-lg"></span> SSO Login support</li>
            <li class="flex items-center"><span class="text-sky-500 az-ico:donation me-2 text-lg"></span> Support us</li>
        </ul>
        <button onclick={() => alert("Coming in V2")} class="bg-sky-100 mt-6 py-3 text-lg w-full flex items-center justify-center border border-sky-200 text-blue-600 rounded-full font-semibold active:bg-sky-200 transition-colors">
            <span class="icon-[charm--mail] text-sky-500 me-1"></span>
            <span>Contact Us</span>
        </button>
    </div>
</div>
