<script>
	import { createEventDispatcher } from 'svelte';
	export let activeTab = 'posts';
	const dispatch = createEventDispatcher();
	const selectTab = (tab) => dispatch('change', tab);
</script>

<nav class="tab-menu">
	<button
		class:active={activeTab === 'posts'}
		aria-label="게시물"
		on:click={() => selectTab('posts')}
	>
		<svg class="icon" viewBox="0 0 24 24" width="24" height="24">
			<title>게시물</title>
			<rect
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
				width="18"
				height="18"
				x="3"
				y="3"
			/>
			<line
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
				x1="9.015"
				x2="9.015"
				y1="3"
				y2="21"
			/>
			<line
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
				x1="14.985"
				x2="14.985"
				y1="3"
				y2="21"
			/>
			<line
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
				x1="21"
				x2="3"
				y1="9.015"
				y2="9.015"
			/>
			<line
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
				x1="21"
				x2="3"
				y1="14.985"
				y2="14.985"
			/>
		</svg>
	</button>
	<button
		class:active={activeTab === 'reels'}
		aria-label="릴스"
		on:click={() => selectTab('reels')}
	>
		<svg class="icon" viewBox="0 0 24 24" width="24" height="24">
			<title>릴스</title>
			<line
				stroke="currentColor"
				stroke-linejoin="round"
				stroke-width="1.75"
				x1="2.049"
				x2="21.95"
				y1="7.002"
				y2="7.002"
			/>
			<line
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
				x1="13.504"
				x2="16.362"
				y1="2.001"
				y2="7.002"
			/>
			<line
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
				x1="7.207"
				x2="10.002"
				y1="2.11"
				y2="7.002"
			/>
			<path
				d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
			/>
			<path
				d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
				fill="currentColor"
				fill-rule="evenodd"
			/>
		</svg>
	</button>
	<button
		class:active={activeTab === 'tags'}
		aria-label="태그됨"
		on:click={() => selectTab('tags')}
	>
		<svg class="icon" viewBox="0 0 24 24" width="24" height="24">
			<title>태그됨</title>
			<path
				d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
			/>
			<path
				d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
			/>
			<circle
				cx="12.072"
				cy="11.075"
				r="3.556"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.75"
			/>
		</svg>
	</button>
</nav>

<style>
	.tab-menu {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		height: 48px;
		width: 100%;
	}

	.tab-menu button {
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		font-size: 1.1rem;
		cursor: pointer;
		color: #999999;
		flex: 1;
		height: 100%;
		border-bottom: 2px solid transparent;
	}

	.tab-menu button.active {
		color: black;
		border-bottom: 2px solid #222;
		transition: border-color 0.3s ease;
	}

	.tab-menu .icon {
		stroke: currentColor;
		fill: none;
	}
</style>
