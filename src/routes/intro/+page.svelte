<script>
	import { onMount } from 'svelte';

	let weddingDate = new Date('2025-09-13T00:00:00');
	let firstMeetingDate = new Date('2017-03-20T00:00:00');

	let currentYear = weddingDate.getFullYear();
	let currentMonth = weddingDate.getMonth() + 1;
	let currentDay = weddingDate.getDate();
	let showFirstMeeting = false;

	const animateDateChange = () => {
		let yearInterval = setInterval(() => {
			if (currentYear <= 2017) {
				clearInterval(yearInterval);
				return;
			}
			currentYear--;
		}, 200);

		let monthCycles = 0;
		let monthInterval = setInterval(() => {
			if (monthCycles >= 3) {
				clearInterval(monthInterval);
				return;
			}
			currentMonth--;
			if (currentMonth < 1) {
				currentMonth = 2;
				monthCycles++;
			}
		}, 80);

		let dayCycles = 0;
		let dayInterval = setInterval(() => {
			if (dayCycles >= 1) {
				clearInterval(dayInterval);
				setTimeout(() => {
					showFirstMeeting = true;
				}, 300);
				return;
			}
			currentDay--;
			if (currentDay < 1) {
				currentDay = 16;
				dayCycles++;
			}
		}, 30);
	};

	onMount(() => {
		setTimeout(() => {
			animateDateChange();
		}, 1000);
	});
</script>

<div class="intro-container">
	<div class="date">
		{currentYear}.{String(currentMonth).padStart(2, '0')}.{String(currentDay).padStart(2, '0')}
	</div>
	<div class="main-text">
		{#if !showFirstMeeting}
			<div class="fade-out">우리 결혼합니다</div>
		{:else}
			<a href="/start" class="fade-in link-button"> 우리가 처음 만난 날 &gt; </a>
		{/if}
	</div>
</div>
<a href="/start" class="start-link">시작하기 🚀</a>

<style>
	.intro-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f9f9f9;
		font-family: 'Georgia', serif;
	}

	.date {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: #d4af37;
	}

	.main-text {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 3rem;
		overflow: hidden;
	}

	.fade-out {
		opacity: 1;
		animation: fadeOut 2s forwards;
	}

	.fade-in {
		opacity: 0;
		animation: fadeIn 2s forwards;
	}

	@keyframes fadeOut {
		to {
			opacity: 0;
		}
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	.start-link {
		display: inline-block;
		margin-top: 2rem;
		padding: 0.75rem 1.5rem;
		background-color: #d4af37;
		color: white;
		border-radius: 25px;
		text-decoration: none;
		font-size: 1.2rem;
		font-family: 'Georgia', serif;
		transition: background-color 0.3s ease;
	}

	.start-link:hover {
		background-color: #c89b37;
	}

	.link-button {
		display: inline-block;
		color: white;
		background-color: #d4af37;
		text-decoration: none;
		font-size: 1.2rem;
		padding: 0.4rem 1rem;
		border-radius: 20px;
		transition:
			background-color 0.3s,
			transform 0.2s;
		margin-top: 1rem;
		overflow: hidden;
		line-height: 1.2rem;
	}

	.link-button:hover {
		background-color: #b99730;
		transform: translateY(-2px);
	}
</style>
