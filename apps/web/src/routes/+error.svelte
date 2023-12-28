<script lang="ts">
	import '../app.pcss'
</script>

<div class="flex h-full flex-col items-center justify-center bg-white px-5">
	<h2 class="h2 text-primary-500 text-center">Page introuvable !</h2>
	<a href="/"><img alt="error404" src="/images/spiral-pi.png" class="pi-spiral max-h-96" /></a>
	<h3 class="h3 text-black">
		As-tu regardé à la 2 567 241<sup>ème</sup> décimale ?
	</h3>
</div>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.pi-spiral {
		max-height: 400px;
		animation: spin infinite 20s linear;
	}
</style>
