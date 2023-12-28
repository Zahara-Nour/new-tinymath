<script lang="ts">
	import Gidouille from '$lib/ui/icons/Gidouille.svelte'
	import IconAward from '$lib/ui/icons/IconAward.svelte'
	import UserAvatar from '$lib/ui/UserAvatar.svelte'
	import { AppRail, AppRailAnchor, AppRailTile, Avatar } from '@skeletonlabs/skeleton'
	import type { SupabaseClient } from '@supabase/supabase-js'
	import { writable, type Writable } from 'svelte/store'
	import type { Database } from '../../../types/supabase'
	import AssessmentMgmt from './AssessmentMgmt.svelte'
	import TeacherAwardMgmt from './TeacherAwardMgmt.svelte'
	import IconAlert from '$lib/ui/icons/IconAlert.svelte'
	import TeacherWarningMgmt from './TeacherWarningMgmt.svelte'
	import { user } from '$lib/stores'
	import IconPost from '$lib/ui/icons/IconPost.svelte'
	import PostMgmt from './PostMgmt.svelte'
	import IconListStatus from '$lib/ui/icons/IconListStatus.svelte'
	import TeacherUsersMgmt from './TeacherUsersMgmt.svelte'
	import IconUsers from '$lib/ui/icons/IconUsers.svelte'
	import IconUser from '$lib/ui/icons/IconUser.svelte'
	import UserInfo from './UserInfo.svelte'
	import IconLogout from '$lib/ui/icons/IconLogout.svelte'

	export let db: SupabaseClient<Database>

	let currentTile = 0
	const avatar = '/images/avatars/avatar-teacher-boy.jpg'
</script>

<div class="flex h-full">
	<AppRail background="bg-surface-100-800-token" selected={currentTile}>
		<svelte:fragment slot="lead">
			<AppRailAnchor
				><a href="/"
					><div class="flex justify-center text-base">
						<Gidouille class=" text-primary-500" />
					</div></a
				></AppRailAnchor
			>
		</svelte:fragment>
		<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
			<svelte:fragment slot="lead">
				<div class="flex justify-center">
					<Avatar src={avatar} width="w-12" rounded="rounded-full" />
				</div>
			</svelte:fragment>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2"
			><svelte:fragment slot="lead">
				<div class="flex justify-center text-3xl"><IconListStatus /></div>
			</svelte:fragment>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3"
			><svelte:fragment slot="lead">
				<div class="flex justify-center text-3xl"><IconAward /></div>
			</svelte:fragment>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-4" value={3} title="tile-4"
			><svelte:fragment slot="lead">
				<div class="flex justify-center text-3xl"><IconAlert /></div>
			</svelte:fragment>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-5" value={4} title="tile-5"
			><svelte:fragment slot="lead">
				<div class="flex justify-center text-3xl"><IconPost /></div>
			</svelte:fragment>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-6" value={5} title="tile-6"
			><svelte:fragment slot="lead">
				<div class="flex justify-center text-3xl"><IconUsers /></div>
			</svelte:fragment>
		</AppRailTile>
		<svelte:fragment slot="trail">
			<AppRailAnchor
				><a href="/logout"
					><div class="flex justify-center text-xl">
						<IconLogout class=" text-primary-500" />
					</div></a
				></AppRailAnchor
			>
		</svelte:fragment>
	</AppRail>

	<div class="container mx-auto p-4">
		{#if currentTile === 0}
			<UserInfo />
		{:else if currentTile === 1}
			<AssessmentMgmt {db} />
		{:else if currentTile === 2}
			<TeacherAwardMgmt {db} />
		{:else if currentTile === 3}
			<TeacherWarningMgmt {db} />
		{:else if currentTile === 4}
			<PostMgmt {db} />
		{:else if currentTile === 5}
			<TeacherUsersMgmt {db} />
		{/if}
	</div>
</div>
