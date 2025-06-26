<script>
	import NextButton from '$components/NextButton.svelte';
</script>

<div class="intro1-page">
	<div class="content">
		<pre class="face">
 ------------------------------------------------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
 ---------------*###+--------=####=--------------- 
 ---------------#@@@*--------=@@@@=--------------- 
 ---------------#@@@*--------=@@@@=--------------- 
 ---------------#@@@*--------=@@@@=--------------- 
 ---------------#@@@*--------=@@@@=--------------- 
 ---------------#@@@*--------=@@@@=--------------- 
 ---------------#@@@*--------=@@@@=--------------- 
 ---------------#@@@*--------=@@@@=--------------- 
 ---------------#@@@*--------=@@@@=--------------- 
 ---------------#@@@*--------=@@@@=--------------- 
 ---------------#@@@*--------=@@@@=--------------- 
 ---------------#%%%*--------=%%%%=--------------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
 ---=++++---------------------------------++++=--- 
 ---*@@@#---------------------------------%@@@+--- 
 ---*@@@#---------------------------------%@@@+--- 
 ---*@@@#---------------------------------%@@@+--- 
 ---*@@@#---------------------------------%@@@+--- 
 ---*@@@#---------------------------------%@@@+--- 
 ---*@@@#=================================%@@@+--- 
 -------*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+------- 
 -------*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+------- 
 -------*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+------- 
 -------*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+------- 
 -------*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+------- 
 -------=*********************************=------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
 ------------------------------------------------- 
		</pre>
		<p class="text">그럼 지금부터<br />게임을 시작하겠습니다.</p>
	</div>
	<div class="next-wrapper">
		<NextButton href="/" color="#0b9444" />
	</div>
</div>

<style>
	.intro1-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
		text-align: center;
		position: relative;
		background: black;
		color: #00ff66;
		font-family: 'Courier New', Courier, monospace;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.face {
		font-size: 0.5rem;
		line-height: 1.2;
		position: relative;
		color: #00ff66;
		text-shadow:
			2px 0 red,
			-2px 0 blue;
		animation: glitch 1.5s infinite;
	}

	@keyframes glitch {
		0% {
			transform: translate(0, 0);
			text-shadow:
				2px 0 red,
				-2px 0 blue;
		}
		5% {
			transform: translate(-1px, 1px) skewX(-0.2deg);
			text-shadow:
				-2px -1px red,
				2px 1px blue;
		}
		10% {
			transform: translate(0.5px, -0.5px);
			text-shadow:
				3px 0 red,
				-3px 0 blue;
		}
		15% {
			transform: translate(-0.5px, 0.5px);
			text-shadow:
				-1px 2px red,
				1px -2px blue;
		}
		20% {
			transform: translate(1px, -1px);
			text-shadow:
				1px -1px red,
				-1px 1px blue;
		}
		30% {
			transform: translate(-2px, 1px);
			text-shadow:
				-2px 1px red,
				2px -1px blue;
		}
		40% {
			transform: translate(0, 0);
			text-shadow:
				0 0 red,
				0 0 blue;
		}
		55% {
			transform: translate(-1px, 1px);
			text-shadow:
				2px 2px red,
				-2px -2px blue;
		}
		70% {
			transform: translate(1px, -1px);
		}
		85% {
			transform: translate(-1px, -2px);
		}
		100% {
			transform: translate(0, 0);
			text-shadow:
				2px 0 red,
				-2px 0 blue;
		}
	}

	.text {
		font-size: 1.4rem;
		font-family: 'UhBeeSe_hyun', cursive;
		line-height: 1.6;
		margin: 1rem;
	}

	.next-wrapper {
		position: absolute;
		bottom: 0.7rem;
		right: 0.7rem;
		z-index: 10;
	}

	@media (prefers-reduced-motion: reduce) {
		.face {
			animation: none;
			text-shadow: none;
		}
	}
</style>
