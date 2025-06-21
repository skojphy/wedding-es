<script>
	import Feed from '$components/Feed.svelte';
	import { posts as rawPosts } from '$lib/data/posts.js';

	let posts = rawPosts.map((post) => ({
		id: post.id,
		image: `/images/insta/feed${post.id}_1.png`,
		date: post.date,
		caption: post.caption
	}));
	let selectedPost = null;
</script>

<div class="profile-container">
	<header class="profile-header">
		<div class="username">piccor_rica</div>
		<div class="menu">⋯</div>
	</header>

	<section class="profile-identity">
		<div class="avatar"></div>
		<div class="stats">
			<div><strong>17</strong><span>Posts</span></div>
			<div><strong>8</strong><span>Followers</span></div>
			<div><strong>18</strong><span>Following</span></div>
		</div>
	</section>

	<section class="profile-info">
		<strong>piccor_rica</strong>
		<p class="subheading">메시지 넣기</p>
	</section>

	<section class="profile-actions">
		<button class="gray wide blue">Follow</button>
		<button class="gray wide">Message</button>
		<button class="gray square">+👤</button>
	</section>

	<section class="highlights">
		{#each ['1st', '2nd', '3rd', '4th'] as label}
			<div class="highlight">
				<div class="highlight-thumb"></div>
				<span>{label}</span>
			</div>
		{/each}
	</section>

	<nav class="tab-menu">
		<button class="active" aria-label="게시물">
			<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
				<title>게시물</title>
				<rect
					fill="none"
					height="18"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					width="18"
					x="3"
					y="3"
				/>
				<line
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					x1="9.015"
					x2="9.015"
					y1="3"
					y2="21"
				/>
				<line
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					x1="14.985"
					x2="14.985"
					y1="3"
					y2="21"
				/>
				<line
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					x1="21"
					x2="3"
					y1="9.015"
					y2="9.015"
				/>
				<line
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					x1="21"
					x2="3"
					y1="14.985"
					y2="14.985"
				/>
			</svg>
		</button>
		<button aria-label="릴스">
			<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
				<title>릴스</title>
				<line
					fill="none"
					stroke="currentColor"
					stroke-linejoin="round"
					stroke-width="2"
					x1="2.049"
					x2="21.95"
					y1="7.002"
					y2="7.002"
				/>
				<line
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					x1="13.504"
					x2="16.362"
					y1="2.001"
					y2="7.002"
				/>
				<line
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					x1="7.207"
					x2="10.002"
					y1="2.11"
					y2="7.002"
				/>
				<path
					d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/>
				<path
					d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
					fill-rule="evenodd"
				/>
			</svg>
		</button>
		<button aria-label="태그됨">
			<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
				<title>태그됨</title>
				<path
					d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/>
				<path
					d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/>
				<circle
					cx="12.072"
					cy="11.075"
					fill="none"
					r="3.556"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				/>
			</svg>
		</button>
	</nav>

	<section class="gallery">
		{#each posts as post}
			<div
				class="gallery-item"
				style="background-image: url({post.image})"
				on:click={() => (selectedPost = post)}
			></div>
		{/each}
	</section>
</div>

{#if selectedPost}
	<div class="post-view">
		<header class="post-header">
			<button class="back-button" on:click={() => (selectedPost = null)}>←</button>
		</header>
		<Feed
			image={selectedPost.image}
			username={selectedPost.username}
			date={selectedPost.date}
			caption={selectedPost.caption}
		/>
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
		padding: 0 1rem;
		height: 44px;
		border-bottom: 1px solid #ccc;
		font-weight: bold;
		width: 100%;
	}

	.profile-header .username {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}

	.profile-header .menu {
		position: absolute;
		right: 1rem;
	}

	.profile-identity {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;
		padding: 1rem;
	}

	.avatar {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: #ccc;
		border: 2px solid #eee;
	}

	.stats {
		display: flex;
		justify-content: space-around;
		flex: 1;
	}

	.stats div {
		text-align: center;
	}

	.stats strong {
		display: block;
		font-size: 1rem;
	}

	.stats span {
		font-size: 0.75rem;
		color: #666;
	}

	.profile-info {
		padding: 0 1rem;
	}

	.profile-info .subheading {
		font-size: 0.85rem;
		color: #333;
		font-weight: 500;
		margin-bottom: 0.25rem;
	}

	.profile-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
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

	.highlights {
		display: flex;
		gap: 0.75rem;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		overflow-x: auto;
		width: 100%;
	}

	.highlight {
		text-align: center;
		font-size: 0.75rem;
	}

	.highlight-thumb {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: #ccc;
		margin-bottom: 0.25rem;
		border: 2px solid #eee;
	}

	.tab-menu {
		display: flex;
		justify-content: space-around;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		padding: 0.25rem 0;
	}

	.tab-menu button {
		background: none;
		border: none;
		font-size: 1.1rem;
		cursor: pointer;
		color: #444;
	}

	.tab-menu .active {
		color: black;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: #ccc;
	}

	.gallery-item {
		aspect-ratio: 1 / 1;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.subheading {
		font-size: 0.85rem;
		color: #333;
		font-weight: 500;
		margin-bottom: 0.25rem;
	}

	.profile-identity .info-text p {
		margin: 0.25rem 0;
		font-size: 0.75rem;
		line-height: 1.3;
	}

	.profile-identity .info-text a {
		color: #00376b;
		text-decoration: none;
		font-size: 0.75rem;
	}

	.profile-identity .mutuals {
		font-size: 0.75rem;
		color: #555;
	}

	.link-line {
		display: flex;
		align-items: center;
		gap: 0.25rem;
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

	.post-header {
		height: 44px;
		display: flex;
		align-items: center;
		padding: 0 1rem;
		border-bottom: 1px solid #ddd;
		background: white;
	}

	.back-button {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}
</style>
