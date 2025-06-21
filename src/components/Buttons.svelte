<script>
	export let onLike = () => {};
	export let onComment = () => {};
	export let onShare = () => {};
	export let onBookmark = () => {};
</script>

<div class="button-group">
	<button aria-label="좋아요" on:click={onLike}>
		<svg fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
			<title>좋아요</title>
			<path
				d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938Z"
			></path>
		</svg>
	</button>

	<button aria-label="댓글 달기" on:click={onComment}>
		<svg fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
			<title>댓글 달기</title>
			<path
				d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
				fill="none"
				stroke="currentColor"
				stroke-linejoin="round"
				stroke-width="2"
			></path>
		</svg>
	</button>

	<button aria-label="공유" on:click={onShare}>
		<svg fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
			<title>게시물 공유</title>
			<line
				fill="none"
				stroke="currentColor"
				stroke-linejoin="round"
				stroke-width="2"
				x1="22"
				x2="9.218"
				y1="3"
				y2="10.083"
			></line>
			<polygon
				fill="none"
				points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
				stroke="currentColor"
				stroke-linejoin="round"
				stroke-width="2"
			></polygon>
		</svg>
	</button>

	<button aria-label="저장" on:click={onBookmark}>
		<svg fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
			<title>저장</title>
			<polygon
				fill="none"
				points="20 21 12 13.44 4 21 4 3 20 3 20 21"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			></polygon>
		</svg>
	</button>
</div>

<style>
	.button-group {
		display: flex;
		gap: 1rem;
		padding: 0.5rem;
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	svg {
		display: block;
		color: #262626;
	}
</style>
