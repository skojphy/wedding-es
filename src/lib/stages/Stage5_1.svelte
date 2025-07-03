<script>
	import { goto } from '$app/navigation';
	import { tick } from 'svelte';
	import NextButton from '$components/NextButton.svelte';

	let checked = false;
	let loading = false;

	async function handleCheck() {
		if (checked) {
			loading = true;
			await tick();
			setTimeout(() => {
				goto('/stage5-2');
			}, 1500);
		}
	}
</script>

<div class="stage5">
	<div class="text-container">
		<p>시작하기 전에</p>
		<p>당신이 로봇이 아님을 확인해 주세요.</p>
	</div>
	<div class="captcha-box">
		<label class="checkbox-label">
			<input type="checkbox" class="checkbox" bind:checked on:change={handleCheck} />
			<span class="label">당신은 휴먼입니까?</span>
		</label>
		<span class="captcha-logo">로고</span>
		{#if loading}
			<div class="spinner"></div>
		{/if}
	</div>
</div>

<div class="next-wrapper">
	<NextButton href="/Rf6Kt4Gj" color="#0b9444" />
</div>

<style>
	.stage5 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		background: #f7f2ed;
		padding: 2rem;
		position: relative;
	}

	.text-container {
		position: absolute;
		top: calc(50% - 110px);
		left: 50%;
		transform: translateX(-50%);
		width: 90%;
		max-width: 400px;
		text-align: left;
		font-size: 1.05rem;
	}

	p {
		margin: 0.5rem 0;
	}

	.captcha-box {
		border: 1px solid #ccc;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 400px;
		max-width: 90%;
		background: white;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.checkbox-label {
		display: flex;
		align-items: center;
		flex-grow: 1;
	}

	.checkbox {
		width: 24px;
		height: 24px;
		margin-right: 1rem;
	}

	.label {
		font-weight: bold;
		font-size: 1.1rem;
	}

	.captcha-logo {
		height: 36px;
	}

	.spinner {
		border: 4px solid #f3f3f3;
		border-top: 4px solid #555;
		border-radius: 50%;
		width: 24px;
		height: 24px;
		animation: spin 1s linear infinite;
		margin-left: 1rem;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.next-wrapper {
		position: absolute;
		bottom: 0.7rem;
		right: 0.7rem;
		z-index: 10;
	}
</style>
