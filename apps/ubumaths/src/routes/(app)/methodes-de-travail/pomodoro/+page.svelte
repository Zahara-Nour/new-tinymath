<script>
	const listData = [
		{ label: 'But', description: 'Avoir des séances de travail efficaces' },
		{
			label: 'Idée',
			description:
				'Découper le temps de travail en "petites" périodes entrecoupées de courtes causes.',
		},
		{
			label: 'Pourquoi ça marche?',
			description:
				"Travailler sur des périodes limitées permet d'avoir une meilleure concentration.",
		},
		{
			label: 'Difficultés de la méthode',
			description:
				"Il faut absolument respecter le rythme entre les périodes d'activités et de pause.",
		},
		{
			label: 'Matériel',
			description: "Un minuteur (il y a plein d'apps dédiées à la méthode Pomodoro sur smartphone)",
		},
	]

	const steps = [
		{
			text: 'Lister les tâches à effectuer.',
		},
		{
			text: 'Se concentrer pendant <b>25 minutes</b> sur le travail à effectuer.',
			img: '/images/pomodoro1.jpg',
		},
		{
			text: "Faire une <b>pause de 5 minutes</b> (se lever et bouger pour avoir un minimum d'activité physique).",
			img: '/images/pomodoro2.jpg',
		},
		{
			text: 'On recommence 3 séquences de concentration + 5 minutes de pause entre chaque séquence.',
		},
		{
			text: 'Au bout de 4 séquences de travail intensif, <b>pause de 20 minutes</b>.',
			img: '/images/pomodoro3.jpg',
		},
		{
			text: "S'il reste du travail à faire, on recommence un cycle de 4 séquences (ou moins si on a fini avant).",
		},
	]
</script>

<div class="container mx-auto max-w-xl px-4 pt-2">
	<h1 class="h1 text-center">La méthode Pomodoro</h1>

	<div class="text-token card my-4 w-full space-y-4 p-4">
		<dl class="list-dl">
			{#each listData as v}
				<div>
					<span class="flex-auto">
						<dt class=" font-bold">{v.label} :</dt>
						<dd class="opacity-8 pl-6 pt-1 text-sm">{v.description}</dd>
					</span>
				</div>
			{/each}
		</dl>
	</div>

	<h2 class="h2">Mise en oeuvre</h2>

	<div class="text-token card w-full space-y-4 p-4">
		<ol class="list">
			{#each steps as v, i}
				<li class="w-full">
					<div class="flex w-full flex-col py-2">
						<div class="flex items-start gap-4">
							<span class="badge-icon variant-filled-primary p-4">{i + 1}</span>
							<span class="flex-auto">
								{@html v.text}
							</span>
						</div>
						{#if v.img}
							<img alt="pomodoro" class="m-auto my-2 w-full" style="max-width:200px" src={v.img} />
						{/if}
					</div>
				</li>
			{/each}
		</ol>
	</div>
</div>
