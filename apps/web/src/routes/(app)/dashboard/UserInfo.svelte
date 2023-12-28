<script>
	import { user } from '$lib/stores'
	import PageHeader from '$lib/ui/PageHeader.svelte'
	import { Avatar } from '@skeletonlabs/skeleton'

	const avatar = '/images/avatars/avatar-teacher-boy.jpg'
</script>

<div class="flex items-start justify-between">
	<div class="flex flex-col">
		<PageHeader title="User infos" />
		<p>{$user.firstname} {$user.lastname}</p>
		<p>{$user.email}</p>
	</div>

	<Avatar src={avatar} width="w-48" rounded="rounded-full" />
</div>
