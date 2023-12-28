<script lang="ts">
	import Gidouille from '$lib/ui/icons/Gidouille.svelte'
	import IconUsers from '$lib/ui/icons/IconUsers.svelte'
	import UserAvatar from '$lib/ui/UserAvatar.svelte'
	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton'
	import { writable, type Writable } from 'svelte/store'
	import UserMgmt from './UserMgmt.svelte'
	import type { SupabaseClient } from '@supabase/supabase-js'
	import type { Database } from '../../../types/supabase'
	import IconUser from '$lib/ui/icons/IconUser.svelte'
	import UserInfo from './UserInfo.svelte'

	export let db: SupabaseClient<Database>
	let currentTile = 0
</script>

<div class="flex h-full">
	<AppRail background="bg-surface-100-800-token" selected={currentTile}>
		<svelte:fragment slot="lead">
			<AppRailAnchor><a href="/"><Gidouille class=" text-primary-500" /></a></AppRailAnchor>
		</svelte:fragment>
		<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
			<svelte:fragment slot="lead">
				<div class="flex justify-center"><IconUser size="3em" /></div>
			</svelte:fragment>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2"
			><svelte:fragment slot="lead">
				<div class="flex justify-center"><IconUsers size="3em" /></div>
			</svelte:fragment>
		</AppRailTile>
		<svelte:fragment slot="trail">
			<!-- AppRailTiles -->
		</svelte:fragment>
	</AppRail>
	<div class="container mx-auto p-4">
		{#if currentTile === 0}
			<UserInfo />
		{:else if currentTile === 1}
			<UserMgmt {db} />
		{/if}
	</div>
</div>
