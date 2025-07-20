<script>
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		localStorage.setItem('lastPage', window.location.pathname);
	});
</script>

<div class="layout-wrapper">
	<main class="intro-container">
		<slot />
	</main>
</div>

<style>
	@font-face {
		font-family: 'Pretendard-Regular';
		src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
			format('woff');
		font-weight: 400;
		font-style: normal;
	}
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		width: 100%;
		font-family: 'Pretendard-Regular', sans-serif;
	}
	.layout-wrapper {
		position: relative;
		width: 100%;
		min-height: 100svh;
		overflow-x: hidden;
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

	@supports (-webkit-touch-callout: none) {
		html,
		body {
			height: -webkit-fill-available;
		}
		.layout-wrapper {
			min-height: -webkit-fill-available;
		}
	}
</style>
