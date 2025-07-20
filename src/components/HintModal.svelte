<script>
	import { createEventDispatcher } from 'svelte';

	export let guide = '';

	const dispatch = createEventDispatcher();

	const closeModal = () => {
		dispatch('close');
	};
</script>

<div class="modal-backdrop">
	<div class="hint-modal">
		<button class="close-button" on:click={closeModal}>×</button>
		<div class="hint-title">HINT</div>
		<div class="hint-content">
			<slot />
			{#if guide}
				<div class="hint-guide">{guide}</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100svh;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hint-modal {
		background-color: #dbeafe; /* light blue */
		border-radius: 20px;
		padding: 2rem 1rem;
		width: 80%;
		max-width: 400px;
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
		z-index: 999999;
		position: relative;
		margin-top: -2rem;
	}

	.hint-title {
		text-align: center;
		font-weight: bold;
		font-size: 1.8rem;
		color: #ff5733;
		margin-bottom: 1rem;
	}

	.hint-content {
		background-color: white;
		padding: 1.5rem;
		border-radius: 1rem;
		font-size: 1.1rem;
		line-height: 1.6;
		color: #333;
		position: relative;
	}

	.close-button {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: transparent;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		color: #333;
	}

	.hint-guide {
		position: absolute;
		bottom: 0.5rem;
		right: 1rem;
		font-size: 1rem;
		color: #555;
		opacity: 0.7;
	}
</style>
