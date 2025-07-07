<script>
	import { onMount } from 'svelte';
	let isLoading = true;
	const nickname = localStorage.getItem('nickname') || '귀빈';
	onMount(() => {
		const timer = setTimeout(() => {
			isLoading = false;
		}, 2000);
		return () => clearTimeout(timer);
	});
</script>

<div class="stage6">
	{#if isLoading}
		<p class="loading-text">결혼 준비가 완료되었습니다! 잠시만 기다려주세요...</p>
		<div class="spinner"></div>
	{:else}
		<h1 class="title">{nickname}님, 미션이 도착했습니다!</h1>
		<p>미션을 확인하고 화면을 캡쳐해 주세요.</p>
		<div class="mission-note">
			<p class="mission">~~ 미션 내용 ~~</p>
		</div>

		<h2>결혼식날 만나요</h2>
		<section class="info">
			<h3>결혼식 정보</h3>
			<p>장소: __________</p>
			<p>일시: __________</p>
			<p>
				모바일 청첩장: <a href="https://example.com/청첩장" target="_blank">여기를 눌러 확인</a>
			</p>
		</section>
	{/if}
</div>

<style>
	.stage6 {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		background: #fff;
		padding: 2rem;
		max-width: 480px;
		margin: auto;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.spinner {
		width: 64px;
		height: 64px;
		border: 6px solid #f3f3f3;
		border-top: 6px solid #3498db;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: 1rem;
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	.title {
		font-size: 1.5rem;
		color: #333;
		margin-bottom: 1rem;
	}
	.loading-text {
		font-size: 1.25rem;
		color: #555;
		margin-top: 1rem;
	}
	p {
		color: #555;
		margin: 0.5rem 0;
	}
	h2 {
		font-size: 1.5rem;
		color: #333;
		margin-top: 1.5rem;
	}
	.info {
		margin-top: 1.5rem;
		text-align: left;
		background: #fafafa;
		padding: 1rem;
		border-radius: 8px;
		min-width: 200px;
		max-width: 80%;
	}
	.info h3 {
		margin-bottom: 0.5rem;
	}
	.info p,
	.info a {
		margin: 0.25rem 0;
		display: block;
	}
	.info a {
		color: #3498db;
		text-decoration: none;
	}

	.mission-note {
		background: #fffde9;
		padding: 1rem;
		border: 1px solid #e0d868;
		border-radius: 4px;
		box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
		min-width: 200px;
		min-height: 80px;
		max-width: 80%;
		margin: 1rem 0;
		transform: rotate(-0.5deg);

		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.mission {
		margin: 0;
		font-size: 1rem;
		color: #333;
		white-space: pre-wrap;
	}
</style>
