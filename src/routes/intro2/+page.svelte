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

<div class="clock" style="background: #F7F2EE;">
	<div bind:this={hoursEl} class="hand hours">
		<div class="hand-inner"></div>
	</div>
	<div bind:this={minutesEl} class="hand minutes">
		<div class="hand-inner"></div>
	</div>
	<div class="marker">
		<span class="marker__1"></span>
		<span class="marker__2"></span>
		<span class="marker__3"></span>
		<span class="marker__4"></span>
	</div>
</div>

<style>
	.clock {
		width: 70vw;
		height: 70vw;
		justify-self: center;
		box-shadow:
			0.3rem 0.3rem 0.6rem #c8d0e7,
			-0.2rem -0.2rem 0.5rem #ffffff;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		background: #f7f2ee;
	}

	.hand {
		position: absolute;
		bottom: 50%;
		transform-origin: bottom;
		border-radius: 0.2rem;
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
		border-radius: 0.2rem;
	}

	.hours {
		width: 0.4rem;
		height: 25%;
		animation: spin-counter 2.3s linear infinite;
	}

	.minutes {
		width: 0.4rem;
		height: 35%;
		animation: spin-counter 0.6s linear infinite;
	}

	.marker {
		width: 95%;
		height: 95%;
		border-radius: 50%;
		position: relative;
		box-shadow:
			inset 0.2rem 0.2rem 0.5rem #c8d0e7,
			inset -0.2rem -0.2rem 0.5rem #ffffff;
	}

	.marker::after {
		content: '';
		width: 60%;
		height: 60%;
		position: absolute;
		box-shadow:
			inset 1px 1px 1px #c8d0e7,
			inset -1px -1px 1px #ffffff;
		border-radius: 50%;
		top: 20%;
		left: 20%;
		filter: blur(1px);
	}

	.marker__1,
	.marker__2,
	.marker__3,
	.marker__4 {
		position: absolute;
		border-radius: 0.1rem;
		box-shadow:
			inset 1px 1px 1px #c8d0e7,
			inset -1px -1px 1px #ffffff;
	}

	.marker__1,
	.marker__2 {
		width: 0.6vw;
		height: 1.5vw;
		left: 50%;
		transform: translateX(-50%);
	}

	.marker__3,
	.marker__4 {
		width: 1.5vw;
		height: 0.6vw;
		top: 50%;
		transform: translateY(-50%);
	}

	.marker__1 {
		top: 2%;
	}
	.marker__2 {
		bottom: 2%;
	}
	.marker__3 {
		left: 2%;
	}
	.marker__4 {
		right: 2%;
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
