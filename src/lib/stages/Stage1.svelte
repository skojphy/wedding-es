<script lang="ts">
	import { onMount } from 'svelte';
	import Input from '../../components/Input.svelte';
	import HintButton from '$components/HintButton.svelte';

	let sliderValue = 50;

	let container;
	let isDragging = false;
	let initialWidth: number;

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

		// Capture container width once on load
		initialWidth = container.clientWidth;
	});
</script>

<div class="stage-wrapper">
	<div
		class="img-comp-container"
		bind:this={container}
		on:mouseleave={stopDrag}
		role="presentation"
	>
		<div class="img-layer img-right"></div>
		<div
			class="img-layer img-left"
			style="clip-path: inset(0 calc({100 - sliderValue}%) 0 0);"
		></div>

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
	<HintButton hintCode="mz9Yv3Rt" guide="[한글 2글자]" />
	<Input correctAnswer="합정" successPath="/Qw9Rt2Vm" />
</div>

<style>
	.stage-wrapper {
		max-width: 480px;
		width: 100%;
		position: relative;
		min-height: 100vh;
	}

	.img-comp-container {
		position: relative;
		width: 100%;
		height: 100vh;
		user-select: none;
		overflow: hidden;
		display: flex;
		align-items: flex-end;
	}

	.img-layer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top center;
	}

	.img-left {
		background-image: url('/images/cyworld1.png');
		z-index: 1;
	}

	.img-right {
		background-image: url('/images/cyworld2.png');
		z-index: 0;
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
		position: fixed;
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
		max-width: 480px;
		width: 100%;
		margin: 0 auto;
	}
</style>
