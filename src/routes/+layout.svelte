<script>
	import { onMount } from 'svelte';
</script>

<div class="layout-wrapper">
	<!-- <header class="app-header">
		<div class="logo">LOGO</div>
		<button class="menu-button">☰</button>
	</header> -->

	<main class="intro-container">
		<slot />
	</main>

	<!-- <footer class="app-footer">
		<div class="input-wrapper">
			<input type="text" class="answer-input" placeholder="요일을 입력하세요 (예: SUN)" />
			<button class="submit-button">입력</button>
		</div>
	</footer> -->
</div>

<style>
	.layout-wrapper {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: visible;
		font-family: 'Roboto', sans-serif;
		display: flex;
		flex-direction: column;
		background: #f7f9fc;
	}

	.app-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background: #ffffff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.logo {
		font-weight: bold;
		font-size: 1.2rem;
	}

	.menu-button {
		background: none;
		border: none;
		font-size: 1.5rem;
	}

	.intro-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 1rem;
		background: transparent;
	}

	/* Clock styling */
	.clock {
		width: 200px;
		height: 200px;
		border: 4px solid #333;
		border-radius: 50%;
		position: relative;
		margin-bottom: 2rem;
	}

	.hand {
		position: absolute;
		bottom: 50%;
		left: 50%;
		width: 4px;
		height: 40%;
		background: #333;
		transform-origin: bottom center;
		border-radius: 2px;
	}

	.app-footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		padding: 1rem;
		background: #ffffff;
		box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
	}

	.answer-input {
		width: 100%;
		padding: 0.75rem;
		font-size: 1rem;
		border: 1px solid #ccc;
		border-radius: 6px;
	}

	.input-wrapper {
		display: flex;
		gap: 0.5rem;
	}
	.submit-button {
		padding: 0.75rem 1.5rem;
		background: #6e8efb;
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		font-family: inherit;
		flex-shrink: 0;
	}

	@media (min-width: 768px) {
		.layout-wrapper {
			background: #e0e0e0;
			align-items: center;
		}

		.intro-container {
			background: white;
			max-width: 480px;
			width: 100%;
			margin: auto;
			box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
		}
	}
</style>
