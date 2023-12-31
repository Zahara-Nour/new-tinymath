<script lang="ts">
	import '../../app.pcss'
	import { page } from '$app/stores'
	import {
		fullScreen,
		// user
	} from '$lib/stores'

	import TobBar from '$lib/ui/TobBar.svelte'
	import links from '$lib/navlinks'
	import { AppShell, Drawer, getDrawerStore } from '@skeletonlabs/skeleton'
	import Footer from '$lib/ui/Footer.svelte'
	import Navigation from '$lib/ui/Navigation.svelte'
	import { getLogger } from '$lib/utils'
	import IconFullscreen from '$lib/ui/icons/IconFullscreen.svelte'
	// import { isStudent } from '../../types/type'

	const { info, fail, warn } = getLogger('Layout', 'info')
	let header = ''

	const drawer = getDrawerStore()

	$: url = $page.url.pathname
	$: setPageHeader(url)

	function setPageHeader(url: string) {
		const link = links.find((l) => url.includes(l.url))
		header = link ? link.text : ''
	}

	function openDrawer(): void {
		drawer.open({})
	}

	function closeDrawer(): void {
		drawer.close()
	}
</script>

<svelte:head>
	<title>UbuMaths - Les maths de la chandelle verte</title>
	<meta />
</svelte:head>

<Drawer><Navigation drawerClose={closeDrawer} /></Drawer>

<AppShell slotSidebarLeft="bg-surface-100-800-token" regionPage="relative">
	<svelte:fragment slot="header">
		{#if !url.includes('dashboard') && !$fullScreen}
			<TobBar drawerOpen={openDrawer} />
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		{#if !url.includes('assessment') && !url.includes('dashboard') && !$fullScreen}
			<div id="sidebar-left" class="hidden lg:block lg:w-60">
				<Navigation />
			</div>
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">
		<div id="sidebar-left" class="hidden lg:block" />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<div>
			{#if $fullScreen}
				<button
					class="btn-icon variant-filled-primary"
					on:click={() => fullScreen.update((state) => !state)}
				>
					<IconFullscreen />
				</button>
			{/if}
			<!-- {#if isStudent($user) && $user.assignments?.length && !url.includes('assessment') && !url.includes('dashboard') && !url.includes('jeux')}
				<div class="bg-error-500 z-0 p-4 text-white">
					Tu as <a href="/dashboard">des évaluations</a> à faire !
				</div>
			{/if} -->
		</div>
	</svelte:fragment>

	<!-- Router Slot -->

	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter" />
	<svelte:fragment slot="footer">
		{#if url === '/' && !$fullScreen}
			<Footer />
		{/if}
	</svelte:fragment>
</AppShell>
