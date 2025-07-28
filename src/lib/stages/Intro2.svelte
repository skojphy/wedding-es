<script>
	import { onMount } from 'svelte';
	import NextButton from '$components/NextButton.svelte';
	import HintButton from '$components/HintButton.svelte';
	import Input from '$components/Input.svelte';

	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';

	const year = tweened(2025, { duration: 4600, easing: quadInOut });
	let month = 9;
	let day = 13;

	const weekdays = ['SAT', 'FRI', 'THU', 'WED', 'TUE', 'MON', 'SUN'];
	let currentWeekday = weekdays[0];
	let animationDone = false;

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

		let monthInterval;
		let dayInterval;
		let weekdayInterval;

		const startMonth = month;
		const startDay = day;
		const startWeekday = currentWeekday;

		const monthCycles = Array.from(
			{ length: 8 * 12 },
			(_, i) => ((((month - i - 1) % 12) + 12) % 12) + 1
		);
		const dayCycles = Array.from(
			{ length: 8 * 31 },
			(_, i) => ((((day - i - 1) % 31) + 31) % 31) + 1
		);
		const weekdayCycles = Array(8).fill(weekdays).flat();

		setTimeout(() => {
			year.set(2017);

			const monthStepCount = monthCycles.length;
			const dayStepCount = dayCycles.length;
			const weekdayStepCount = weekdayCycles.length;

			const monthStepInterval = 4400 / monthStepCount;
			const dayStepInterval = 5000 / dayStepCount;
			const weekdayStepInterval = 5000 / weekdayStepCount;

			let monthStep = 0;
			let dayStep = 0;
			let weekdayStep = 0;

			monthInterval = setInterval(() => {
				if (monthStep < monthCycles.length) {
					month = monthCycles[monthStep++];
				} else {
					clearInterval(monthInterval);
					month = ((startMonth - 2 + 12) % 12) + 1;
				}
			}, monthStepInterval);

			dayInterval = setInterval(() => {
				if (dayStep < dayCycles.length) {
					day = dayCycles[dayStep++];
				} else {
					clearInterval(dayInterval);
					day = startDay;
				}
			}, dayStepInterval);

			weekdayInterval = setInterval(() => {
				if (weekdayStep < weekdayCycles.length) {
					currentWeekday = weekdayCycles[weekdayStep++];
				} else {
					clearInterval(weekdayInterval);
					currentWeekday = '   ';
					animationDone = true;
				}
			}, weekdayStepInterval);
		}, 2000);

		setTimeout(() => {
			if (hoursEl) hoursEl.style.animationPlayState = 'paused';
			if (minutesEl) minutesEl.style.animationPlayState = 'paused';
		}, 7000);

		const interval = setInterval(updateClock, 1000);
		return () => {
			clearInterval(interval);
			if (monthInterval) clearInterval(monthInterval);
			if (dayInterval) clearInterval(dayInterval);
			if (weekdayInterval) clearInterval(weekdayInterval);
		};
	});
</script>

<div class="stage-wrapper">
	<div class="clock neumorphism">
		<div bind:this={hoursEl} class="hand hours">
			<div class="hand-inner"></div>
		</div>
		<div bind:this={minutesEl} class="hand minutes">
			<div class="hand-inner"></div>
		</div>
	</div>
	<div class="year neumorphism">
		<div class="text">
			{#each String(Math.round($year)).split('') as char}
				<span class="digit-container">
					<span class="digit-shadow">8</span>
					<span class="digit">{char}</span>
				</span>
			{/each}
		</div>
	</div>
	<div class="date neumorphism">
		<div class="text">
			{#each `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${currentWeekday}`.split('') as char, index}
				<span class="digit-container">
					<span class="digit-shadow" class:quiz={animationDone && index > 5}
						>{index === 2 || index === 5 ? ' ' : '8'}</span
					>
					<span class="digit">{char}</span>
				</span>
			{/each}
		</div>
	</div>

	<div class="button-bar">
		<HintButton hintCode="B7xL1sHz" guide="[영어 3글자]" />
		<Input correctAnswer="SUN" successPath="/Gj7Yk3Ln" />
	</div>
</div>

<style>
	@font-face {
		font-family: 'Segmental';
		src: url('https://db.onlinewebfonts.com/t/ca940c70b4102c14db56ebde1b19f325.woff2')
			format('woff2');
		font-display: swap;
	}

	.stage-wrapper {
		max-width: 480px;
		width: 100%;
		height: 100svh;
		margin: auto;
		position: relative;
		background-color: #f7f2ee;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.neumorphism {
		color: #ff6446;
		background: #f7f2ee;
		box-shadow:
			9px 9px 18px rgba(220, 215, 212, 0.4),
			-9px -9px 18px rgba(255, 255, 255, 0.4);
	}

	.clock {
		width: 60%;
		aspect-ratio: 1 / 1;
		justify-self: center;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-radius: 50%;
		margin: 1.2rem;
		z-index: 0;
		margin-top: 5rem;
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
		animation-delay: 2s;
	}

	.minutes {
		width: 0.6rem;
		height: 35%;
		animation: spin-counter 0.6s linear infinite;
		animation-delay: 2s;
	}

	.year {
		width: 30%;
		min-width: 200px;
	}

	.date {
		width: 50%;
		min-width: 300px;
	}

	.year,
	.date {
		position: relative;
		height: 4rem;
		border-radius: 15px;
		margin: 1.2rem 0;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.text {
		font-family: 'Segmental';
		font-size: 3.5rem;
		text-align: center;
		height: 4.2rem;
		line-height: 4.2rem;

		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 1ch;
		justify-content: center;
		justify-items: center;
		align-items: center;
		gap: 0.2ch;
	}
	.digit,
	.digit-shadow {
		display: inline-block;
		width: 1ch;
		text-align: center;
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

	.year .text,
	.date .text {
		position: relative;
		z-index: 2;
	}

	.digit-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: grid;
		align-items: center;
	}

	.digit-shadow {
		grid-area: 1 / 1;
		justify-self: center;
		color: rgba(0, 0, 0, 0.07);
		z-index: 1;
		pointer-events: none;
	}

	.digit {
		grid-area: 1 / 1;
		z-index: 2;
	}

	.quiz {
		color: rgba(255, 100, 70, 0.3);
	}
</style>
