<script>
	import Buttons from './Buttons.svelte';

	export let image = '/images/mock.png';
	export let username = 'piccor_rica';
	export let date = '2017년 12월 25일';
	export let caption = '크리스마스라 사람 제일 많은 청계천에 빠지는 사람: 박지현';
	let likes = 0;
	let comments = [];
	let newComment = '';

	function addComment() {
		if (newComment.trim()) {
			comments.push(newComment);
			newComment = '';
		}
	}
</script>

<div class="feed-container">
	<div class="feed-header">
		<img src="/images/avatar-placeholder.png" alt="avatar" class="avatar" />
		<div class="meta">
			<div class="username">{username}</div>
			<div class="date">{date}</div>
		</div>
		<div class="menu">⋯</div>
	</div>

	<div class="feed-image">
		<img src={image} alt="post" />
	</div>

	<div class="feed-actions">
		<Buttons onLike={() => likes++} />
	</div>
	<div class="likes-count">
		{likes}명이 좋아합니다
	</div>

	<div class="feed-caption">
		<strong>{username}</strong>
		{caption}
	</div>

	<div class="feed-comments">
		{#each comments as comment}
			<div class="comment">{comment}</div>
		{/each}
	</div>

	<form class="comment-form" on:submit|preventDefault={addComment}>
		<input bind:value={newComment} placeholder="댓글 달기..." />
		<button type="submit">게시</button>
	</form>
</div>

<style>
	.feed-container {
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
		font-family: sans-serif;
		background: white;
		border: 1px solid #ccc;
	}

	.feed-header {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		border-bottom: 1px solid #eee;
	}

	.avatar {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		margin-right: 0.5rem;
	}

	.meta {
		flex: 1;
	}

	.meta .username {
		font-weight: bold;
	}

	.meta .date {
		font-size: 0.75rem;
		color: #666;
	}

	.menu {
		font-size: 1.5rem;
		padding: 0 0.5rem;
	}

	.feed-image img {
		width: 100%;
		display: block;
	}

	.feed-actions {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		gap: 0.5rem;
	}

	.likes-count {
		padding: 0 0.5rem;
		font-weight: bold;
		font-size: 0.9rem;
	}

	.feed-caption {
		padding: 0 0.5rem 0.5rem;
		font-size: 0.9rem;
	}

	.feed-comments {
		padding: 0 0.5rem;
		font-size: 0.85rem;
	}

	.comment-form {
		display: flex;
		border-top: 1px solid #eee;
		padding: 0.5rem;
	}

	.comment-form input {
		flex: 1;
		padding: 0.4rem;
		font-size: 0.9rem;
		border: 1px solid #ccc;
		border-radius: 6px;
	}

	.comment-form button {
		background: none;
		border: none;
		color: #0095f6;
		font-weight: bold;
		margin-left: 0.5rem;
	}
</style>
