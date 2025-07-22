<script>
	import { onMount, onDestroy } from 'svelte';

	let selectedIndex = null;
	const labels = ['1st', '2nd', '3rd', '4th'];
	const texts = [
		['은하수', '제주'],
		['놋네눨느', '100일'],
		['광주', '크리스마스'],
		['라이온즈', '포항']
	];

	const colors = ['green', 'red', 'blue', 'purple'];

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
			<div class={`highlight-thumb ${colors[index]} ${colors[index]}-background`}>
				<div class="inner-circle">{index + 1}</div>
			</div>
			<span>{label}</span>
		</button>
	{/each}
</section>

{#if selectedIndex !== null}
	<div
		class="modal-overlay"
		role="dialog"
		aria-modal="true"
		tabindex="0"
		on:click={closeModal}
		on:keydown={(e) => (e.key === 'Enter' || e.key === ' ' ? closeModal() : null)}
	>
		<div
			class="modal-content"
			role="button"
			tabindex="0"
			on:click|stopPropagation
			on:keydown={(e) => (e.key === 'Enter' || e.key === ' ' ? closeModal() : null)}
		>
			<button class="modal-close" on:click={closeModal} aria-label="Close modal">×</button>
			<div class="modal-image-box">
				<div class={`modal-item ${colors[selectedIndex]} ${colors[selectedIndex]}-border`}>
					{texts[selectedIndex][0]}
				</div>
				<div class={`modal-item ${colors[selectedIndex]} ${colors[selectedIndex]}-border`}>
					{texts[selectedIndex][1]}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.highlights {
		display: flex;
		justify-content: flex-start;
		gap: 1rem;
		padding: 0.5rem;
		overflow-x: auto;
		width: 100%;
		box-sizing: border-box;
	}

	.highlight {
		text-align: center;
		font-size: 0.75rem;
		border: none;
		background-color: transparent;
	}

	.highlight-thumb {
		position: relative;
		width: 62px;
		height: 62px;
		border-radius: 50%;
		background: #ccc;
		margin-bottom: 0.25rem;
		border: 3px solid white;
		box-shadow: 0 0 0 3px #eee;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.inner-circle {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
		color: inherit;
		font-weight: bold;
		font-size: 1.4rem;
	}

	.green {
		color: #24d56d;
	}

	.red {
		color: #ff6446;
	}

	.blue {
		color: #5553e9;
	}

	.purple {
		color: #ff3797;
	}

	.green-background {
		background-color: #24d56d;
	}

	.red-background {
		background-color: #ff6446;
	}

	.blue-background {
		background-color: #5553e9;
	}

	.purple-background {
		background-color: #ff3797;
	}

	.green-border {
		border-color: #24d56d;
	}

	.red-border {
		border-color: #ff6446;
	}

	.blue-border {
		border-color: #5553e9;
	}

	.purple-border {
		border-color: #ff3797;
	}

	.modal-item {
		font-size: 1.5rem;
		font-weight: bold;
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
		width: 100%;
		max-width: 480px; /* match main container max width */
		height: 100%;
		max-height: 100vh; /* match main container height */
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		background: transparent;
		box-sizing: border-box;
		background-color: black;
	}
	.modal-image-box {
		width: 200px;
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0.5rem;
		box-sizing: border-box;
	}

	.modal-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		font-weight: bold;
	}

	.modal-item + .modal-item {
		margin-top: -5px;
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
