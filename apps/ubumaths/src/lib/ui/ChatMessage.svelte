<script lang="ts">
	import type { ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from 'openai'
	import ubu from '$lib/images/pere-ubu-head.jpg'
	import { Avatar } from '@skeletonlabs/skeleton'
	import { user } from '$lib/stores'
	export let message: string
	export let role: string
</script>

{#if role === 'assistant'}
	<div class="grid grid-cols-[auto_1fr] gap-2">
		<Avatar src={ubu} width="w-12" />
		<div class="card variant-filled-secondary space-y-2 rounded-tl-none p-4">
			<header class="flex items-center justify-between">
				<p class="font-bold">Père Ubu</p>
			</header>
			<p>{message}</p>
		</div>
	</div>
{:else}
	<div class="grid grid-cols-[1fr_auto] gap-2">
		<div class="card variant-filled-tertiary space-y-2 rounded-tr-none p-4">
			<header class="flex items-center justify-between">
				<p class="font-bold">{$user.firstname}</p>
			</header>
			<p>{message}</p>
		</div>
		<Avatar src="https://i.pravatar.cc/?img=14" width="w-12" />
	</div>
{/if}
