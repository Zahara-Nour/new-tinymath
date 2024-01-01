<script lang="ts">
	import IconBasket from '$lib/ui/icons/IconBasket.svelte'
	import IconBasketPlus from '$lib/ui/icons/IconBasketPlus.svelte'
	import IconFlash from '$lib/ui/icons/IconFlash.svelte'
	import IconLink from '$lib/ui/icons/IconLink.svelte'
	import IconNewspaper from '$lib/ui/icons/IconNewspaper.svelte'
	import IconProjector from '$lib/ui/icons/IconProjector.svelte'
	import IconQuestion from '$lib/ui/icons/IconQuestion.svelte'
	import IconRocket from '$lib/ui/icons/IconRocket.svelte'
	import IconRun from '$lib/ui/icons/IconRun.svelte'
	import IconTrash from '$lib/ui/icons/IconTrash.svelte'
	import { user } from '$lib/stores'
	import type { Basket } from '../../../types/type'

	export let showBasket = false
	export let basket: Basket
	export let copyLink: () => void
	export let fillBasket: () => void
	export let launchTest: () => void
	export let classroom = false
	export let flash = false
	export let displayExemple = false
	export let flushBasket: () => void
	export let courseAuxNombres = false
	export let generateExoTexmacs: () => void

	const toggleExemple = () => (displayExemple = !displayExemple)
	const toggleBasket = () => (showBasket = !showBasket)
	const toggleClassroom = () => (classroom = !classroom)
	const toggleFlash = () => (flash = !flash)
	const toggleCourseAuxNombres = () => (courseAuxNombres = !courseAuxNombres)

	const classSelected = 'ml-1 btn-icon variant-filled-primary text-2xl'
	const classNotSelected = 'ml-1 btn-icon variant-filled-tertiary text-2xl'
	// $: isLoggedIn = $user.id != 'guest'
	// $: isTeacher = isLoggedIn && $user.roles.includes('teacher')
	// $: isStudent = isLoggedIn && $user.roles.includes('student')
</script>

<div
	class="bg-surface-50-900-token border-tertiary-500 sticky top-0 flex flex-wrap border-b-2 pb-2"
>
	<div class="grow" />

	<button on:click={toggleExemple} class={displayExemple ? classSelected : classNotSelected}
		><IconQuestion /></button
	>

	{#if $user.isTeacher()}
		<button on:click={copyLink} class={classNotSelected}><IconLink /></button>
	{/if}

	{#if $user.isTeacher()}
		<button on:click={generateExoTexmacs} class={classNotSelected}><IconNewspaper /></button>
	{/if}

	<button
		on:click={toggleCourseAuxNombres}
		class={courseAuxNombres ? classSelected : classNotSelected}><IconRun /></button
	>

	{#if $user.isTeacher()}
		<button on:click={toggleClassroom} class={classroom ? classSelected : classNotSelected}
			><IconProjector /></button
		>
	{/if}

	<button on:click={toggleFlash} class={flash ? classSelected : classNotSelected}
		><IconFlash /></button
	>

	{#if $user.isTeacher()}
		<button on:click={fillBasket} class={classNotSelected}><IconBasketPlus /></button>
	{/if}

	{#if $user.isTeacher()}
		<button on:click={flushBasket} class={classNotSelected}><IconTrash /></button>
	{/if}

	{#if $user.isTeacher()}
		<div class="relative inline-block">
			{#if basket.length}
				<span class={'badge variant-filled-error z-1 absolute -right-1 -top-2'}
					>{basket.reduce((acc, item) => acc + item.count, 0)}</span
				>
			{/if}
			<span>
				<button on:click={toggleBasket} class={showBasket ? classSelected : classNotSelected}
					><IconBasket /></button
				>
			</span>
		</div>
	{/if}

	<button on:click={launchTest} class={classNotSelected}><IconRocket /></button>
</div>
