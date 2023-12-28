<script lang="ts">
	import PageHeader from '$lib/ui/PageHeader.svelte'
	import { getLogger, objectMap } from '$lib/utils'
	import type { Student } from '../../../types/type'
	import Gidouille from '$lib/ui/icons/Gidouille.svelte'
	import { user } from '$lib/stores'
	import type { SupabaseClient } from '@supabase/supabase-js'
	import type { Database } from '../../../types/supabase'
	import VipCards from './VIPCards.svelte'

	export let db: SupabaseClient<Database>

	let { warn, trace, fail } = getLogger('StudentAwardMgmt', 'warn')
	let u = $user as Student

	function handleUpdateGidouilles() {
		u = u
	}
</script>

<PageHeader title="Récompenses" />

<div class="card mt-8">
	<header class="card-header"><h3 class="card-title">Gidouilles</h3></header>
	<section class="p-4">
		<div
			class="bg-surface-500 mb-2 flex w-full max-w-full items-center justify-between rounded-md p-2 text-black shadow-md"
		>
			<div class="flex">
				<div class="mr-2 overflow-hidden text-xl font-bold">
					Gidouilles : {u.gidouilles}
				</div>
				<div class="text-primary-700">
					<Gidouille class="text-white" />
				</div>
			</div>
		</div>
	</section>
</div>

<VipCards on:updateGidouilles={handleUpdateGidouilles} {db} student={u} user={u} />
