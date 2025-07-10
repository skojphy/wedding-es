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
		<p class="loading-text">결혼 준비가 완료되었습니다!<br />잠시만 기다려주세요...</p>
		<div class="spinner"></div>
	{:else}
		<h1 class="greeting">
			{nickname}님께<br />
			미션이 도착했습니다!
		</h1>
		<p class="desc1">미션을 확인하고 화면을 캡쳐해 주세요.</p>
		<div class="letter-container">
			<img src="/images/letter.svg" alt="편지 이미지" class="letter" />
			<div class="letter-text">
				~~ 미션 내용 ~~<br />
				여기에 여기에
			</div>
		</div>
		<p class="desc">
			미션 수행 후 결혼식 당일<br />
			카톡으로 인증해 주시면 추첨을 통해<br />
			소정의 선물을 드립니다!
		</p>
		<p class="desc">
			지금까지 플레이해 주셔서 감사합니다.<br />
			그럼 우리 결혼식장에서 만나요:)
		</p>
		<a href="https://example.com/청첩장" target="_blank" rel="noopener noreferrer" class="invite">
			모바일 청첩장 보러 가기
		</a>
	{/if}
</div>

<style>
	.stage6 {
		width: 100%;
		height: 100vh;
		margin: 0;
		padding: 3rem;
		background: #fff;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		text-align: center;
		box-sizing: border-box;
	}
	.greeting {
		text-align: left;
		font-size: 1.5rem;
		margin: 0 0 1rem 0;
	}
	.desc {
		font-size: 1rem;
		color: #555;
		margin: 0.5rem 0;
		line-height: 1.4;
	}
	.desc1 {
		text-align: left;
	}
	.letter-container {
		position: relative;
		display: inline-block;
		margin: 1rem 0;
	}
	.letter {
		width: 100%;
		max-width: 360px;
		display: block;
	}
	.letter-text {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -30%);
		width: 80%;
		font-family: 'Pretendard-Regular', sans-serif;
		font-size: 1rem;
		color: #333;
		text-align: center;
		white-space: pre-wrap;
	}
	.invite {
		display: inline-block;
		margin-top: 1.5rem;
		padding: 0.75rem 1rem;
		margin: 1rem;
		box-sizing: border-box;
		border: none;
		background: rgba(255, 100, 70, 0.8);
		color: #fff;
		font-size: 1rem;
		border-radius: 9999px;
		cursor: pointer;
		text-decoration: none;
	}
</style>
