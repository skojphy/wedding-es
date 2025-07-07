<script>
	import DialogBox from '$components/DialogBox.svelte';
	import Input from '$components/Input.svelte';
	import HintButton from '$components/HintButton.svelte';

	const dialogTexts = [
		'(아... 로또도 안 됐겠다... 사업 시작하기 좋은 날이네...)',
		'(해 보지도 않은 걸로 사업을 할 순 없는데... 그럼 아무래도...)',
		'오빠, 저 로또 번호 좀 읽어 봐.'
	];

	let currentStep = 0;

	const nextDialog = () => {
		if (currentStep < dialogTexts.length) {
			currentStep += 1;
		}
	};

	const visibleLottoCounts = [0, 1, 3, 7];

	const lottoNumbers = ['14', '1', '18', '18', '25', '14', '5'];
</script>

<div class="stage4-background">
	<div class="lottery-numbers">
		{#each lottoNumbers.map( (num, idx) => (currentStep > 0 && idx < visibleLottoCounts[currentStep] ? num : '') ) as displayNum}
			<span class="lotto-number">{displayNum}</span>
		{/each}
	</div>
</div>

<button class="dialog-wrapper" on:click={nextDialog} type="button" aria-label="다음 대사 보기">
	{#if currentStep < dialogTexts.length}
		<DialogBox name="박지현" text={dialogTexts[currentStep]} avatar="/images/lotto_profile.png" />
	{/if}
</button>

{#if currentStep === 3}
	<div class="button-bar">
		<HintButton hintCode="Lp3Az7Uc" />
		<Input correctAnswer="marryme" successPath="/Hj5Kq1Np" />
	</div>
{/if}

<style>
	.stage4-background {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('/images/lottery.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom;
		z-index: 0;
	}

	.lottery-numbers {
		position: absolute;
		bottom: calc(973 / 982 * 100vw);
		width: 100%;
		display: flex;
		justify-content: center;
		gap: calc(100vw / (982 / 5));
		transform: translateX(1.8%);
		z-index: 1;
	}

	.lotto-number {
		width: min(calc(72 / 982 * 100vw));
		height: min(calc(72 / 982 * 100vw));
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		border-radius: 50%;
		font-weight: bold;
		font-size: calc(100vw / 25);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	button.dialog-wrapper {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		display: flex;
		justify-content: center;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
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
</style>
