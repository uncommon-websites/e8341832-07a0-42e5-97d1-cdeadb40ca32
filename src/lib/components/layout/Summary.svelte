<!--
@component
    Use this component to showcase the main #1 benefit of a product or service in a clear and concise manner.

    Usage:
    ```html
    <Summary
      title="A clear value proposition"
      text="This component showcases your most important benefit with a smooth animation effect as users scroll"
    />
    ```

    Props:
    - `title`: A summary hint about the benefit (sentence case)
    - `text`: Main benefit statement, concise and impactful
-->

<script lang="ts">
	// Utils
	import { scroll, animate, stagger } from "motion";
	import { onMount } from "svelte";

	// Props
	const {
		title,
		text,
		...rest
	}: {
		title?: string;
		text: string;
	} = $props();

	// State
	let segments = $derived(text.split("\n\n"));
	let containerElement: HTMLDivElement;

	onMount(() => {
		if (!containerElement) return;

		// Get all word elements as an array
		const wordElements = Array.from(containerElement.querySelectorAll(".word"));

		const sequence = [
			[
				wordElements,
				{
					opacity: [0, 0, 1],
					y: ["1em", 0],
					filter: ["blur(12px)", "blur(8px) brightness(250%)", "blur(0px)"]
				},
				{
					at: "0",
					delay: stagger(0.015),
					ease: "easeInOut"
				}
			]
		];

		scroll(animate(sequence), {
			target: containerElement,
			offset: ["start end", "center center"]
		});
	});
</script>

<div
	class="relative overflow-hidden bg-black border-y border-white/10"
	bind:this={containerElement}
	{...rest}
>
	<!-- Subtle background effects -->
	<div class="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-secondary-900/10"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]"></div>
	
	<div class="section-px section-py container mx-auto flex flex-col items-start gap-12 text-pretty lg:grid xl:flex-row"
		class:lg:grid-cols-[1fr_2fr]={!!title}
	>
		{#if title}
			<p class="text-white/70 text-2xl font-bold word tracking-tight">{title}</p>
		{/if}

		<div class="text-title1 container-sm gap relative mx-auto grid">
			{#each segments as paragraph, i}
				<p class="mb-[1.5em] last:mb-0 text-white/95 text-3xl font-medium leading-relaxed">
					{#each paragraph.split(" ").filter(Boolean) as word}
						<span class="word relative inline-block transition duration-150 ease-out">{word}</span
						>{" "}
					{/each}
				</p>
			{/each}
		</div>
	</div>
</div>
