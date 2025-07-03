<script lang="ts">
	import { onMount } from 'svelte';
	import Input from '../../components/Input.svelte';
	import NextButton from '$components/NextButton.svelte';

	let sliderValue = 50;
	const cyworld1 = '/images/cyworld1.png';
	const cyworld2 = '/images/cyworld2.png';

	let container;
	let isDragging = false;

	const startDrag = (event) => {
		isDragging = true;
		updateSlider(event);
	};

	const stopDrag = () => {
		isDragging = false;
	};

	const doDrag = (event) => {
		if (isDragging) {
			updateSlider(event);
		}
	};

	const updateSlider = (event) => {
		const rect = container.getBoundingClientRect();
		let clientX = event.touches ? event.touches[0].clientX : event.clientX;
		let x = clientX - rect.left;
		let pct = (x / rect.width) * 100;
		if (pct < 0) pct = 0;
		if (pct > 100) pct = 100;
		sliderValue = pct;
	};

	onMount(() => {
		window.addEventListener('mousemove', doDrag);
		window.addEventListener('mouseup', stopDrag);
		window.addEventListener('touchmove', doDrag);
		window.addEventListener('touchend', stopDrag);
	});
</script>

<div class="img-comp-container" bind:this={container} on:mouseleave={stopDrag} role="presentation">
	<!-- Bottom image -->
	<div class="img-comp-overlay" style="width: 100%">
		<img src={cyworld2} alt="cyworld 2" class="img-comp-img" />
	</div>
	<!-- Overlay top image (left side) -->
	<div class="img-comp-overlay" style="width: {sliderValue}%">
		<img src={cyworld1} alt="cyworld 1" class="img-comp-img" />
	</div>
	<!-- Slider handle -->
	<button
		class="img-slider"
		on:mousedown={startDrag}
		on:touchstart={startDrag}
		style="left: {sliderValue}%;"
		aria-label="Slide to compare images"
	>
		<div class="img-slider-handle">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m18 9l3 3l-3 3m-3-3h6M6 9l-3 3l3 3m-3-3h6"
				/>
			</svg>
		</div>
	</button>
</div>

<div class="answer-container">
	<Input
		on:submit={(event) => {
			const value = event.detail;
			// Put logic here to handle the submitted answer value
			console.log('Submitted answer:', value);
		}}
	/>
</div>

<div class="next-wrapper">
	<NextButton href="/Qw4Dj2Zm" color="#0b9444" />
</div>

<style>
	.img-comp-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		user-select: none;
		overflow: hidden;
		object-fit: cover;
	}

	.img-comp-img {
		display: block;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
	}

	.img-comp-overlay {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		overflow: hidden;
	}

	.img-slider {
		position: absolute;
		top: 0;
		bottom: 0;
		background: transparent;
		cursor: ew-resize;
		transform: translateX(-50%);
		z-index: 2;
		border: none;
		padding: 0;
	}

	.img-slider-handle {
		width: 40px;
		height: 40px;
		background: #fff;
		border: 2px solid #000;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Ensure overlay image keeps full height and is clipped by parent width */
	.img-comp-overlay .img-comp-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
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

	.next-wrapper {
		position: absolute;
		bottom: 0.7rem;
		right: 0.7rem;
		z-index: 10;
	}
</style>
