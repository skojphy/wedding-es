<script>
	import { onMount, tick } from 'svelte';
	import Clock from '../../components/Clock.svelte';
	import { goto } from '$app/navigation';

	const letters = ['?', ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];
	let selectedLetters = ['?', '?', '?'];
	let lockWheels = [null, null, null];
	$: isCorrect = selectedLetters.join('') === 'SUN';

	const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	let dayDisplay = 'SAT';
	let showLock = false;

	let year = 2025;
	let dateDisplay = '09-13';

	function animateYear() {
		let targetYear = 2017;
		let steps = year - targetYear;
		let stepTime = 2500 / steps;
		let interval = setInterval(() => {
			if (year <= targetYear) {
				clearInterval(interval);
				return;
			}
			year--;
		}, stepTime);
	}

	function animateDate() {
		let flickerCount = 0;
		const flicker = setInterval(() => {
			const mm = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
			const dd = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
			dateDisplay = `${mm}-${dd}`;
			dayDisplay = days[Math.floor(Math.random() * days.length)];
			flickerCount++;
			if (flickerCount >= 50) {
				clearInterval(flicker);
				dateDisplay = '08-13';
				dayDisplay = 'SAT';
				showLock = true;
				tick().then(() => {
					[0, 1, 2].forEach((idx) => {
						const wheel = lockWheels[idx];
						const letter = selectedLetters[idx];
						const pos = letters.indexOf(letter) * 50;
						wheel.scrollTo({ top: pos, behavior: 'smooth' });
					});
				});
			}
		}, 50);
	}

	onMount(() => {
		setTimeout(() => {
			animateYear();
			animateDate();
		}, 1500);
	});

	function handleScroll(event, idx) {
		const wheel = event.currentTarget;
		// determine selected letter index based on scroll position
		const letterIndex = Math.round(wheel.scrollTop / 50);
		selectedLetters[idx] = letters[letterIndex] || '?';
		// visual click effect
		wheel.classList.add('click');
		clearTimeout(wheel._clickTimeout);
		wheel._clickTimeout = setTimeout(() => {
			wheel.classList.remove('click');
		}, 100);
	}
</script>

<div class="intro-container">
	<Clock />
	<div class="date-display">
		<div class="year digital">{year}</div>
		<div class="date digital">{dateDisplay}</div>
		{#if !showLock}
			<div class="day digital">{dayDisplay}</div>
		{:else}
			<div class="lock-container {isCorrect ? 'correct' : ''}">
				{#each [0, 1, 2] as idx}
					<div
						class="lock-wheel"
						bind:this={lockWheels[idx]}
						on:scroll={(e) => handleScroll(e, idx)}
					>
						{#each letters as L}
							<button
								type="button"
								class="lock-item {L === selectedLetters[idx] ? 'selected' : ''}"
								on:click={() => (selectedLetters[idx] = L)}
							>
								{L}
							</button>
						{/each}
					</div>
				{/each}
			</div>
			{#if isCorrect}
				<button class="next-button" on:click={() => goto('/sunday')}> Next </button>
			{/if}
		{/if}
	</div>
</div>

<style>
	.intro-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: 1rem;
		background: transparent;
		font-family: 'Roboto', sans-serif;
	}

	.date-display {
		margin-top: 24px;
		text-align: center;
		font-size: 1.8rem;
		font-weight: bold;
		color: #333;
	}

	.date-display .year {
		font-size: 2rem;
	}

	.digital {
		font-family: 'Roboto Mono', monospace;
		background: transparent;
		color: #006400;
		padding: 0.2em 0;
		border-radius: 0;
		letter-spacing: 0.2em;
		margin: 0.1em;
	}
	.lock-container {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
	}
	.lock-wheel {
		width: 40px;
		height: 50px;
		overflow-y: auto;
		scroll-snap-type: y mandatory;
		border: 1px solid #333;
		border-radius: 4px;
		transition: transform 0.1s ease;
	}

	.lock-wheel {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
	.lock-wheel::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera */
	}
	.lock-item {
		/* reset button defaults */
		appearance: none;
		-webkit-appearance: none;
		background: transparent;
		border: none;
		padding: 0;
		margin: 0;
		font: inherit;
		color: inherit;

		/* existing styles */
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		scroll-snap-align: center;
		font-family: 'Roboto Mono', monospace;
		cursor: pointer;
	}
	.lock-item.selected {
		background: transparent;
		color: inherit;
	}
	.correct .lock-item {
		background: red;
		color: #fff;
	}

	.next-button {
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background: #333;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-family: inherit;
	}
</style>
