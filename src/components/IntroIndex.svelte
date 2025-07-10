<script>
	import NextButton from '$components/NextButton.svelte';

	export let title = '';
	export let introImage = '';
	export let introImageAlt = '';
	export let eventText = '';
	export let nextHref = '';

	const backGroundImage = '/images/introBackground.png';
</script>

<div class="stage-wrapper">
	<p class="stage-title">{title}</p>
	<div class="background" style="background-image: url({backGroundImage});"></div>
	<div class="image-container">
		<img src={introImage} alt={introImageAlt} />
		<div class="event-text">"{eventText}"</div>
	</div>
</div>

<div class="button-bar">
	<NextButton href={nextHref} color="#ff6347">NEXT</NextButton>
</div>

<style>
	@font-face {
		font-family: 'DOSMyungjo';
		src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSMyungjo.woff')
			format('woff');
		font-weight: normal;
		font-style: normal;
	}

	.stage-title {
		position: absolute;
		top: 0.5rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		font-family: 'DOSMyungjo', sans-serif;
		color: #d8ff92;
		font-size: 1.5rem;
	}
	.stage-wrapper {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	.background {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		z-index: -1;
	}

	.image-container {
		position: relative;
		max-width: 480px;
		width: 80%;
		margin: 0 auto;
		top: 15vh;
		text-align: center;
	}

	.image-container img {
		width: 100%;
		display: block;
		border-radius: 16px;
	}

	.event-text {
		margin-top: 1rem;
		font-size: 1.25rem;
		color: #fff;
	}

	.button-bar {
		position: absolute;
		bottom: 2rem;
		right: 1.5rem;
		left: auto;
	}
</style>
