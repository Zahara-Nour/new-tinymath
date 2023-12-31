<script lang="ts">
	import Gidouille from '$lib/ui/icons/Gidouille.svelte'
	import IconAward from '$lib/ui/icons/IconAward.svelte'
	import IconUsers from '$lib/ui/icons/IconUsers.svelte'
	import UserAvatar from '$lib/ui/UserAvatar.svelte'
	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton'
	import type { SupabaseClient } from '@supabase/supabase-js'
	import { writable, type Writable } from 'svelte/store'
	import type { Database } from '../../../types/supabase'
	import AssignmentsMgmt from './AssignmentsMgmt.svelte'
	import StudentAwardMgmt from './StudentAwardMgmt.svelte'
	import IconAlert from '$lib/ui/icons/IconAlert.svelte'
	import StudentWarningMgmt from './StudentWarningMgmt.svelte'
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
		<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3"
			><svelte:fragment slot="lead">
				<div class="flex justify-center"><IconAward size="3em" /></div>
			</svelte:fragment>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-4" value={3} title="tile-4"
			><svelte:fragment slot="lead">
				<div class="flex justify-center"><IconAlert size="3em" /></div>
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
			<AssignmentsMgmt />
		{:else if currentTile === 2}
			<StudentAwardMgmt {db} />
		{:else if currentTile === 3}
			<StudentWarningMgmt {db} />
		{/if}
	</div>
</div>
