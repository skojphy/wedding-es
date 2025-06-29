<script>
	import { onMount } from 'svelte';

	let hoursEl, minutesEl;

	function rotation(target, val) {
		target.style.transform = `rotate(${val}deg)`;
	}

	function updateClock() {
		const now = new Date();
		let h = (now.getHours() % 12) + now.getMinutes() / 59;
		let m = now.getMinutes();
		let s = now.getSeconds();

		h *= 30;
		m *= 6;
		s *= 6;

		rotation(hoursEl, h);
		rotation(minutesEl, m);
	}

	onMount(() => {
		updateClock();
		const interval = setInterval(updateClock, 1000);
		return () => clearInterval(interval);
	});
</script>

<div class="clock">
	<div bind:this={hoursEl} class="hand hours">
		<div class="hand-inner"></div>
	</div>
	<div bind:this={minutesEl} class="hand minutes">
		<div class="hand-inner"></div>
	</div>
	<!-- <div class="marker">
		<span class="marker__1"></span>
		<span class="marker__2"></span>
		<span class="marker__3"></span>
		<span class="marker__4"></span>
	</div> -->
</div>

<style>
	.clock {
		width: 70%;
		aspect-ratio: 1 / 1;
		justify-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-radius: 50%;
		background: linear-gradient(145deg, #f2f2f2, #ffffff);
		box-shadow:
			50px 50px 100px #dcdcdc,
			-50px -50px 100px #ffffff;
	}

	.hand {
		position: absolute;
		bottom: 50%;
		transform-origin: bottom;
		border-radius: 1000px;
		z-index: 200;
	}

	.hand-inner {
		position: absolute;
		bottom: 1rem; /* offset from the pivot */
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: calc(100% - 1rem); /* slightly shorter than the base hand */
		background: #ff6446;
		border-radius: 1000px;
	}

	.hours {
		width: 0.6rem;
		height: 25%;
		animation: spin-counter 2.3s linear infinite;
	}

	.minutes {
		width: 0.6rem;
		height: 35%;
		animation: spin-counter 0.6s linear infinite;
	}

	@keyframes spin-counter {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-360deg);
		}
	}
</style>
