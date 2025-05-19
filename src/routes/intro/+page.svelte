<script>
	import { onMount } from 'svelte';

	let weddingDate = new Date('2025-09-13T00:00:00');
	let firstMeetingDate = new Date('2017-03-20T00:00:00');

	let currentYear = weddingDate.getFullYear();
	let currentMonth = weddingDate.getMonth() + 1;
	let currentDay = weddingDate.getDate();
	let showFirstMeeting = false;

	let hour = 10;
	let minute = 0;

	let minuteAngle = 0;
	let hourAngle = -120; // 10시를 가리키도록 수정 (-120도)

	const animateDateChange = () => {
		let yearInterval = setInterval(() => {
			if (currentYear <= 2017) {
				clearInterval(yearInterval);
				return;
			}
			currentYear--;
		}, 100); // 연도 감소 속도 증가

		let monthInterval = setInterval(() => {
			if (currentYear === 2017 && currentMonth === 7) {
				clearInterval(monthInterval);
				return;
			}
			currentMonth--;
			if (currentMonth < 1) {
				currentMonth = 12;
			}
		}, 50); // 월 감소 속도 증가

		let clockInterval = setInterval(() => {
			if (
				currentYear === 2017 &&
				currentMonth === 7 &&
				currentDay <= 8 &&
				hourAngle <= -150 &&
				minuteAngle <= -1080
			) {
				clearInterval(clockInterval);
				return;
			}

			// 시계 반대 방향으로 회전
			minuteAngle -= 30; // 30도씩 빠르게 이동
			hourAngle -= 3; // 시침도 빠르게 이동

			// 스타일에 직접 각도 적용
			document.querySelector('.minute-hand').style.transform = `rotate(${minuteAngle}deg)`;
			document.querySelector('.hour-hand').style.transform = `rotate(${hourAngle}deg)`;
		}, 50); // 시계 애니메이션도 속도 증가

		let dayInterval = setInterval(() => {
			if (currentYear === 2017 && currentMonth === 7 && currentDay <= 8) {
				clearInterval(dayInterval);
				clearInterval(clockInterval);
				setTimeout(() => {
					showFirstMeeting = true;
				}, 300);
				return;
			}
			currentDay--;
			if (currentDay < 1) {
				currentDay = 31;
				currentMonth--;
				if (currentMonth < 1) {
					currentMonth = 12;
					currentYear--;
				}
			}
		}, 30); // 날짜 감소 속도 증가
	};

	onMount(() => {
		setTimeout(() => {
			animateDateChange();
		}, 1000);
	});
</script>

<div class="intro-container">
	<div class="clock">
		<div class="outer-ring">
			<div class="inner-ring">
				<div class="clock-face">
					<div
						class="hour-hand"
						style="transform: rotate(-120deg); transition: transform 0.2s linear;"
					></div>
					<div class="minute-hand" style="transition: transform 0.2s linear;"></div>
					<div class="center-circle"></div>
				</div>
			</div>
		</div>
	</div>

	<div class="date">
		{currentYear}년 {String(currentMonth).padStart(2, '0')}월 {String(currentDay).padStart(
			2,
			'0'
		)}일
	</div>
</div>

<style>
	.intro-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #e0e5ec;
		font-family: 'Georgia', serif;
	}

	.clock {
		margin-bottom: 2rem;
		position: relative;
	}

	.outer-ring {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #e0e5ec;
		box-shadow:
			5px 5px 15px #a3b1c6,
			-5px -5px 15px #ffffff;
	}

	.inner-ring {
		width: 160px;
		height: 160px;
		border-radius: 50%;
		background-color: #e0e5ec;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		box-shadow:
			inset 5px 5px 15px #a3b1c6,
			inset -5px -5px 15px #ffffff;
	}

	.clock-face {
		position: relative;
		width: 140px;
		height: 140px;
		border-radius: 50%;
		background-color: #e0e5ec;
		box-shadow:
			inset 3px 3px 8px #a3b1c6,
			inset -3px -3px 8px #ffffff;
	}

	.hour-hand,
	.minute-hand {
		position: absolute;
		width: 4px;
		background-color: #6c7889;
		left: 50%;
		transform-origin: bottom center;
		border-radius: 2px;
		box-shadow:
			1px 1px 2px #a3b1c6,
			-1px -1px 2px #ffffff;
	}

	.hour-hand {
		height: 40px;
		top: 30px;
	}

	.minute-hand {
		height: 60px;
		top: 10px;
	}

	.center-circle {
		position: absolute;
		width: 12px;
		height: 12px;
		background-color: #e0e5ec;
		border-radius: 50%;
		top: 64px;
		left: 64px;
		box-shadow:
			inset 2px 2px 4px #a3b1c6,
			inset -2px -2px 4px #ffffff;
	}

	.date {
		font-size: 2.5rem;
		margin-top: 1rem;
		color: #6c7889;
	}
</style>
