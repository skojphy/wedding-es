<script>
	import Feed from '$components/Feed.svelte';
	import ProfileSummary from '$components/ProfileSummary.svelte';
	import TabMenu from '$components/TabMenu.svelte';
	import Highlights from '$components/Highlights.svelte';
	import { posts as rawPosts } from '$lib/data/posts.js';
	import postMeta from '$lib/data/postMeta.json';
	import { disableScroll, enableScroll } from '$lib/utils/scroll.js';

	let posts = rawPosts.map((post, index) => ({
		id: post.id,
		images: Array.from(
			{ length: post.imagesCount },
			(_, i) => `/images/insta/feed${post.id}_${i + 1}.png`
		),
		date: post.date,
		caption: post.caption,
		likes: postMeta[index]?.likes ?? 0,
		comments: postMeta[index]?.comments ?? []
	}));
	let selectedPost = null;

	$: {
		if (typeof window !== 'undefined') {
			if (selectedPost !== null) {
				disableScroll();
			} else {
				enableScroll();
			}
		}
	}
</script>

<svelte:body />

<div class="profile-container">
	<header class="profile-header">
		<div class="username">piccor_rica</div>
	</header>

	<ProfileSummary />

	<section class="profile-actions">
		<button class="gray wide blue">Follow</button>
		<button class="gray wide">Message</button>
		<button class="gray square">+👤</button>
	</section>

	<Highlights />

	<TabMenu />

	<section class="gallery">
		{#each posts as post}
			<button
				type="button"
				class="gallery-item"
				style="background-image: url({post.images[0]})"
				on:click={() => (selectedPost = { ...post })}
				aria-label="Open post"
			></button>
		{/each}
	</section>
</div>

{#if selectedPost}
	<div class="dimmed"></div>
	<div class="post-view">
		<Feed feed={selectedPost} onBack={() => (selectedPost = null)} />
	</div>
{/if}

<style>
	.profile-container {
		width: 100%;
		margin: 0 auto;
		font-family: sans-serif;
		background: white;
		color: #000;
	}
	:global(body.modal-open) .profile-container {
		touch-action: none;
		overscroll-behavior: contain;
	}
	@media (min-width: 768px) {
		.profile-container {
			max-width: 480px;
		}
	}

	.profile-header {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 44px;
		font-weight: bold;
		width: 100%;
		text-align: center;
		padding: 0;
	}

	.profile-header .username {
		position: relative;
		padding: 0 1rem;
	}

	.profile-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		width: 100%;
		box-sizing: border-box;
	}

	.profile-actions .gray {
		min-width: 0;
		padding: 0.4rem;
		border: 1px solid #ccc;
		border-radius: 6px;
		background: #fafafa;
		font-size: 0.85rem;
		color: inherit;
	}

	.profile-actions .blue {
		background: #0095f6;
		color: white;
		border: none;
	}

	.profile-actions .gray.wide {
		flex: 1;
	}

	.profile-actions .gray.square {
		width: 44px;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: #ffff;
	}

	.gallery-item {
		all: unset;
		display: block;
		aspect-ratio: 1 / 1;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		width: 100%;
		cursor: pointer;
	}

	.post-view {
		position: fixed;
		inset: 0;
		background: white;
		z-index: 100;
		display: flex;
		flex-direction: column;
		max-width: 480px;
		width: 100%;
		margin: 0 auto;
		overflow-y: auto;
	}

	.dimmed {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 99;
		touch-action: none;
		overscroll-behavior: contain;
		overflow: hidden;
		pointer-events: auto;
	}
</style>
