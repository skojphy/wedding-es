<script>
	import NextButton from '$components/NextButton.svelte';
	import { goto } from '$app/navigation';

	function handleNext() {
		goto('/stage1');
	}
</script>

<div class="entry-page">
	<p class="question">저희의 이야기가<br />궁금하셨나요?</p>
	<div class="next-wrapper">
		<NextButton href="/intro1" />
	</div>
</div>

<style>
	.entry-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
		text-align: center;
		position: relative;
	}

	.question {
		font-family: 'UhBeeSe_hyun', cursive;
		font-size: 1.8rem;
		line-height: 1.6;
		margin-bottom: 3rem;
	}

	.next-wrapper {
		position: absolute;
		bottom: 0.7rem;
		right: 0.7rem;
		z-index: 10;
	}
</style>
