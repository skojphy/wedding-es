<script lang="ts">
	export let data: { config: import('$lib/stages').StageConfig };
</script>

<svelte:component this={data.config.component} />
