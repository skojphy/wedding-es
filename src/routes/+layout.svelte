<script>
	import { onMount } from 'svelte';
</script>

<div class="layout-wrapper">
	<main class="intro-container">
		<slot />
	</main>
</div>

<style>
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		width: 100%;
	}
	.layout-wrapper {
		position: relative;
		width: 100%;
		min-height: 100vh;
		overflow-x: hidden;
		font-family: 'Roboto', sans-serif;
		display: flex;
		flex-direction: column;
		background: #e0e0e0;
	}

	.intro-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 480px;
		margin: auto;
		background: white;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
		position: relative;
		z-index: 1;
	}

	@media (min-width: 768px) {
		.layout-wrapper {
			background: #e0e0e0;
			align-items: center;
		}
	}
</style>
