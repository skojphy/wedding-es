<script>
	export let hintText = '';
</script>

<div class="modal-backdrop">
	<div class="hint-modal">
		<div class="hint-title">HINT</div>
		<div class="hint-content">
			{#each hintText.split('\n') as line}
				<p>{line}</p>
			{/each}
		</div>
	</div>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
	}

	.hint-modal {
		background-color: #dbeafe; /* light blue */
		border-radius: 20px;
		padding: 2rem 1rem;
		width: 80%;
		max-width: 400px;
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
	}

	.hint-title {
		text-align: center;
		font-weight: bold;
		font-size: 1.8rem;
		color: #ff5733;
		margin-bottom: 1rem;
	}

	.hint-content {
		background-color: white;
		padding: 1.5rem;
		border-radius: 1rem;
		font-size: 1.1rem;
		line-height: 1.6;
		color: #333;
	}

	.hint-content p {
		margin: 0.5rem 0;
		text-align: center;
	}
</style>
