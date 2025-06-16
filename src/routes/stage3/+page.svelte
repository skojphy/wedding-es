<script>
	const cafe1 = '/images/cafe1.png';
	const cafe2 = '/images/cafe2.png';
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
</button>

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
</style>
