<script>
	import Hint1 from '$lib/hints/Hint1.svelte';
	import Hint2 from '$lib/hints/Hint2.svelte';
	import Hint3 from '$lib/hints/Hint3.svelte';
	import Hint4 from '$lib/hints/Hint4.svelte';
	import Hint5 from '$lib/hints/Hint5.svelte';
	import Hint6 from '$lib/hints/Hint6.svelte';
	import HintModal from '$components/HintModal.svelte';

	export let hintCode;
	export let guide = '';

	const hintMap = {
		B7xL1sHz: Hint1,
		mz9Yv3Rt: Hint2,
		Qw4Dj2Zm: Hint3,
		Xn8Rf6Th: Hint4,
		Lp3Az7Uc: Hint5
	};

	$: HintComponent = hintMap[hintCode];

	let isModalOpen = false;

	const toggleModal = () => {
		isModalOpen = !isModalOpen;
	};
</script>

<button class="hint-button" on:click={toggleModal}>HINT</button>

{#if isModalOpen}
	<HintModal on:close={() => (isModalOpen = false)} {guide}>
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
