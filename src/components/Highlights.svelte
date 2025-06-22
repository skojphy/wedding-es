<section class="highlights">
	{#each ['1st', '2nd', '3rd', '4th'] as label}
		<div class="highlight">
			<div class="highlight-thumb"></div>
			<span>{label}</span>
		</div>
	{/each}
</section>

<style>
	.highlights {
		display: flex;
		gap: 0.75rem;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		overflow-x: auto;
		width: 100%;
	}

	.highlight {
		text-align: center;
		font-size: 0.75rem;
	}

	.highlight-thumb {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: #ccc;
		margin-bottom: 0.25rem;
		border: 2px solid #eee;
	}
</style>
