<script lang="ts">
	import generate from '$lib/questions/generateQuestion'
	import { getQuestion, questions_ids } from '$lib/questions/questions'
	import QuestionBase from '$lib/ui/Question.svelte'
	import {
		assessItem,
		prepareAnsweredQuestion,
		prepareCorrectedQuestion,
	} from '$lib/questions/correction'
	import type { Basket, Teacher } from '../../../types/type'
	import QuestionCard from '$lib/ui/QuestionCard.svelte'
	import IconPlus from '$lib/ui/icons/IconPlus.svelte'
	import IconMinus from '$lib/ui/icons/IconMinus.svelte'
	import { getToastStore, type ModalSettings } from '@skeletonlabs/skeleton'
	import { connected, user } from '$lib/stores'
	import { enhance, type SubmitFunction } from '$app/forms'
	import { getLogger } from '$lib/utils'
	import { getModalStore } from '@skeletonlabs/skeleton'
	import { goto } from '$app/navigation'
	import type { SupabaseClient } from '@supabase/supabase-js'
	import type { Database } from '../../../types/supabase'

	export let basket: Basket = []
	export let courseAuxNombres = false
	export let enounceAlone = false

	export let db: SupabaseClient<Database>

	const toastStore = getToastStore()
	const modalStore = getModalStore()
	let { warn, trace, fail } = getLogger('Basket', 'warn')

	export let evalTitle = ''
	let isTitleAvailable = false
	let titles: { title: string; id: number }[] | null = null

	fetchTitles()

	$: isTitleAvailable = checkEvalTitleAvailability(evalTitle, titles)
	$: console.log('isTitleAvailable: ', isTitleAvailable)

	const submitSave: SubmitFunction = (params) => {
		if (isTitleAvailable) {
			saveAssessment(params)
		} else {
			triggerConfirm(params)
		}
	}
	const triggerConfirm: SubmitFunction = (params) => {
		params.cancel()
		const confirm: ModalSettings = {
			type: 'confirm',
			title: 'Merci de confirmer',
			body: `Voulez-vous vraiment écraser l'évaluation '${evalTitle}'?`,
			// TRUE if confirm pressed, FALSE if cancel pressed
			response: (r: boolean) => {
				if (r) saveAssessment(params)
			},
			// Optionally override the button text
			buttonTextCancel: 'Annuler',
			buttonTextConfirm: 'Confirmer',
		}
		modalStore.trigger(confirm)
	}

	const saveAssessment: SubmitFunction = async (params) => {
		params.cancel()
		const { error } = await (isTitleAvailable
			? db.from('assessments').insert([
					{
						title: evalTitle,
						teacher_id: $user.id,
						questions: JSON.stringify(basket),
					},
				])
			: db
					.from('assessments')
					.update({
						questions: JSON.stringify(basket),
					})
					.eq('id', titles!.find((item) => item.title === evalTitle)!.id))

		if (error) {
			fail(error.message)
			toastStore.trigger({
				message: 'Impossible de sauvegarder l’évaluation.',
				background: 'bg-error-500',
			})
		} else {
			toastStore.trigger({
				message: 'Évaluation sauvegardée.',
				background: 'bg-success-500',
			})
			fetchTitles()
		}
	}

	async function fetchTitles() {
		const { data, error } = await db
			.from('assessments')
			.select('title,id')
			.eq('teacher_id', $user.id)
		if (error) {
			toastStore.trigger({
				message: 'Impossible de récupérer les titres des évaluations.',
				background: 'bg-error-500',
			})
			titles = null
		} else if (!data) {
			titles = null
		} else {
			titles = data.map((item) => ({ title: item.title, id: item.id }))
			console.log('titles', titles)
		}
	}

	function checkEvalTitleAvailability(
		title: string,
		titles: { title: string; id: number }[] | null,
	) {
		return !!titles && !titles.some((item) => item.title === title)
	}

	function addItem(i: number) {
		basket[i].count++
		//  pour forcer l'update
		basket = basket
	}

	function toggleEnounceAlone(i: number) {
		basket[i].enounceAlone = enounceAlone
	}

	function removeItem(i: number) {
		if (basket[i].count > 1) {
			basket[i].count--
		} else {
			basket.splice(i, 1)
		}
		basket = basket
	}

	const lessTime = (i: number) => {
		if (basket[i].delay < 5) {
			basket[i].delay = 0
		} else {
			basket[i].delay = basket[i].delay - 5
		}
		basket = basket
	}

	const moreTime = (i: number) => {
		basket[i].delay = basket[i].delay + 5
		basket = basket
	}
</script>

<!-- <TextField filled bind:value="{evalTitle}" rules="{titleRules}">Titre</TextField
> -->

{#if basket.length}
	{#each basket as item, i}
		{@const { theme, domain, subdomain, level } = questions_ids[item.id]}
		{@const card = assessItem(
			prepareCorrectedQuestion(
				prepareAnsweredQuestion(generate(getQuestion(theme, domain, subdomain, level))),
			),
		)}
		<div class="my-4 flex flex-col items-center lg:flex-row">
			<QuestionCard class="mx-4 max-w-sm" {card} />

			<div class="my-4 flex flex-row">
				<div class="mx-4 flex flex-row items-start justify-start lg:flex-col">
					<div class="flex flex-col items-center">
						{#if !courseAuxNombres}
							<div class="flex flex-row justify-center">
								répétition: {basket[i].count}
							</div>
						{/if}
						<div class="flex flex-row justify-center">
							<button on:click={() => removeItem(i)} class="btn-icon variant-filled-primary mx-1"
								><IconMinus /></button
							>
							{#if !courseAuxNombres}
								<button on:click={() => addItem(i)} class="btn-icon variant-filled-primary mx-1"
									><IconPlus /></button
								>
							{/if}
						</div>
					</div>
					<div class="flex flex-col items-center">
						{#if !courseAuxNombres}
							<div class="flex flex-row items-center justify-center">
								temps: {basket[i].delay} s
							</div>
							<div class="flex flex-row items-center justify-center">
								<button on:click={() => lessTime(i)} class="btn-icon variant-filled-primary mx-1"
									><IconMinus /></button
								>
								<button on:click={() => moreTime(i)} class="btn-icon variant-filled-primary mx-1"
									><IconPlus /></button
								>
							</div>
						{/if}
					</div>
				</div>
				<div class="label mx-4">
					<strong>Options</strong>
					<div class="space-y-2">
						<label class="flex items-center space-x-2">
							<input
								class="checkbox"
								type="checkbox"
								on:change={() => toggleEnounceAlone(i)}
								bind:checked={enounceAlone}
							/>
							<p>Enoncé séparé</p>
						</label>
					</div>
				</div>
			</div>
		</div>
	{/each}

	<!-- {#if assessment_id}
		<div class="my-4 flex justify-center">
			<button
				on:click={() => {
					goto('/dashboard')
				}}
				class="btn variant-filled-primary">Retourner aux évaluations</button
			>
		</div>
	{/if} -->
	<h2>Créer une évaluation</h2>
	<form method="POST" use:enhance={submitSave}>
		<div class="my-4">
			<label class="label">
				<span>Titre</span>
				<input
					class={'input' + (!isTitleAvailable || !evalTitle ? ' input-error' : ' input-success')}
					type="text"
					bind:value={evalTitle}
				/>
			</label>
		</div>

		<button
			disabled={!titles || !evalTitle || !basket.length}
			type="submit"
			class={'btn' +
				(!evalTitle || isTitleAvailable ? ' variant-filled-primary' : ' variant-filled-error')}
			>{!evalTitle || isTitleAvailable ? 'Enregistrer' : 'Ecraser'}</button
		>
	</form>
{:else}
	<div>Le panier est vide.</div>
{/if}
