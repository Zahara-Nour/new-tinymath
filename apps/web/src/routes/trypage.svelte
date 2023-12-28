<script lang="ts">
	import { MyCounterButton } from '@repo/ui';
	import { Avatar } from '@skeletonlabs/skeleton';
	import '@repo/tinymathlive';
	import { Mycomponent } from '@repo/uiskeleton';
</script>

<div class="container mx-auto space-y-8 p-8">
	<h1 class="h1">Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<section>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section>
	<math-field>\frac{1}{3}</math-field>
</div>

<h1>Web</h1>
<MyCounterButton />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Avatar src="https://i.pravatar.cc/" />

<Mycomponent />
