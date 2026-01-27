
<script lang="ts">
	import { goto } from '$app/navigation';

    const { data } = $props()
    const { session, supabase, paddleDash } = $derived(data)
</script>

<div class="mx-30 flex items-center justify-between">
    <div>
        <h1 class="text-2xl mb-1">
            <span class="text-slate-600 block text-base">Azul Flawn,</span>
            <span class="font-semibold">{session?.user.user_metadata.name}</span>
        </h1>
        <!-- TODO: Make this dynamic with the provider (ie Msharfin) -->
        <h2 class="text-slate-400 flex items-center font-medium text-sm"><span>You're logged in via</span> <span class="mx-1 icon-[cuida--github-logo-outline]"></span> <span class="font-medium">Github</span></h2>        
    </div>

    <div class="flex flex-col">
        <button onclick={
            async () => {
                await supabase.auth.signOut()
                goto("/")
            }
        } class="border-amber-500 border py-2 px-4 rounded-xl flex items-center justify-center mb-3 text-amber-500">
            <span class="me-2 az-ico:riad-leave"></span>
            <span>Sign out</span>
        </button>
        <button class="bg-red-100 py-2 px-4 rounded-xl flex items-center text-red-500">
            <span class="me-2 icon-[charm--bin]"></span>
            <span>Delete account</span>
        </button>
    </div>
</div>
        

<div class="border flex flex-col border-slate-300 rounded-xl flex-1 mx-30 mt-5">
    <div class="flex items-center justify-between p-4 border-b border-b-slate-300">
        <h1 class="text-slate-600">Client ID</h1>
        <span class="font-mono bg-sky-50 rounded-lg text-sm text-blue-700 p-1">{session?.user.id}</span>
    </div>
    <div class="p-4 flex-1">
    
        <div class="flex items-center justify-between">
            <h1 class="text-slate-600">Domain allowlist (WIP)</h1>
            <div class="flex items-center border-sky-200 rounded-3xl border-2">
                <input
                    type="url"
                    required
                    placeholder="https://test.com"
                    class="placeholder:text-sky-300 h-full ps-3 py-3 rounded-s-3xl"
                >
                <button class="flex items-center rounded-2xl mx-1 bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                    <span class="icon-[charm--apps-plus] me-2 text-sky-200"></span>
                    <span>Add domain</span>
                </button>
            </div>
        </div>
    </div>
    <p class="text-slate-400 italic text-sm p-4">ⓘ To manage your subsciption, please <a href={paddleDash} class="font-bold underline">go here!</a></p>
</div>