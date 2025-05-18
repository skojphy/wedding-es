<script>
	export let sender;
	export let text;
	export let time;
</script>

<div class="message {sender === '신부' ? 'shinbu' : sender === '신랑' ? 'shinlang' : 'me'}">
	<div class="bubble">{text}</div>
	<div class="time">{time}</div>
</div>

<style>
	.message {
		display: flex;
		flex-direction: column;
		margin: 10px;
	}

	.message.shinbu {
		align-items: flex-end;
	}

	.message.shinlang {
		align-items: flex-start;
	}

	.message.me {
		align-items: flex-end;
	}

	.bubble {
		max-width: 70%;
		padding: 10px;
		border-radius: 15px;
		margin-bottom: 2px;
	}

	.shinbu .bubble {
		background-color: #ffe0e6;
		margin-left: auto;
	}

	.shinlang .bubble {
		background-color: #e6f7ff;
	}

	.me .bubble {
		background-color: #d4af37;
		color: white;
	}

	.time {
		font-size: 0.8rem;
		color: #999;
	}
</style>
