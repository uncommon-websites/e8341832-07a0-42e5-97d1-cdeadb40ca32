<script lang="ts">
	// Utils
	import { inView } from "motion";
	import { onMount } from "svelte";

	// Props
	let {
		text = "",
		oncomplete = () => {},
		show = $bindable(true),
		staggerDelay = 80,
		animationDuration = 800
	}: { 
		text: string; 
		show?: boolean; 
		oncomplete?: () => void;
		staggerDelay?: number;
		animationDuration?: number;
	} = $props();

	// State
	let words = $derived(text.split(" "));
	let element: HTMLElement | null = null;

	function handleWordIntroEnd(index: number) {
		if (index + 1 === words.length) {
			setTimeout(() => {
				oncomplete();
			}, 300);
		}
	}

	onMount(() => {
		if (element) {
			inView(element, (element, entry) => {
				if (entry.isIntersecting) {
					show = true;
				}
			});
		}
	});
</script>

<span class:show bind:this={element}>
	{#each (text || "").split(" ") as word, i}
		<span
			class="animated-word inline-block origin-left"
			style:--delay="{i * staggerDelay}ms"
			style:--duration="{animationDuration}ms"
			onanimationend={() => handleWordIntroEnd(i)}
		>
			{word}
		</span>{" "}
	{/each}
</span>

<style lang="postcss">
	.animated-word {
		opacity: 0;
		transform: translateY(20px) scale(0.95);
		filter: blur(8px);
		display: inline-block;
	}

	.show .animated-word {
		animation: appearAnimation var(--duration, 800ms) cubic-bezier(0.16, 1, 0.3, 1) forwards;
		animation-delay: var(--delay);
		opacity: 0;
	}

	@keyframes appearAnimation {
		0% {
			opacity: 0;
			transform: translateY(20px) scale(0.95);
			filter: blur(8px);
		}
		60% {
			opacity: 0.8;
			transform: translateY(-2px) scale(1.02);
			filter: blur(2px);
		}
		100% {
			opacity: 1;
			transform: translateY(0) scale(1);
			filter: blur(0);
		}
	}

	/* Add subtle hover effect for interactivity */
	.show .animated-word:hover {
		transform: translateY(-1px) scale(1.05);
		transition: transform 0.2s ease-out;
	}
</style>
