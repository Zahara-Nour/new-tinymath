<script lang="ts">
	import { AppBar, Avatar, modeCurrent, modeOsPrefers, popup } from '@skeletonlabs/skeleton'
	import { LightSwitch } from '@skeletonlabs/skeleton'
	import { fontSize, fullScreen, user } from '$lib/stores'
	import { get } from 'svelte/store'
	import Burger from './Burger.svelte'
	import UserAvatar from './UserAvatar.svelte'
	import IconIncrease from '$lib/ui/icons/IconIncrease.svelte'
	import IconDecrease from '$lib/ui/icons/IconDecrease.svelte'
	import IconFullscreen from '$lib/ui/icons/IconFullscreen.svelte'
	import IconLogin from './icons/IconLogin.svelte'

	export let drawerOpen: () => void
	const avatar = '/images/avatars/avatar-teacher-boy.jpg'

	function increase() {
		const newSize = get(fontSize) + 1
		fontSize.set(newSize)
		document.getElementsByTagName('html')[0].style.fontSize = `${newSize}px`
	}

	function decrease() {
		const newSize = get(fontSize) - 1
		fontSize.set(newSize)
		document.getElementsByTagName('html')[0].style.fontSize = `${newSize}px`
	}
</script>

<AppBar class="shadow-2xl">
	<svelte:fragment slot="lead">
		<a href="/"><img src="/images/gidouille.png" alt="gidouille" class="mr-4 w-8" /></a>

		<div class="inline-block">
			<a href="/">
				<strong
					class="lg:text-primary-500 hidden lg:mr-6 lg:inline-block lg:text-xl lg:uppercase"
					style="font-family: 'Baloo 2', sans-serif;">Ubumaths</strong
				>
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />

		{#if !$user.isGuest()}
			<div>
				<span
					use:popup={{
						event: 'click',
						target: 'avatarMenuTop',
						placement: 'bottom',
					}}
				>
					<Avatar src={avatar} width="w-[43px]" rounded="rounded-full" />
				</span>
				<div class="card variant-filled-surface z-100 p-2 shadow-xl" data-popup="avatarMenuTop">
					<nav class="list-nav">
						<!-- (optionally you can provde a label here) -->
						<ul>
							<li>
								<a href="/dashboard">
									<span class="flex-auto">Dashboard</span>
								</a>
							</li>

							<li>
								<a href="/logout" class="btn variant-filled-error">Déconnexion</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		{:else}
			<a href="/login" class={'btn-icon variant-filled-tertiary text-xl'}><IconLogin /> </a>
		{/if}

		<button on:click={decrease} class="btn-icon variant-filled-primary text-xl"
			><IconDecrease /></button
		>
		<button on:click={increase} class="btn-icon variant-filled-primary text-xl"
			><IconIncrease /></button
		>
		<button
			on:click={() => fullScreen.update((state) => !state)}
			class="btn-icon variant-filled-primary text-xl"><IconFullscreen>/</IconFullscreen></button
		>

		<Burger class=" btn btn-sm mr-4 lg:hidden" handleClick={drawerOpen} />
	</svelte:fragment>
</AppBar>
