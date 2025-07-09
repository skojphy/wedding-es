<script>
	import Input from '../../components/Input.svelte';
	import HintButton from '$components/HintButton.svelte';

	const cafe1 = '/images/cafe1.png';
	const cafe2 = '/images/cafe2.png';
	const tapIcon = '/images/tap_icon.svg';
	let isFlipped = false;

	function toggleImage() {
		isFlipped = !isFlipped;
	}
</script>

<div class="stage-wrapper">
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
</div>

<div class="button-bar">
	<HintButton hintCode="Qw4Dj2Zm" />
	<Input correctAnswer="LIKE" successPath="/Xn8Rf6Th" />
</div>

<style>
	.stage-wrapper {
		max-width: 480px;
		width: 100%;
		margin: auto;
		position: relative;
	}

	button.flip-container {
		all: unset;
		cursor: pointer;
		display: block;
		width: 100%;
		height: auto;
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
		width: 100%;
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

	.button-bar {
		position: absolute;
		bottom: 1.7rem;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1.7rem;
		box-sizing: border-box;
		z-index: 10;
		gap: 1rem;
	}
</style>
