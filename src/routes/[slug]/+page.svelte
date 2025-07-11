<script lang="ts">
	import { browser } from '$app/environment';
	export let data: { config: import('$lib/stages').StageConfig };
	export const ssr = false;
</script>

{#if browser}
	<svelte:component this={data.config.component} />
{/if}
