<script>
	import { onMount } from 'svelte';
	import MessageBubble from '$components/MessageBubble.svelte';
	import NextButton from '$components/NextButton.svelte';

	let messages = [
		{ sender: '신부', text: '안녕! 이제 결혼식 준비 시작했어?', time: '오전 10:30' },
		{ sender: '신랑', text: '응! 벌써부터 설레네 ㅎㅎ', time: '오전 10:31' },
		{
			sender: '신부',
			text: '그런데... 내가 청첩장을 어디에 두었는지 기억이 안 나 😅',
			time: '오전 10:33'
		},
		{ sender: '신랑', text: '청첩장? 같이 찾아보자!', time: '오전 10:34' }
	];

	let inputValue = '';

	const sendMessage = (event) => {
		if (event) event.preventDefault();
		if (inputValue.trim() === '') return;

		messages = [...messages, { sender: '나', text: inputValue, time: '오전 10:35' }];

		inputValue = '';
	};

	function handleKeydown(e) {
		if (e.key === 'Enter') {
			sendMessage(e);
		}
	}

	onMount(() => {
		const chatContainer = document.querySelector('.chat-container');
		const observer = new MutationObserver(() => {
			chatContainer.scrollTop = chatContainer.scrollHeight;
		});
		observer.observe(chatContainer, { childList: true });
	});
</script>

<div class="chat-container">
	{#each messages as { sender, text, time }}
		<MessageBubble {sender} {text} {time} />
	{/each}
</div>

<div class="input-container">
	<script>
		let isComposing = false;
	</script>
	<input
		type="text"
		placeholder="메시지 입력..."
		bind:value={inputValue}
		on:compositionstart={() => (isComposing = true)}
		on:compositionend={() => (isComposing = false)}
		on:keydown={(e) => {
			if (e.key === 'Enter' && !isComposing) {
				sendMessage(e);
			}
		}}
	/>
	<button on:click={sendMessage}>전송</button>
</div>

<div class="next-wrapper">
	<NextButton href="/Qw4Dj2Zm" color="#0b9444" />
</div>

<style>
	.chat-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: calc(100vh - 60px);
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		background-color: #f9f9f9;
		border-radius: 10px 10px 0 0;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		overflow-y: auto;
		scroll-behavior: smooth;
	}

	.input-container {
		display: flex;
		padding: 10px;
		background-color: #fff;
		border-top: 1px solid #ddd;
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		max-width: 600px;
		z-index: 10;
	}

	input {
		flex: 1;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 5px;
		margin-right: 5px;
	}

	button {
		background-color: #d4af37;
		color: white;
		border: none;
		padding: 8px 12px;
		border-radius: 5px;
		cursor: pointer;
	}

	button:hover {
		background-color: #c89b37;
	}

	.next-wrapper {
		position: absolute;
		bottom: 0.7rem;
		right: 0.7rem;
		z-index: 10;
	}
</style>
