<script>
	export let name = '';
	export let text = '';
	export let avatar = '';
</script>

<div class="dialog-container">
	<div class="dialog-box">
		<img class="avatar" src={avatar} alt="avatar" />
		<div class="dialog-content">
			<p class="dialog-text">{text}</p>
		</div>
	</div>
	<div class="name-label">{name}</div>
</div>

<style>
	.dialog-container {
		width: 100%;
		aspect-ratio: 375 / 140;
		background-color: rgba(0, 0, 0, 0.6);
		padding: 0.75rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		gap: 0.3rem;
		font-size: clamp(0.9rem, 2.5vw, 1.1rem);
		margin: 0 auto;
	}

	.dialog-box {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		width: 100%;
	}

	.avatar {
		width: 40px;
		height: 40px;
		flex-shrink: 0;
	}

	.dialog-content {
		color: white;
		line-height: 1.5;
		flex: 1;
	}

	.dialog-text {
		margin: 0;
	}

	.name-label {
		background-color: #0095f6;
		color: white;
		font-weight: bold;
		font-size: 0.9rem;
		padding: 0.2rem 0.6rem;
		border-radius: 4px;
		margin-left: 2.4rem;
	}
</style>
