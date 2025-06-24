<script>
	const gridSize = 5;
	const grid = Array.from({ length: gridSize * gridSize }, () => '/images/mock.png');

	let selectedIndices = [];

	function toggleSelect(index) {
		if (selectedIndices.includes(index)) {
			selectedIndices = selectedIndices.filter((i) => i !== index);
		} else {
			selectedIndices = [...selectedIndices, index];
		}
	}

	$: {
		const correctSet = [1, 3, 5, 7, 9, 10, 14, 16, 18, 22];
		const isMatch =
			correctSet.every((i) => selectedIndices.includes(i)) &&
			selectedIndices.length === correctSet.length;
		if (isMatch) {
			alert('정답입니다!');
		}
	}
</script>

<div class="stage5-2">
	<div class="grid-wrapper">
		<div class="grid-header">
			<h2>결혼준비</h2>
			<p>에 필요한 타일을 모두 선택하세요.<br />아무것도 없으면 건너뛰기를 클릭하세요.</p>
		</div>
		<div class="grid-container">
			{#each grid as image, index}
				<button
					type="button"
					class="grid-cell {selectedIndices.includes(index) ? 'selected' : ''}"
					on:click={() => toggleSelect(index)}
				>
					<img src={image} alt="mock tile" />
				</button>
			{/each}
		</div>
		<div class="skip-button-container">
			<button class="skip-button">건너뛰기</button>
		</div>
	</div>
</div>

<style>
	.stage5-2 {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100dvh;
		padding: 1rem;
		background: #f8f3ef;
	}

	.grid-wrapper {
		width: 90vw;
		max-width: 420px;
		background: white;
		padding: 8px;
	}

	.grid-header {
		background-color: #4492f7;
		color: white;
		padding: 1rem 1rem 2rem 1rem;
		margin-bottom: 2px;
	}

	.grid-header h2 {
		margin: 0 0 0.25rem;
		font-size: 1.4rem;
	}

	.grid-header p {
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.4;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		row-gap: 2px;
		column-gap: 2px;
		aspect-ratio: 1 / 1;
		background: white;
	}

	.grid-cell {
		position: relative;
		width: 100%;
		aspect-ratio: 1 / 1;
		border: none;
		padding: 0;
		cursor: pointer;
		background: none;
	}

	.grid-cell::after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: transparent;
		transition: background-color 0.2s;
	}

	.grid-cell.selected::after {
		background-color: rgba(255, 0, 0, 0.3);
	}

	.grid-cell img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.grid-cell.selected {
		background-color: #4492f7;
	}

	.skip-button-container {
		display: flex;
		justify-content: flex-end;
		padding: 1rem 0.5rem 0.5rem 0.5rem;
	}

	.skip-button {
		background-color: #4492f7;
		color: white;
		border: none;
		padding: 0.75rem 1.25rem;
		font-size: 1rem;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
