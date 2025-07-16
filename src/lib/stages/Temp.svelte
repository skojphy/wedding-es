<script>
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { userNickname } from '$lib/stores';
	import NextButton from '$components/NextButton.svelte';

	let nickname = '';
	let error = '';
	let showNicknameInput = false;
	let nicknameInput;

	const handleNext = () => {
		if (!nickname.trim().length) {
			alert('이름 또는 닉네임을 입력해 주세요.');
			nicknameInput?.focus();
			return;
		}
		userNickname.set(nickname);
		localStorage.setItem('nickname', nickname);
		goto('/g4Pz8Kq2');
	};
</script>

<div class="entry-page">
	{#if !showNicknameInput}
		<div class="content">
			<p class="date">2025년 9월 13일</p>
			<p class="question">결혼을 앞둔 저희의 이야기,<br />들어보시겠어요?</p>
		</div>
	{:else}
		<div class="content">
			<div class="nickname-line">
				<input
					class="nickname-input"
					bind:value={nickname}
					placeholder="이름/닉네임을 입력해 주세요."
					bind:this={nicknameInput}
				/>
				<span class="suffix">님께</span>
			</div>
			<p class="question">저희의 이야기를 전해 드릴게요.</p>
		</div>
	{/if}
</div>

<div class="button-bar">
	{#if !showNicknameInput}
		<div class="agree-button-container">
			<button
				class="agree-button"
				on:click={() => {
					showNicknameInput = true;
				}}
				tabindex="0"
			>
				<div class="pill">YES!!</div>
				<div class="circle right">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h14m-4 4l4-4m-4-4l4 4"
						/>
					</svg>
				</div>
			</button>
		</div>
	{:else}
		<NextButton color="#666666" textColor="#ffffff" on:click={handleNext} href="" />
	{/if}
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

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.date {
		color: #f25a44;
		font-size: 1.3rem;
		font-weight: 400;
	}

	.question {
		font-size: 1.3rem;
		line-height: 1.6;
		margin: 0;
	}

	.nickname-line {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nickname-input {
		border: none;
		background: #f7f2ee;
		font-size: 1.4rem;
		height: 3rem;
		line-height: 3rem;
		color: #666666;
		width: 14rem;
		text-align: center;
		padding: 0 1rem;
		border-radius: 2rem;
		margin-right: 0.5rem;
		box-sizing: border-box;
	}

	.nickname-input::placeholder {
		color: #f25a44;
		opacity: 0.4;
		font-size: 1rem;
		height: 3rem;
		line-height: 3rem;
	}

	.nickname-input:focus {
		outline: none;
	}

	.suffix {
		font-size: 1.3rem;
		line-height: 3rem;
	}

	.button-bar {
		position: absolute;
		bottom: 1.7rem;
		padding: 0 1.7rem;
		left: 0;
		right: 0;
		width: 100%;
		display: flex;
		justify-content: flex-end;
		box-sizing: border-box;
		z-index: 10;
	}

	.agree-button-container {
		height: 60px;
		display: flex;
		align-items: center;
	}
	.agree-button {
		display: flex;
		align-items: center;
		border: none;
		cursor: pointer;
		padding: 0;
		background: transparent;
		gap: 0;
		text-decoration: none;
		color: #ffffff;
	}
	.circle {
		width: 60px;
		height: 60px;
		border-radius: 9999px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-color);
		background-color: var(--bg-color);
		z-index: 0;
		background-color: #666666;
	}
	.pill {
		height: 60px;
		padding: 0 2rem;
		border-radius: 9999px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-color);
		background-color: var(--bg-color);
		margin-right: -20px;
		z-index: 1;
		background-color: #666666;
	}
</style>
