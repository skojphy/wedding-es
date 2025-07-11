<script>
	import { goto } from '$app/navigation';
	import { tick } from 'svelte';
	import NextButton from '$components/NextButton.svelte';

	const captchaLogo = '/images/captchaLogo.png';

	let checked = false;
	let loading = false;
	let success = false;

	async function handleCheck() {
		if (checked) {
			loading = true;
			success = false;
			await tick();
			setTimeout(() => {
				loading = false;
				success = true;
				setTimeout(() => {
					goto('/Rf6Kt4Gj');
				}, 1000);
			}, 1800);
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
		{#if !loading && !success}
			<img src={captchaLogo} alt="captcha logo" class="captcha-logo" />
		{:else if loading}
			<div class="spinner"></div>
		{:else if success}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="check-icon"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
				/>
			</svg>
		{/if}
	</div>
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
		width: 100%;
		max-width: 400px;
		text-align: left;
		font-size: 1.05rem;
		margin-bottom: 1rem;
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
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
		background: white;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
		padding-left: 0;
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

	.check-icon {
		color: #28a745;
		margin-left: 1rem;
	}
</style>
