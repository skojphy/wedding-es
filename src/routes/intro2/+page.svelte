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
	<div bind:this={hoursEl} class="hand hours"></div>
	<div bind:this={minutesEl} class="hand minutes"></div>
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

	.hours {
		width: 0.4rem;
		height: 25%;
		background: #ff6446;
	}

	.minutes {
		width: 0.4rem;
		height: 35%;
		background: #ff6446;
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
		width: 0.2rem;
		height: 0.6rem;
		left: 5.6rem;
	}

	.marker__3,
	.marker__4 {
		width: 0.6rem;
		height: 0.2rem;
		top: 5.6rem;
	}

	.marker__1 {
		top: 2%;
	}
	.marker__2 {
		top: 98%;
		transform: translateY(-0.6rem);
	}
	.marker__3 {
		left: 2%;
	}
	.marker__4 {
		left: 98%;
		transform: translateX(-0.6rem);
	}
</style>
