<script>
	// digit: number from 0 to 9
	export let digit = 0;

	const segmentMap = {
		0: ['a', 'b', 'c', 'd', 'e', 'f'],
		1: ['b', 'c'],
		2: ['a', 'b', 'g', 'e', 'd'],
		3: ['a', 'b', 'c', 'd', 'g'],
		4: ['f', 'g', 'b', 'c'],
		5: ['a', 'f', 'g', 'c', 'd'],
		6: ['a', 'f', 'e', 'd', 'c', 'g'],
		7: ['a', 'b', 'c'],
		8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
		9: ['a', 'b', 'c', 'd', 'f', 'g']
	};

	// Compute which segments are active
	$: activeSegments = new Set(segmentMap[digit] || []);
</script>

<div class="seven-segment">
	{#each ['a', 'b', 'c', 'd', 'e', 'f', 'g'] as seg}
		<div class="segment segment-{seg} {activeSegments.has(seg) ? 'on' : ''}"></div>
	{/each}
</div>

<style>
	.seven-segment {
		position: relative;
		width: 2.4rem;
		height: 4rem;
	}
	.segment {
		position: absolute;
		background: #f0ece5;
		border-radius: 0.2rem;
	}
	.segment.on {
		background: #ff6446;
	}

	/* horizontal segments */
	.segment-a,
	.segment-d,
	.segment-g {
		width: 2rem;
		height: 0.4rem;
	}
	.segment-a {
		top: 0;
		left: 0.2rem;
	}
	.segment-g {
		top: calc(50% - 0.2rem);
		left: 0.2rem;
	}
	.segment-d {
		bottom: 0;
		left: 0.2rem;
	}

	/* vertical segments */
	.segment-f,
	.segment-b {
		width: 0.4rem;
		height: 2rem;
	}
	.segment-f {
		top: 0.2rem;
		left: 0;
	}
	.segment-b {
		top: 0.2rem;
		right: 0;
	}

	.segment-e,
	.segment-c {
		width: 0.4rem;
		height: 2rem;
	}
	.segment-e {
		bottom: 0.2rem;
		left: 0;
	}
	.segment-c {
		bottom: 0.2rem;
		right: 0;
	}
</style>
