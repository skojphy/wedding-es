<script>
	import { goto } from '$app/navigation';
	export let placeholder = '정답을 입력해 주세요.';
	export let correctAnswer = '';
	export let successPath = '';
	let answer = '';

	const processSubmit = () => {
		if (!answer || !answer.trim()) {
			alert('정답을 입력해 주세요');
			return;
		}
		const userInput = answer.trim().toLowerCase().replace(/\s+/g, '');
		const expected = correctAnswer.toLowerCase().replace(/\s+/g, '');

		console.log('userInput', userInput, 'expected', expected);
		if (userInput === expected) {
			goto(successPath);
		} else {
			alert('다시 생각해 보세요');
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			processSubmit();
		}
	};

	const handleClick = () => {
		processSubmit();
	};
</script>

<div class="answer-container">
	<div class="input-container">
		<div class="pill">
			<input
				type="text"
				class="answer-input"
				bind:value={answer}
				{placeholder}
				on:keypress={handleKeyPress}
			/>
		</div>
		<div class="circle right">
			<button class="answer-submit" aria-label="제출" on:click={handleClick}>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
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
	</div>
</div>

<style>
	.answer-container {
		height: 60px;
		display: flex;
		align-items: center;
		flex: 1;
	}

	.input-container {
		display: flex;
		align-items: center;
		flex: 1;
		border: none;
		cursor: pointer;
		padding: 0;
		background: transparent;
		gap: 0;
		text-decoration: none;
	}

	.circle {
		width: 60px;
		height: 60px;
		border-radius: 9999px;
		background: #333;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pill {
		flex: 3;
		height: 60px;
		width: 100%;
		padding: 0 2rem;
		border-radius: 9999px;
		background: #333;
		display: flex;
		align-items: center;
		margin-right: -20px;
	}

	.answer-input {
		flex: 1;
		width: 100%;
		border: none;
		background: transparent;
		color: #fff;
		font-size: 1rem;
		outline: none;
		padding: 0;
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
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	.answer-submit svg {
		display: block;
	}
</style>
