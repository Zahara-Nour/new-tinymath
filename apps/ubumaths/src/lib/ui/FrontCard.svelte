<script lang="ts">
	// import Spinner from './Spinner.svelte'
	import Question from './Question.svelte'
	import { formatLatexToHtml } from '$lib/stores'
	import { formatToLatex } from '$lib/utils'
	import type { AnsweredQuestion, Commit, Line } from '../../types/type'
	import IconOrbitVariant from '$lib/ui/icons/IconOrbitVariant.svelte'

	export let toggleFlip = () => {}
	export let card: AnsweredQuestion
	export let showDescription = false
	export let height = 0
	export let width = 0
	export let h = 0
	export let w = 0
	export let masked = false
	export let interactive = false
	export let commit: Commit
	export let correction = false
	export let simpleCorrection: Line[] = []
	export let detailedCorrection: Line[] = []
	export let immediateCommit = false
	export let flashcard = false
	const classBtnIconMagnify = 'btn aspect-square  rounded-full'

	$: description = $formatLatexToHtml(formatToLatex(card.description))
	$: subdescription = $formatLatexToHtml(formatToLatex(card.subdescription))
</script>

<div bind:clientHeight={h} bind:clientWidth={w} class={`${$$props.class}`}>
	<div
		class="card variant-filled-soft flex flex-col justify-between p-4 shadow-xl"
		style={height ? `height:${height}px;` : width ? `width:${width}px;` : ''}
	>
		{#if showDescription}
			<header class="header flex items-center justify-between border-b-2 pb-2">
				<div class="justify-left flex items-center">
					<div class="flex flex-col justify-start">
						<span class="text-primary-500 font-bold">
							{@html $formatLatexToHtml(description)}
						</span>

						{#if subdescription}
							<span class="text-primary-500">
								{@html $formatLatexToHtml(subdescription)}
							</span>
						{/if}
					</div>
				</div>

				<span
					><button
						on:click={() => (correction = !correction)}
						class={'btn-icon mx-1 ' +
							(correction ? 'variant-filled-primary' : 'variant-filled-surface')}>C</button
					>
					<button
						on:click={() => (interactive = !interactive)}
						class={'btn-icon mx-1 ' +
							(interactive ? 'variant-filled-primary' : 'variant-filled-surface')}>I</button
					>
					<span class="ml-2">{card.id}</span>
				</span>
			</header>
		{/if}
		{#if correction}
			<div class=" flex flex-col items-start">
				<span
					class="correction-title text-success-500 mb-4 pt-4 font-bold"
					style={`font-size:1rem;`}
				>
					Correction
				</span>
			</div>
		{/if}
		<Question
			question={card}
			{masked}
			{correction}
			{interactive}
			bind:simpleCorrection
			bind:detailedCorrection
			{commit}
			{immediateCommit}
		/>

		<footer class="footer flex justify-end">
			{#if flashcard}
				<button on:click={toggleFlip} class={classBtnIconMagnify + ' variant-filled-primary'}
					><IconOrbitVariant /></button
				>
			{:else}
				<button style="visibility:hidden;" class={classBtnIconMagnify + ' variant-filled-primary'}
					><IconOrbitVariant /></button
				>
			{/if}
		</footer>
	</div>
</div>

<style>
	.correction-title {
		transform: rotate(-45deg);
	}

	.magnify-icon {
		font-size: 0.9em;
		width: 1.8em;
	}
</style>
