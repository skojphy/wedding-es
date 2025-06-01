<script lang="ts">
	import { onMount } from 'svelte';

	let sliderValue = 50;
	let cyworld1 = '/images/cyworld1.png';
	let cyworld2 = '/images/cyworld2.png';

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
		// calculate percentage based on mouse X within container
		let x = event.clientX - rect.left;
		let pct = (x / rect.width) * 100;
		if (pct < 0) pct = 0;
		if (pct > 100) pct = 100;
		sliderValue = pct;
	};

	onMount(() => {
		window.addEventListener('mousemove', doDrag);
		window.addEventListener('mouseup', stopDrag);
	});
</script>

<div class="img-comp-container" bind:this={container} on:mouseleave={stopDrag} role="presentation">
	<!-- Bottom image -->
	<img src={cyworld2} alt="cyworld 2" class="img-comp-img" />
	<!-- Overlay top image (left side) -->
	<div class="img-comp-overlay" style="width: {sliderValue}%">
		<img src={cyworld1} alt="cyworld 1" class="img-comp-img" />
	</div>
	<!-- Slider handle -->
	<div
		class="img-slider"
		role="slider"
		tabindex="0"
		aria-valuenow={sliderValue}
		aria-valuemin="0"
		aria-valuemax="100"
		on:mousedown={startDrag}
		style="left: {sliderValue}%;"
	>
		<div class="img-slider-handle">
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7 10L3 14L7 18"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M3 14H21"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M17 6L21 10L17 14"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	</div>
</div>

<!-- Range input to control sliderValue -->
<input type="range" min="0" max="100" bind:value={sliderValue} class="slider" />

<style>
	.img-comp-container {
		position: relative;
		width: 100%;
		max-width: 600px;
		user-select: none;
		overflow: visible;
	}

	.img-comp-img {
		display: block;
		width: 100%;
		height: auto;
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
		width: 2px;
		background: #fff;
		cursor: ew-resize;
		transform: translateX(-1px);
		z-index: 2;
	}

	.img-slider-handle {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 30px;
		height: 30px;
		background: #fff;
		border: 2px solid #000;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 10px;
		line-height: 1;
		z-index: 3;
	}

	.slider {
		width: 100%;
		margin-top: 1rem;
	}

	/* Ensure overlay image keeps full height and is clipped by parent width */
	.img-comp-overlay .img-comp-img {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: auto;
	}
</style>
