<script lang="ts">
	import { Toast, getToastStore } from '@skeletonlabs/skeleton'
	import { Pulse } from 'svelte-loading-spinners'
	import type { ActionData, PageData } from './$types'

	export let form: ActionData
	export let data: PageData

	const toastStore = getToastStore()
	let pending = false

	if (form?.error) {
		toastStore.trigger({
			message: form.error,
			background: 'bg-error-500',
		})
	}

	if (data.session?.user) {
		toastStore.trigger({
			message: 'Vous êtes déjà connecté en tant que ' + data.session.user.email,
			background: 'bg-error-500',
		})
	}

	$: if (form) pending = false
</script>

<h1>Inscription</h1>
{#if !data.session?.user}
	<div class="mt-16 flex flex-col items-center justify-center">
		<div class="card w-96 max-w-full p-4">
			<form name="myform" action="?/register" method="POST" class="auth-form">
				<label class="label" for=""> Email </label>
				<input class="input" type="text" name="email" />
				<label class="label mt-4" for=""> Password </label>
				<input class="input" type="password" name="password" />
				<div class="flex justify-center">
					<button
						disabled={pending}
						on:click={() => {
							pending = true
							document.myform.submit()
						}}
						class="btn variant-filled-primary mt-4"
						>{#if pending}pending{:else}Register{/if}</button
					>
				</div>
			</form>
		</div>
		{#if pending}
			<span class="mt-8">
				<Pulse size="60" color="#ffc400" unit="px" duration="1s" />
			</span>
		{/if}
	</div>
{/if}

<Toast />
