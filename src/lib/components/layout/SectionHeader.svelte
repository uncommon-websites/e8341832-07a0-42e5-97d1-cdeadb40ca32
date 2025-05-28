<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";

	// Props
	let {
		title = "",
		subtitle = "",
		oncomplete = () => {},
		size = "sm"
	}: {
		title: string;
		subtitle: string;
		oncomplete?: () => void;
		size?: "sm" | "lg";
	} = $props();
</script>

<div
	class={[
		"section-pb-sm container-sm grid text-balance text-center",
		size === "lg" ? "text-display" : "text-title2"
	]}
>
	<h2 class="text-5xl font-black text-white mb-6 tracking-tight">
		<AnimateText text={title} {oncomplete} />
	</h2>
	<p class="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
		<AnimateText text={subtitle} />
	</p>
</div>
