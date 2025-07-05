<script>
	import Hint1 from '$lib/hints/hint1.svelte';
	import HintModal from '$components/HintModal.svelte';

	export let hintCode;

	let HintComponent;
	if (hintCode === 'B7xL1sHz') {
		HintComponent = Hint1;
	}

	let isModalOpen = false;

	const handleClick = () => {
		isModalOpen = !isModalOpen;
		console.log('wefewsfws', isModalOpen);
	};
</script>

<button class="hint-button" on:click={handleClick}>HINT</button>

{#if isModalOpen}
	<HintModal on:close={() => (isModalOpen = false)}>
		<svelte:component this={HintComponent} />
	</HintModal>
{/if}

<style>
	.hint-button {
		background-color: #ff6347;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		font-size: 1rem;
		cursor: pointer;

		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
