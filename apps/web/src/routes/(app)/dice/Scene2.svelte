<script lang="ts">
	import { T, useFrame } from '@threlte/core'
	import { interactivity } from '@threlte/extras'
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
	import { useLoader } from '@threlte/core'
	import { spring, tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	export let kx = 0
	export let ky = 0
	export let kz = 0

	const rotation_x = tweened((kx * (1 + 8) * Math.PI) / 2, {
		duration: 3000,
		easing: cubicOut,
	})
	const rotation_y = tweened((ky * (1 + 4) * Math.PI) / 2, {
		duration: 3000,
		easing: cubicOut,
	})
	const rotation_z = tweened((kz * (1 + 4) * Math.PI) / 2, {
		duration: 3000,
		easing: cubicOut,
	})

	$: rotation_x.set((kx * (1 + 8) * Math.PI) / 2)
	$: rotation_y.set((ky * (1 + 8) * Math.PI) / 2)
	$: rotation_z.set((kz * (1 + 8) * Math.PI) / 2)

	const gltf = useLoader(GLTFLoader).load('/models/dice/scene.gltf')
	// const gltf = useLoader(GLTFLoader).load('/models/shiba/scene.gltf')

	interactivity()

	const scale = spring(0.3)

	let rotation = 0
	// useFrame((state, delta) => {
	// 	rotation += delta
	// })
</script>

<T.PerspectiveCamera
	makeDefault
	position={[20, 0, 0]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0)
	}}
/>
<T.DirectionalLight position={[10, 3, 7]} />

{#if $gltf}
	<T
		is={$gltf.scene}
		position.y={1}
		rotation.x={$rotation_x}
		rotation.y={$rotation_y}
		rotation.z={$rotation_z}
		scale={$scale}
		on:pointerenter={() => scale.set(0.3)}
		on:pointerleave={() => scale.set(0.3)}
	/>
{/if}

<!-- 2 : 0 0 0 -->
<!-- 1 : 0 Math.PI / 2 0 -->
<!-- 5 : 0 Math.PI 0 -->
<!-- 6 : 0 -Math.PI 0 -->
<!-- 3 : 0 0 Math.PI  -->
<!-- 4 : 0 0 -Math.PI  -->
