<script>
	import { fullScreen } from '$lib/stores'
	import PageHeader from '$lib/ui/PageHeader.svelte'
</script>

<div class="container mx-auto px-4">
	{#if !$fullScreen}
		<PageHeader title="Cours de Maths" />
	{/if}

	<div
		class="mt-8 flex h-full flex-col items-center justify-center gap-16 text-4xl"
		style="font-family: 'Baloo 2', sans-serif;"
	>
		<div>
			<a class="anchor" style="text-decoration:none" href="/cours/terminale"
				>Terminale (Spécialité)</a
			>
		</div>
		<div>
			<a class="anchor" style="text-decoration:none" href="/cours/premiere">Première (Spécialité)</a
			>
		</div>
	</div>
</div>
