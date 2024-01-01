<script>
	import navadra from '$lib/images/navadra/logo.png'
	import { fullScreen } from '$lib/stores'
	import PageHeader from '$lib/ui/PageHeader.svelte'
</script>

<div class="container mx-auto px-4">
	{#if !$fullScreen}
		<PageHeader title="Jeux mathématiques" />
	{/if}

	<div
		class="mt-8 flex h-full flex-col items-center justify-center gap-16 text-4xl"
		style="font-family: 'Baloo 2', sans-serif;"
	>
		<div>
			<a class="anchor" style="text-decoration:none" href="/jeux/trio">trio</a>
		</div>
		<div>
			<a class="anchor" style="text-decoration:none" href="/jeux/mathemo">mathémo</a>
		</div>
		<div>
			<a class="anchor" style="text-decoration:none" href="/rickroll">mégamax</a>
		</div>
		<div>
			<a class="anchor" style="text-decoration:none" href="/jeux/bingo">bingo</a>
		</div>
		<div>
			<a class="anchor" style="text-decoration:none" href="/jeux/navadra"
				><img class="w-48" src={navadra} alt="logo-navadra" /></a
			>
		</div>
	</div>
</div>
