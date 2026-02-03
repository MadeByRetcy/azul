<script lang="ts">
	import { page } from "$app/state"
</script>

<div class="w-full flex-1 flex items-center justify-center flex-col">
    <h1 class="font-bold text-4xl">
      {page.status}  
    </h1>
    <p class="text-slate-600">{page.error?.message}</p>
</div>