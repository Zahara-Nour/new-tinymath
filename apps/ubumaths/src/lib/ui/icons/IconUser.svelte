<script>
	export let size = '1.1em'
	export let stroke = 'currentColor'
</script>

<div class={$$props.class}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xml:space="preserve"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		version="1.1"
		viewBox="0 0 24 24"
		height={size}
		width={size}
		{stroke}
		fill={stroke}
		stroke-width="0.2"
	>
		<path
			d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1
		12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
		/>
	</svg>
</div>
