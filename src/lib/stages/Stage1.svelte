<script lang="ts">
	import { onMount } from 'svelte';
	import Input from '../../components/Input.svelte';
	import HintButton from '$components/HintButton.svelte';

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

<div class="stage-wrapper">
	<div
		class="img-comp-container"
		bind:this={container}
		on:mouseleave={stopDrag}
		role="presentation"
	>
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
</div>

<div class="button-bar">
	<HintButton hintCode="B7xL1sHz" />
	<Input correctAnswer="합정" successPath="/Qw4Dj2Zm" />
</div>

<style>
	.img-comp-container > .img-comp-overlay:first-of-type {
		position: relative;
	}

	.stage-wrapper {
		max-width: 480px;
		width: 100%;
		margin: auto;
		position: relative;
	}

	.img-comp-container {
		position: relative;
		width: 100%;
		height: auto;
		user-select: none;
		overflow: hidden;
	}

	.img-comp-overlay:first-of-type .img-comp-img {
		display: block;
		width: 100%;
		height: auto;
	}

	.img-comp-overlay {
		height: 100%;
		overflow: hidden;
	}

	.img-comp-overlay:not(:first-of-type) {
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		/* width is set inline via style attribute */
	}

	.img-comp-overlay:not(:first-of-type) .img-comp-img {
		position: absolute;
		top: 0;
		left: 0;
		width: auto;
		height: 100%;
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
