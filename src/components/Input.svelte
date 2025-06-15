<script>
	export let placeholder = '정답을 입력해 주세요.';
	export let onSubmit = () => {};
	let answer = '';

	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			onSubmit(answer);
		}
	}

	function handleClick() {
		onSubmit(answer);
	}
</script>

<div class="answer-container">
	<input
		type="text"
		class="answer-input"
		bind:value={answer}
		{placeholder}
		on:keypress={handleKeyPress}
	/>
	<button class="answer-submit" aria-label="제출" on:click={handleClick}>
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 4L20 12L12 20"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M4 12H20"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</div>

<style>
	.answer-container {
		display: flex;
		align-items: center;
		max-width: 600px;
		margin: 1.5rem auto 0 auto;
		background: #333;
		padding: 0.5rem 0.75rem;
		border-radius: 9999px;
	}

	.answer-input {
		flex: 1;
		border: none;
		background: transparent;
		color: #fff;
		font-size: 1rem;
		outline: none;
		padding-left: 0.5rem;
	}

	.answer-input::placeholder {
		color: #ccc;
	}

	.answer-submit {
		background: transparent;
		border: none;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem;
		cursor: pointer;
	}

	.answer-submit svg {
		display: block;
	}
</style>
