<script>
	export let color = '#666666';
	export let textColor = '#ffffff';
	export let href = '';
</script>

<div class="next-button-container">
	{#if href}
		<a
			class="next-button"
			{href}
			role="button"
			tabindex="0"
			style="--bg-color: {color}; --text-color: {textColor};"
		>
			<div class="pill">NEXT</div>
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
		</a>
	{:else}
		<button class="next-button" on:click style="--bg-color: {color}; --text-color: {textColor};">
			<div class="pill">NEXT</div>
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
	{/if}
</div>

<style>
	.next-button-container {
		height: 60px;
		display: flex;
		align-items: center;
	}
	.next-button {
		display: flex;
		align-items: center;
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
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-color);
		background-color: var(--bg-color);
		z-index: 0;
	}
	.pill {
		height: 60px;
		padding: 0 40px;
		border-radius: 9999px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-color);
		background-color: var(--bg-color);
		margin-right: -20px;
		z-index: 1;
	}
</style>
