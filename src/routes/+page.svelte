<script>
	import { onMount } from 'svelte';

	let weddingDate = new Date('2025-09-13T00:00:00');
	let weddingPlace = '대한믹국 어디어디 결혼식장';

	let daysLeft = 0;
	onMount(() => {
		const today = new Date();
		daysLeft = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));
	});

	const canEnter = daysLeft <= 20;
</script>

<div class="main-container">
	<h1 style="font-family: 'Georgia', serif; color: #d4af37; margin-bottom: 1.5rem;">
		청첩장 방탈출 제목
	</h1>

	<div class="info-section">
		<div class="info-item">💒 날짜: {weddingDate.toLocaleDateString()}</div>
		<div class="info-item">📍 장소: {weddingPlace}</div>
	</div>

	<div class="countdown">
		{daysLeft > 0 ? `D-${daysLeft}` : 'TODAY'}
	</div>

	<a href="/intro" class={`enter-link ${canEnter ? '' : 'disabled'}`}>
		{canEnter ? '축하하러 가기' : 'comming soon'}
	</a>
</div>

<style>
	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-top: 5rem;
		background-color: #fffaf0;
		padding: 2rem;
		border-radius: 10px;
		/* box-shadow 제거 */
	}

	.info-section {
		margin-bottom: 2rem;
		font-family: 'Georgia', serif;
		font-size: 1.2rem;
		color: #555;
	}

	.info-item {
		margin-bottom: 0.5rem;
	}

	.countdown {
		font-size: 1.5rem;
		color: #d4af37;
		margin-bottom: 1.5rem;
	}

	.enter-link {
		background-color: #d4af37;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 25px;
		text-decoration: none;
		display: inline-block;
		text-align: center;
		margin-top: 1rem;
		font-size: 1.1rem;
		font-family: 'Georgia', serif;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	.enter-link.disabled {
		background-color: #ccc;
		pointer-events: none;
	}

	.enter-link:hover {
		background-color: #c89b37;
	}
</style>
