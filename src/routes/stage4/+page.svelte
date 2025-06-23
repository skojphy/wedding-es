<div class="stage4-background">
	<div class="lottery-numbers">
		<span class="lotto-number">5</span>
		<span class="lotto-number">12</span>
		<span class="lotto-number">23</span>
		<span class="lotto-number">32</span>
		<span class="lotto-number">41</span>
		<span class="lotto-number">7</span>
		<span class="lotto-number">7</span>
	</div>
</div>

<style>
	.stage4-background {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('/images/lottery.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom;
		z-index: 0;
	}

	.lottery-numbers {
		position: absolute;
		bottom: calc(973 / 982 * 100vw);
		width: 100%;
		display: flex;
		justify-content: center;
		gap: calc(100vw / (982 / 5));
		transform: translateX(1.8%);
		z-index: 1;
	}

	.lotto-number {
		width: min(calc(72 / 982 * 100vw));
		height: min(calc(72 / 982 * 100vw));
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		border-radius: 50%;
		font-weight: bold;
		font-size: calc(100vw / 25);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
