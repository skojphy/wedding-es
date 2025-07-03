<script>
	import NextButton from '$components/NextButton.svelte';
	import Input from '../../components/Input.svelte';

	const cafe1 = '/images/cafe1.png';
	const cafe2 = '/images/cafe2.png';
	const tapIcon = '/images/tap_icon.svg';
	let isFlipped = false;

	function toggleImage() {
		isFlipped = !isFlipped;
	}
</script>

<button type="button" class="flip-container" on:click={toggleImage} aria-label="이미지 전환">
	<div class="flipper {isFlipped ? 'flipped' : ''}">
		<div class="front">
			<img src={cafe1} alt="Cafe 1" />
		</div>
		<div class="back">
			<img src={cafe2} alt="Cafe 2" />
		</div>
	</div>
	<img src={tapIcon} alt="탭 아이콘" class="tap-icon" />
</button>

<div class="answer-container">
	<Input
		onSubmit={(value) => {
			console.log('Submitted answer:', value);
		}}
	/>
</div>

<div class="next-wrapper">
	<NextButton href="/Lp3Az7Uc" color="#0b9444" />
</div>

<style>
	button.flip-container {
		all: unset;
		cursor: pointer;
		display: block;
		width: 100vw;
		height: 100vh;
		perspective: 1000px;
	}

	.flipper {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 1s;
		transform-style: preserve-3d;
	}

	.flipped {
		transform: rotateY(180deg);
	}

	.front,
	.back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
	}

	.front img,
	.back img {
		width: 100vw;
		height: auto;
		object-fit: contain;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}

	.back {
		transform: rotateY(180deg);
	}

	.answer-container {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 1rem;
		background: transparent;
		z-index: 3;
		box-sizing: border-box;
	}

	.tap-icon {
		position: absolute;
		top: 45%;
		left: 80%;
		width: 20%;
		transform: translate(-50%, -50%);
		animation: blink 2s infinite ease-in-out;
		z-index: 2;
		pointer-events: none;
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.next-wrapper {
		position: absolute;
		bottom: 0.7rem;
		right: 0.7rem;
		z-index: 10;
	}
</style>
