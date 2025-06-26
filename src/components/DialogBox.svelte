<script>
	export let name = '';
	export let text = '';
	export let avatar = '';
</script>

<div class="dialog-container">
	<div class="dialog-box">
		<div class="left-block">
			<img class="avatar" src={avatar} alt="avatar" />
			<div class="name-label">{name}</div>
		</div>
		<div class="right-block">
			<div class="dialog-content">
				<p class="dialog-text">{text}</p>
			</div>
			<div class="triangle-button">▼</div>
		</div>
	</div>
</div>

<style>
	.dialog-container {
		width: 100%;
		aspect-ratio: 375 / 140;
		background-color: rgba(0, 0, 0, 0.6);
		padding: 0.75rem;
		display: flex;
		justify-content: center;
		font-size: clamp(0.9rem, 2.5vw, 1.1rem);
	}

	.dialog-box {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
	}

	.left-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.right-block {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		padding-left: 1rem;
	}

	.avatar {
		width: 60px;
		height: 60px;
		flex-shrink: 0;
	}

	.dialog-content {
		color: white;
		line-height: 1.5;
	}

	.dialog-text {
		margin: 0;
		text-align: left;
		font-size: 1.2rem;
	}

	.name-label {
		background-color: #54b2d9;
		color: white;
		font-size: 0.9rem;
		padding: 0.2rem 0.6rem;
		border-radius: 0;
	}

	.triangle-button {
		color: yellow;
		font-size: 1.2rem;
		text-align: right;
	}
</style>
