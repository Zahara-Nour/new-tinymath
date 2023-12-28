<script lang="ts">
	import IconLogin from '$lib/ui/icons/IconLogin.svelte'
	import IconUser from '$lib/ui/icons/IconUser.svelte'
	import { user } from '$lib/stores'
	import { Avatar, popup } from '@skeletonlabs/skeleton'

	export let place = 'TopBar'
	const avatar = '/images/avatars/avatar-teacher-boy.jpg'
</script>

{#if !$user.isGuest()}
	{#if place === 'TopBar'}
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
		<div>
			<span
				use:popup={{
					event: 'click',
					target: 'avatarMenu',
					placement: 'right',
				}}
			>
				<button class={'btn-icon variant-filled-primary text-xl'}><IconUser /> </button>
			</span>
			<div class="card variant-filled-surface z-100 p-2 shadow-xl" data-popup="avatarMenu">
				<nav class="list-nav">
					<!-- (optionally you can provde a label here) -->
					<ul>
						<li>
							<a href="/logout" class="btn variant-filled-error"
								><span class="flex-auto">Déconnexion</span></a
							>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	{/if}
{:else}
	<a href="/login" class={'btn-icon variant-filled-tertiary text-xl'}><IconLogin /> </a>
{/if}
