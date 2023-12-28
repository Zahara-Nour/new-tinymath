<script lang="ts">
	import ChatMessage from '$lib/ui/ChatMessage.svelte'
	import { Avatar, getToastStore } from '@skeletonlabs/skeleton'
	import type { ChatCompletionRequestMessage } from 'openai'
	import { SSE } from 'sse.js'
	import ubuRoi from '$lib/images/ubu-roi.jpg'
	import ubu from '$lib/images/pere-ubu-head.jpg'
	import { user } from '$lib/stores'

	const toastStore = getToastStore()
	let answer = ''
	let query = ''
	let elemChat: HTMLElement
	let pending = false
	let chatMessages: ChatCompletionRequestMessage[] = []

	function handleError<T>(err: T) {
		pending = false
		query = ''
		answer = ''
		console.error(err)
		toastStore.trigger({
			message: "Une erreur est survenue. La limite d'utilisation est peut-être dépassée : " + err,
			background: 'bg-error-500',
		})
	}

	let messageFeed = [
		{
			id: 0,
			role: 'assistant',
			avatar: 0,
			name: 'Ubu',
			content: "De par ma chandèle verte, comment puis-je t'aider ?",
			color: 'variant-soft-primary',
		},
	]

	function scrollChatBottom(behavior?: ScrollBehavior): void {
		elemChat.scrollTo({ top: elemChat.scrollHeight, behavior })
	}

	function updateMessageFeed() {
		messageFeed = [
			messageFeed[0],
			...chatMessages.map((message) => ({
				id: messageFeed.length,
				role: message.role,
				avatar: message.role === 'assistant' ? 0 : 48,
				name: message.role === 'assistant' ? 'Ubu' : $user.firstname,
				content: message.content || '',
				color: 'variant-soft-primary',
			})),
		]
	}

	async function submitQuery() {
		pending = true
		chatMessages = [...chatMessages, { role: 'user', content: query }]
		updateMessageFeed()
		query = ''

		// Smoothly scroll to the bottom of the feed
		setTimeout(() => {
			scrollChatBottom('smooth')
		}, 0)

		const eventSource = new SSE('/api/chat', {
			headers: {
				'Content-Type': 'application/json',
			},
			payload: JSON.stringify({
				messages: chatMessages.map((message) =>
					message.role === 'user'
						? {
								...message,
								content:
									'Réponds avec ta nouvelle personnalité de Père Ubu,  à la question : " ' +
									message.content +
									'"',
							}
						: message,
				),
			}),
		})

		eventSource.addEventListener('error', handleError)

		// answer being received (it's a stream)
		eventSource.addEventListener('message', (e) => {
			try {
				pending = false
				if (e.data === '[DONE]') {
					chatMessages = [...chatMessages, { role: 'assistant', content: answer }]
					updateMessageFeed()
					answer = ''
					setTimeout(() => {
						scrollChatBottom('smooth')
					}, 0)
					return
				}

				const completionResponse = JSON.parse(e.data)
				const [{ delta }] = completionResponse.choices

				if (delta.content) {
					answer = (answer ?? '') + delta.content
				}
				setTimeout(() => {
					scrollChatBottom('smooth')
				}, 0)
			} catch (err) {
				handleError(err)
			}
		})
		eventSource.stream()
	}
</script>

<div class="flex w-full flex-col items-center gap-12 px-8 pt-4">
	<div>
		<h1 class="h1">Père Ubu</h1>
	</div>
	<div>
		<img src={ubuRoi} alt="Père Ubu" width="150px" class="float-left pb-2 pr-2" />
		<p class="my-2">
			Hé là, moi c'est Père Ubu, le roi des absurdes et le maître de la
			<a href="http://college-de-pataphysique.fr/presentation/">'Pataphysique'</a> ! Je suis un personnage
			fictif créé par le dramaturge français Alfred Jarry au XIXe siècle.
		</p>
		<p class="my-2">
			Je suis connu pour mon comportement excentrique, mon langage étrange et ma nature
			imprévisible. Mon cri de guerre est "Merdre !"
		</p>
		<p class="my-2">
			Je peux essayer de t'aider en Maths, mais dès fois je dis d'<i>hénaurmes</i>
			bêtises ! Il vaut alors mieux que tu demandes à M. Le Jolly, qui a toujours raison.
		</p>
	</div>

	<div class="grid h-full grid-rows-[1fr_auto] gap-1">
		<div bind:this={elemChat} class="bg-surface-500/30 overflow-y-auto p-4">
			<section class="max-h-[400px] w-full space-y-4 p-4">
				{#each messageFeed as message, i}
					<ChatMessage role={message.role} message={message.content} />
				{/each}
				{#if answer}
					<ChatMessage role="assistant" message={answer} />
				{/if}
				{#if pending}
					<ChatMessage role="assistant" message="....." />
				{/if}
			</section>
		</div>
		<div class="p-4">
			<div
				class="input-group input-group-divider rounded-container-token grid-cols-[auto_1fr_auto]"
			>
				<button class="input-group-shim">+</button>
				<textarea
					bind:value={query}
					class="border-0 bg-transparent p-2 outline-none ring-0"
					name="prompt"
					id="prompt"
					placeholder="message..."
					rows="1"
				/>
				<button
					on:click={submitQuery}
					class={query ? 'variant-filled-primary' : 'input-group-shim'}
					disabled={pending}><i class="fa-solid fa-paper-plane" /></button
				>
			</div>
		</div>
	</div>
</div>
