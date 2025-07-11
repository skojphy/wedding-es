<script>
	import { onMount, onDestroy } from 'svelte';

	let selectedIndex = null;
	const labels = ['1st', '2nd', '3rd', '4th'];
	const texts = ['은하수 + 제주', '놋네눨느 + 100일', '광주 + 크리스마스', '라이온즈 + 포항'];

	const colors = ['#2d9e65', '#ff6446', '#5653e9', '#d1d175'];

	const handlePopState = (event) => {
		if (selectedIndex !== null) selectedIndex = null;
	};
	const openModal = (idx) => {
		selectedIndex = idx;
		history.pushState({ modal: true }, '');
	};
	const closeModal = () => {
		selectedIndex = null;
		if (history.state && history.state.modal) history.back();
	};

	onMount(() => window.addEventListener('popstate', handlePopState));
	onDestroy(() => window.removeEventListener('popstate', handlePopState));
</script>

<section class="highlights">
	{#each labels as label, index}
		<button class="highlight" on:click={() => openModal(index)}>
			<div class="highlight-thumb"></div>
			<span>{label}</span>
		</button>
	{/each}
</section>

{#if selectedIndex !== null}
	<div class="modal-overlay" on:click={closeModal} role="dialog" aria-modal="true">
		<div
			class="modal-content"
			on:click|stopPropagation
			style="background: {colors[selectedIndex]};"
		>
			<button class="modal-close" on:click={closeModal} aria-label="Close modal">×</button>
			<span class="modal-text">{texts[selectedIndex]}</span>
		</div>
	</div>
{/if}

<style>
	.highlights {
		display: flex;
		gap: 0.75rem;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		overflow-x: auto;
		width: 100%;
	}

	.highlight {
		text-align: center;
		font-size: 0.75rem;
		border: none;
		background-color: transparent;
	}

	.highlight-thumb {
		width: 62px;
		height: 62px;
		border-radius: 50%;
		background: #ccc;
		margin-bottom: 0.25rem;
		border: 3px solid white;
		box-shadow: 0 0 0 3px #eee;
	}

	.highlights .highlight:nth-child(1) .highlight-thumb {
		background: #2d9e65;
	}
	.highlights .highlight:nth-child(2) .highlight-thumb {
		background: #ff6446;
	}
	.highlights .highlight:nth-child(3) .highlight-thumb {
		background: #5653e9;
	}
	.highlights .highlight:nth-child(4) .highlight-thumb {
		background: #d1d175;
	}

	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}
	.modal-content {
		position: relative;
		width: 80vw;
		height: 80vw;
		max-width: 80vh;
		max-height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
	}
	.modal-text {
		color: white;
		font-size: 1.7rem;
		text-align: center;
	}
	.modal-close {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: transparent;
		border: none;
		font-size: 2rem;
		color: white;
		cursor: pointer;
	}
</style>
