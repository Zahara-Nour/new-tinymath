<script lang="ts">
	export let stroke = 'currentColor'
	export let size = '2em'
</script>

<span class=" ${$$props.class}">
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		version="1.1"
		{stroke}
		fill="currentColor"
		fill-rule="evenodd"
		stroke-width="1"
		stroke-opacity="1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g>
			<path
				d="M8 8H4V4h4zm6-4h-4v4h4zm6 0h-4v4h4zM8 10H4v4h4zm6 0h-4v4h4zm6 0h-4v4h4zM8 16H4v4h4zm6 0h-4v4h4zm6 0h-4v4h4z"
			/>
		</g>
	</svg>
</span>
