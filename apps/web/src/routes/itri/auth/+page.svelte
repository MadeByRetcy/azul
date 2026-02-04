
<script lang="ts">
	import { page } from '$app/state';

    const { data } = $props()
    const { supabase, session } = $derived(data)
</script>

<div class="flex flex-col items-center justify-center">

    <h1 class="flex items-center text-3xl mb-2 font-semibold">
        <span class="az-ico:riad-join me-2 text-blue-600"></span>
        <span>Authenticate</span>
    </h1>
    <h2 class="text-slate-500">To activate your Itri subsciption, please login.</h2>

    <p class="text-slate-500 font-medium mt-5">Continue with</p>
    <div class="flex items-center mt-1">
        <button onclick={() => alert("Coming soon...")} class="select-none w-42 me-3 flex items-center justify-center font-medium py-3 rounded-lg border border-slate-300">
            <img 
                src="/msharfin.webp" 
                alt="Msharfin Logo"
                class="pointer-events-none h-4 brightness-0"
            >
        </button>

        <button onclick={async () => await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                scopes: "read:user user:email",
                redirectTo: `${page.url.origin}/itri/auth/callback`
            }
        })} aria-label="Github" class="select-none w-42 flex items-center justify-center font-medium py-3 rounded-lg border border-slate-300">
            <span class="icon-[logos--github] text-lg"></span>
        </button>
    </div>

</div>