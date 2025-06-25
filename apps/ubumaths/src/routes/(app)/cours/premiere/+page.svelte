<script>
	import { fullScreen } from '$lib/stores'
	import PageHeader from '$lib/ui/PageHeader.svelte'
</script>

<div class="container mx-auto px-4">
	{#if !$fullScreen}
		<PageHeader title="Cours de Première (spécialité)" />
	{/if}

	<div
		class="mt-8 flex h-full flex-col items-center justify-center gap-16 text-xl"
		style="font-family: 'Baloo 2', sans-serif;"
	>
		<div class="h1">Préparation de la rentrée 2025</div>

		<ul class="list">
			<li>
				<span>-</span>
				Pour la calulatrice, il est conseillé d'acheter (en France ou ailleurs) la
				<a
					class="anchor"
					style="text-decoration:none"
					target="_blank"
					href="https://www.numworks.com/"
				>
					numworks</a
				>
			</li>
			<li>
				<span>-</span>
				Exercices à travailler pendant les vacances si vous êtes bien motivés, ou une semaine avant la
				rentrée :
				<a
					class="anchor"
					target="_blank"
					style="text-decoration:none"
					href="/files/Livret-2nde-1ere-2p - enonces.pdf"
				>
					exercices</a
				>
				/
				<a
					class="anchor"
					style="text-decoration:none"
					target="_blank"
					href="/files/Livret-2nde-1ere-2p - correction.pdf"
				>
					correction</a
				>
			</li>
		</ul>
	</div>
</div>
