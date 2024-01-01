<script>
	import { fullScreen } from '$lib/stores'
	import PageHeader from '$lib/ui/PageHeader.svelte'
	import Posts from '$lib/ui/Posts.svelte'
	export let data
</script>

<div class="container mx-auto max-w-screen-md p-4">
	{#if !$fullScreen}
		<PageHeader title="Blog" />
	{/if}
	<Posts posts={data.posts} />
</div>
