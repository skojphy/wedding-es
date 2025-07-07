<script>
	import { onMount } from 'svelte';
	import NextButton from '$components/NextButton.svelte';
	import HintButton from '$components/HintButton.svelte';
	import Input from '$components/Input.svelte';

	let hoursEl, minutesEl;

	const rotation = (target, val) => {
		target.style.transform = `rotate(${val}deg)`;
	};

	const updateClock = () => {
		const now = new Date();
		let h = (now.getHours() % 12) + now.getMinutes() / 59;
		let m = now.getMinutes();
		let s = now.getSeconds();

		h *= 30;
		m *= 6;
		s *= 6;

		rotation(hoursEl, h);
		rotation(minutesEl, m);
	};

	onMount(() => {
		updateClock();
		const interval = setInterval(updateClock, 1000);
		return () => clearInterval(interval);
	});
</script>

<div class="clock neumorphism">
	<div bind:this={hoursEl} class="hand hours">
		<div class="hand-inner"></div>
	</div>
	<div bind:this={minutesEl} class="hand minutes">
		<div class="hand-inner"></div>
	</div>
</div>

<div class="year neumorphism"><span class="text">2025</span></div>
<div class="date neumorphism"><span class="text">09-13 SAT</span></div>

<div class="button-bar">
	<HintButton hintCode="B7xL1sHz" />
	<Input correctAnswer="SUN" successPath="/mz9Yv3Rt" />
</div>

<style>
	.neumorphism {
		background: #f7f2ee;
		box-shadow:
			-16px -16px 20px rgb(220, 215, 212, 0.4),
			16px 16px 20px rgb(255, 255, 255, 0.4);

		color: #ff6446;
	}

	.clock {
		width: 70%;
		aspect-ratio: 1 / 1;
		justify-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-radius: 50%;
		margin: 1.4rem;
		z-index: 0;
	}

	.hand {
		position: absolute;
		bottom: 50%;
		transform-origin: bottom;
		border-radius: 1000px;
		z-index: 20;
	}

	.hand-inner {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: calc(100% - 1rem);
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
	.year {
		width: 50%;
	}

	.date {
		width: 80%;
	}

	.year,
	.date {
		height: 10vh;
		border-radius: 15px;
		margin: 1.4rem 0;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.text {
		font-size: 3.5rem;
		text-align: center;
		height: 10vh;
		line-height: 8vh;
	}

	@keyframes spin-counter {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-360deg);
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
