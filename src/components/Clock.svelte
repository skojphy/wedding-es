<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		setTimeout(async () => {
			const { gsap } = await import('gsap');
			const hourHand = document.querySelector('.clock .hour-hand');
			gsap.set(hourHand, { rotation: 60, transformOrigin: 'center bottom' });
			gsap.to(hourHand, { duration: 3, rotation: '-=670', ease: 'none' });

			const minuteHand = document.querySelector('.clock .minute-hand');
			gsap.set(minuteHand, { rotation: 0, transformOrigin: 'center bottom' });
			gsap.to(minuteHand, { duration: 3, rotation: '-=3180', ease: 'none' });
		}, 1500);
	});
</script>

<div class="clock-wrapper">
	<div class="clock">
		<div class="hour-hand"></div>
		<div class="minute-hand"></div>
		<div class="center-circle"></div>
	</div>
</div>

<style>
	.clock-wrapper {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: linear-gradient(135deg, #6e8efb, #a777e3);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
	}

	.clock .hour-hand,
	.clock .minute-hand {
		position: absolute;
		background: #ffffff;
		border-radius: 2px;
		transform-origin: center center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -100%) rotate(0deg);
	}

	.clock .hour-hand {
		width: 6px;
		height: 50px;
	}

	.clock .minute-hand {
		width: 4px;
		height: 70px;
	}

	.center-circle {
		width: 12px;
		height: 12px;
		background: #ffffff;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
