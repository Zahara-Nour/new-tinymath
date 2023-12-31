<script lang="ts">
	import { incorrect_color, prepareMathlive, touchDevice, user } from '$lib/stores'
	import { onMount } from 'svelte'
	import { invalidate } from '$app/navigation'
	import { Modal, Toast, getToastStore, initializeStores, storePopup } from '@skeletonlabs/skeleton'
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom'

	import type { Session } from '@supabase/supabase-js'
	import { createUser } from '$lib/users'
	import { player } from '$lib/navadraStore'
	import { defaultPlayerProfile, playersManager } from './navadra/js/player'
	import { monstersManager } from './navadra/js/monsters'
	import { get } from 'svelte/store'
	import { getLogger } from '$lib/utils.js'
	// import { mdc_colors } from '$lib/colors'

	export let data

	let { info, fail, warn } = getLogger('Layout', 'info')
	let header = ''

	// modals, popups and drawer initialization
	initializeStores()
	const toastStore = getToastStore()
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow })

	onMount(() => {
		//  mathlive dynamic import
		prepareMathlive()

		// detects a touch screen device at the first touch
		//  https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685
		window.addEventListener(
			'touchstart',
			function onFirstTouch() {
				touchDevice.set(true)
				window.removeEventListener('touchstart', onFirstTouch, false)
				info('Touch device detected.')
			},
			false,
		)

		// Synchronizing the page store
		// The usage of invalidate tells sveltekit that the root +layout.ts load function should be executed whenever the session updates to keep the page store in sync.
		// If some data is not updated on signin/signout you can fall back to invalidateAll().
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => subscription.unsubscribe()
	})

	$: ({ supabase, session, userProfile } = data)
	$: manageSession(session)

	function manageSession(session: Session | null) {
		console.log('session', session)
		console.log('userProfile', data.userProfile)
		data.errors.forEach((error) =>
			toastStore.trigger({
				message: error,
				background: 'bg-error-500',
			}),
		)

		if (session) {
			if (data.userProfile.role !== 'guest' && session.user.id !== get(user).auth_id) {
				toastStore.trigger({
					message: `Bienvenue ${data.userProfile.firstname || data.userProfile.email}`,
					background: 'bg-success-500',
				})
				info(`User ${data.userProfile.email} signed in.`)
				if (data.playerProfile) {
					const monsters = data.monstersProfiles?.map(monstersManager.hydrateMonster) || []
					player.set(playersManager.createPlayer(data.playerProfile, monsters))
				}
			}
		} else {
			// Signed out
			if (!$user.isGuest()) {
				info(`User ${$user.firstname || $user.email} signed out.`)
				toastStore.trigger({
					message: `Bye ${data.userProfile.firstname || data.userProfile.email}`,
					background: 'bg-success-500',
				})
				player.set(playersManager.createPlayer(defaultPlayerProfile))
			}
		}
		user.set(createUser(data.userProfile))
	}

	// $: if ($modeCurrent) {
	// 	incorrect_color.set(mdc_colors['red-400'])
	// } else {
	// 	incorrect_color.set(mdc_colors['red-200'])
	// }
</script>

<svelte:head>
	<title>UbuMaths - Les maths de la chandelle verte</title>
	<meta />
</svelte:head>

<Toast />
<Modal />

<slot />
