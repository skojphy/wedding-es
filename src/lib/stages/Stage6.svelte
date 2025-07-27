<script>
	import { onMount } from 'svelte';
	let isLoading = true;
	const nickname = localStorage.getItem('nickname') || '하객';
	onMount(() => {
		const timer = setTimeout(() => {
			isLoading = false;
		}, 2000);
		return () => clearTimeout(timer);
	});

	let mission = '';

	onMount(async () => {
		const res = await fetch('/api/missions');
		({ mission } = await res.json());
	});
	let isSubmitting = false;

	const handleSubmit = async () => {
		try {
			const res = await fetch('/api/missions', {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			});
			const { mission } = await res.json();

			alert(`미션 (${mission}): ${text}\n데이터가 정상 저장되었습니다!`);
			isSubmitting = false;
		} catch (err) {
			console.error(err);
			alert('서버 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
		}
	};
</script>

<div class="stage6">
	{#if isLoading}
		<div class="loading-container">
			<p class="loading-text">결혼 준비가 완료되었습니다!</p>
			<p class="loading-text">잠시만 기다려주세요.</p>
			<div class="spinner"></div>
		</div>
	{:else}
		<h1 class="greeting">
			{nickname}님께<br />
			미션이 도착했습니다!
		</h1>
		<p class="desc1">
			미션을 수행하실 거라면!<br />
			현재 화면을 캡처해<br />아래 오픈 카톡으로 전달해 주세요.
		</p>
		<div class="letter-container">
			<img src="/images/letter.svg" alt="편지 이미지" class="letter" />
			<div class="letter-text">
				{mission}
			</div>
		</div>
		<p class="desc">
			미션 수행 후<br />결혼식 당일 카톡으로 인증해 주시면<br /> 추첨을 통해 소정의 선물을 드립니다!
		</p>
		<p class="desc">
			지금까지 플레이해 주셔서 감사합니다.<br />
			그럼 우리 결혼식장에서 만나요:)
		</p>
		<a
			href="https://makedear.com/mcard/view/6bGZLyZ"
			target="_blank"
			rel="noopener noreferrer"
			class="invite link"
		>
			모바일 청첩장 보러 가기
		</a>
		<a
			href="https://open.kakao.com/o/s0dSPiIh"
			target="_blank"
			rel="noopener noreferrer"
			class="talk link"
		>
			오픈 카톡 보내러 가기
		</a>
	{/if}
</div>

<style>
	.stage6 {
		width: 100%;
		min-height: 100vh;
		margin: 0;
		padding: 3rem 3rem 5rem;
		background: #fff;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		text-align: center;
		box-sizing: border-box;
		position: relative;
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
		max-width: 330px;
		display: block;
	}
	.letter-text {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -30%);
		width: 72%;
		font-family: 'Pretendard-Regular', sans-serif;
		font-size: 1rem;
		color: #333;
		text-align: center;
		white-space: pre-wrap;
		line-height: 1.4;
		word-break: keep-all;
	}
	.link {
		display: inline-block;
		margin-top: 1.5rem;
		padding: 0.75rem 1rem;
		margin: 1rem;
		box-sizing: border-box;
		border: none;
		color: #fff;
		font-size: 1rem;
		border-radius: 9999px;
		cursor: pointer;
		text-decoration: none;
	}
	.invite {
		background: rgba(255, 100, 70, 0.8);
		margin-bottom: 0;
	}
	.talk {
		background: rgba(86, 83, 233, 0.8);
		margin: 1rem;
	}
	.loading-text {
		font-size: 1.5rem;
		line-height: 3rem;
		text-align: center;
		min-width: 85vw;
		margin: 0;
	}
	.spinner {
		width: 48px;
		height: 48px;
		border: 6px solid #f3f3f3;
		border-top: 6px solid #3498db;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin: 1rem;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.loading-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
