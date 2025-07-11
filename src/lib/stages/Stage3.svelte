<script>
	import { browser } from '$app/environment';
	import Feed from '$components/Feed.svelte';
	import ProfileSummary from '$components/ProfileSummary.svelte';
	import TabMenu from '$components/TabMenu.svelte';
	import Highlights from '$components/Highlights.svelte';
	import { posts as rawPosts } from '$lib/data/posts.js';
	import postMeta from '$lib/data/postMeta.json';

	const safeRawPosts = Array.isArray(rawPosts) ? rawPosts : [];
	const safePostMeta = Array.isArray(postMeta) ? postMeta : [];
	import { disableScroll, enableScroll } from '$lib/utils/scroll.js';
	import Input from '$components/Input.svelte';
	import HintButton from '$components/HintButton.svelte';
	import { onMount, onDestroy } from 'svelte';

	let posts = safeRawPosts.map((post, index) => ({
		id: post.id,
		images: Array.from(
			{ length: post.imagesCount },
			(_, i) => `/images/insta/feed${post.id}_${i + 1}.png`
		),
		date: post.date,
		caption: post.caption,
		likes: safePostMeta[index]?.likes ?? 0,
		comments: safePostMeta[index]?.comments ?? [],
		borders: post.borders
	}));

	let isFollowing = false;
	const toggleFollow = () => {
		isFollowing = !isFollowing;
	};

	let selectedPost = null;

	const handlePopState = () => {
		if (selectedPost !== null) selectedPost = null;
	};

	onMount(() => {
		window.addEventListener('popstate', handlePopState);
	});
	onDestroy(() => {
		window.removeEventListener('popstate', handlePopState);
	});

	$: if (browser) {
		if (selectedPost !== null) disableScroll();
		else enableScroll();
	}
</script>

<div class="profile-container">
	<header class="profile-header">
		<div class="username">piccor_rica</div>
	</header>

	<ProfileSummary {isFollowing} />

	<section class="profile-actions">
		<button class="gray wide" class:blue={!isFollowing} on:click={toggleFollow}>
			{#if isFollowing}
				Following
			{:else}
				Follow
			{/if}
		</button>
		<button
			class="gray wide"
			on:click={() => window.open('https://open.kakao.com/o/s5sjNUwf', '_blank')}>Message</button
		>
		<button class="gray square">+👤</button>
	</section>

	<Highlights />
	<TabMenu />

	<section class="gallery">
		{#each [...posts].reverse() as post}
			<button
				type="button"
				class="gallery-item"
				style="background-image: url({post.images[0]})"
				on:click={() => {
					history.pushState(null, '', window.location.href);
					selectedPost = { ...post };
				}}
				aria-label="Open post"
			></button>
		{/each}
	</section>

	<div class="button-bar">
		<HintButton hintCode="Xn8Rf6Th" />
		<Input correctAnswer="2949" successPath="/Lp3Az7Uc" />
	</div>
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
		padding: 0.5rem 1rem;
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
		background: #fff;
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

	.button-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1.7rem;
		gap: 1rem;
		margin: 1rem 0;
	}
</style>
