<script>
	export let isFollowing = false;
	let showAvatarModal = false;
	const avatarUrl = '/images/insta/insta_profile.webp';
	const openAvatar = () => {
		showAvatarModal = true;
		history.pushState({ avatar: true }, '');
	};
	const closeAvatar = () => {
		showAvatarModal = false;
		if (history.state && history.state.avatar) history.back();
	};
	const handlePopState = (event) => {
		if (showAvatarModal) showAvatarModal = false;
	};
	import { onMount, onDestroy } from 'svelte';
	onMount(() => window.addEventListener('popstate', handlePopState));
	onDestroy(() => window.removeEventListener('popstate', handlePopState));
</script>

<section class="profile-identity">
	<button class="avatar" on:click={openAvatar} aria-label="View profile picture">
		<span class="sr-only">View profile picture</span>
	</button>
	<div class="stats">
		<div><strong>13</strong><span>Posts</span></div>
		<div><strong>{isFollowing ? 10 : 9}</strong><span>Followers</span></div>
		<div><strong>13</strong><span>Following</span></div>
	</div>
</section>
{#if showAvatarModal}
	<div class="modal-overlay" on:click={closeAvatar} role="dialog" aria-modal="true" tabindex="-1">
		<div class="modal-content" on:click|stopPropagation>
			<button class="modal-close" on:click={closeAvatar} aria-label="Close modal">×</button>
			<img src={avatarUrl} alt="Profile avatar" />
		</div>
	</div>
{/if}

<section class="profile-info">
	<strong>piccor_rica</strong>
	<p class="subheading">
		<span>💚</span>
		<span>2017. 08. 18. ~</span>
		<span>A Look Back at Our Highlights</span>
		<span>and 9 Years of Memories in Photos</span>
		<span>📷</span>
	</p>
</section>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
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
		background-image: url('/images/insta/insta_profile.webp');
		background-size: cover;
		background-position: center;
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
	.profile-info .subheading span {
		display: block;
	}

	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}
	.modal-content {
		position: relative;
		width: 80vw;
		height: 80vw;
		max-width: 80vh;
		max-height: 80vh;
	}
	.modal-content img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 4px;
	}
	.modal-close {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: transparent;
		border: none;
		font-size: 2rem;
		color: white;
		cursor: pointer;
	}
</style>
