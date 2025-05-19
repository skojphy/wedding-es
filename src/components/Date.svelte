<script>
	let currentYear = 2025;
	let currentMonth = 9;
	let currentDay = 13;
</script>

<div class="date">
	{currentYear}년 {String(currentMonth).padStart(2, '0')}월 {String(currentDay).padStart(2, '0')}일
</div>

<style>
	.date {
		font-size: 2.5rem;
		margin-top: 1rem;
		color: #6c7889;
	}
</style>
