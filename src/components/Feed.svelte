<script>
	import Buttons from './Buttons.svelte';
	import 'swiper/element/bundle';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	export let feed = {
		images: ['/images/mock.png'],
		date: '',
		caption: '',
		likes: 0,
		comments: []
	};

	export let onBack = () => {};

	const username = 'piccor_rica';
	let liked = false;
	let bookmarked = false;
	let newComment = '';
	let newNickname = '';

	function addComment() {
		if (newComment.trim() && newNickname.trim()) {
			feed.comments.push({
				nickname: newNickname,
				text: newComment,
				created_at: new Date().toISOString()
			});
			newComment = '';
		}
	}

	onMount(() => {
		register();
	});
</script>

<div class="feed-container">
	<div class="feed-topbar">
		<button class="back-icon" aria-label="Back" on:click={() => onBack()}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path
					fill="none"
					stroke="#000"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m15 6l-6 6l6 6"
				/>
			</svg>
		</button>
		<div class="feed-topbar-text">
			<div class="title">게시물</div>
			<div class="username">piccor_rica</div>
		</div>
	</div>
	<div class="feed-header">
		<img src="/images/insta/insta_profile.png" alt="avatar" class="avatar" />
		<div class="meta">
			<div class="username">{username}</div>
			<div class="date">{feed.date}</div>
		</div>
		<div class="menu">⋯</div>
	</div>

	<swiper-container
		class="feed-image"
		pagination="true"
		space-between="10"
		slides-per-view="1"
		init="true"
	>
		{#if feed.images && feed.images.length}
			{#each feed.images as img}
				<swiper-slide>
					<img src={img} alt="post" />
				</swiper-slide>
			{/each}
		{/if}
	</swiper-container>

	<div class="feed-actions">
		<Buttons
			{liked}
			{bookmarked}
			onLike={() => (liked = !liked)}
			onBookmark={() => (bookmarked = !bookmarked)}
		/>
	</div>
	<div class="likes-count">
		{feed.likes}명이 좋아합니다
	</div>

	<div class="feed-caption">
		<strong>{username}</strong>
		{feed.caption}
	</div>

	<div class="feed-comments">
		{#each feed.comments as comment}
			<div class="comment">
				<div class="comment-header">
					<strong>{comment.nickname}</strong>
					<span class="comment-date"
						>{new Date(comment.created_at).toLocaleDateString('ko-KR', {
							month: 'short',
							day: 'numeric'
						})}</span
					>
				</div>
				<div class="comment-text">{comment.text}</div>
			</div>
		{/each}
	</div>

	<form class="comment-form" on:submit|preventDefault={addComment}>
		<input class="comment-input nickname" bind:value={newNickname} placeholder="닉네임" />
		<input class="comment-input" bind:value={newComment} placeholder="댓글 달기" />
		<button type="submit" aria-label="댓글 작성">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M18 6v6a3 3 0 0 1-3 3H5l4-4m0 8l-4-4"
				/>
			</svg>
		</button>
	</form>
</div>

<style>
	.feed-container {
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
		font-family: sans-serif;
		background: white;
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
		height: auto;
		display: block;
		object-fit: cover;
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
		border-top: 1px solid #eee;
		margin-top: 0.5rem;
		padding-top: 0.7rem;
	}

	.comment-form {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		gap: 0.5rem;
	}

	.comment-input {
		padding: 0.4rem;
		font-size: 0.9rem;
		border: 1px solid #ccc;
		border-radius: 6px;
	}

	.comment-input.nickname {
		width: 25%;
		min-width: 60px;
	}

	.comment-input:not(.nickname) {
		flex: 1;
	}

	.comment-form button {
		background: none;
		border: none;
		color: #0095f6;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 0;
		padding-right: 0;
	}

	swiper-container {
		display: block;
		width: 100%;
		height: auto;
	}

	swiper-slide {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	swiper-slide img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	swiper-container::part(pagination) {
		position: static;
		margin-top: 8px;
		text-align: center;
		transform: scale(0.9);
	}

	.comment {
		margin-bottom: 0.8rem;
	}

	.comment-header {
		display: flex;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: #888;
	}

	.comment-header strong {
		color: #000;
		font-size: 0.95rem;
		font-weight: 700;
	}

	.comment-text {
		font-size: 0.9rem;
		margin-left: 0.1rem;
		color: #000;
	}

	.feed-topbar {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		height: 44px;
		border-bottom: 1px solid #ddd;
		background: white;
		font-weight: bold;
	}

	.feed-topbar .title {
		text-align: center;
	}

	.feed-topbar .username {
		font-size: 0.75rem;
		color: #666;
		font-weight: normal;
		text-align: center;
	}

	.back-icon {
		position: absolute;
		left: 1rem;
		background: none;
		border: none;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
