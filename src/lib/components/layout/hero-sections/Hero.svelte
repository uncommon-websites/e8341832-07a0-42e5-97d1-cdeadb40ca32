<!--
    @component
    Bold hero banner with eye-catching text and strong call-to-action. NEVER use title case.

    Usage:
    ```html
    <Hero
      title="Bold Claim"
      subtitle="Quick Value"
      imageSrc="/hero.jpg"
      callsToAction={[
        {
          href: "/start",
          label: "Go"
        },
        {
          href: "/learn",
          label: "More"
        }
      ]}
    />
    ```

    Props:
    - `title`: Main headline (string)
    - `subtitle`: Supporting text (string)
    - `imageSrc`: Hero image URL (string)
    - `callsToAction`: CTA buttons array (max two: primary, secondary)
    - `withSymbols`: Show colorful orange symbols instead of image (boolean)
-->

<script lang="ts">
	// Components
	import AnimateText from "$lib/components/animation/AnimateText.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import { onMount } from "svelte";
	import { animate, stagger } from "motion";

	// Constants
	import { cta } from "$lib/navigation";
	import { navHeight } from "$lib/state/nav.svelte";

	function handleImageError(e: Event) {
		const target = e.currentTarget as HTMLImageElement;
		target.src = "https://placehold.co/800x600/f8fafc/64748b?text=Hero+image";
	}

	// Types
	type Props = {
		centered?: boolean;
		title: string;
		subtitle: string;
		imageSrc?: string;
		videoSrc?: string;
		withSymbols?: boolean;
		callsToAction?: Array<{
			href: string;
			label: string;
		}>; // A maximum of two calls to action, with the first one being primary and the second one being secondary
	};

	let {
		title,
		subtitle,
		imageSrc,
		videoSrc,
		withSymbols = false,
		callsToAction = [cta],
		centered = false,
		...rest
	}: Props = $props();

	let symbolElements: HTMLElement[] = $state([]);

	const symbols = [
		{ icon: "🎯", color: "#FF6B35", size: "text-4xl" },
		{ icon: "⚡", color: "#FF8C42", size: "text-5xl" },
		{ icon: "🚀", color: "#FF9F1C", size: "text-3xl" },
		{ icon: "💡", color: "#FFB627", size: "text-4xl" },
		{ icon: "🔥", color: "#FF6B35", size: "text-5xl" },
		{ icon: "⭐", color: "#FF8C42", size: "text-3xl" },
		{ icon: "🎪", color: "#FF9F1C", size: "text-4xl" },
		{ icon: "🎨", color: "#FFB627", size: "text-3xl" },
		{ icon: "🌟", color: "#FF6B35", size: "text-5xl" },
		{ icon: "🎭", color: "#FF8C42", size: "text-4xl" }
	];

	onMount(() => {
		if (withSymbols && symbolElements.length > 0) {
			animate(
				symbolElements,
				{
					scale: [0, 1],
					rotate: [0, 360],
					opacity: [0, 1]
				},
				{
					duration: 0.8,
					ease: "easeOut",
					delay: stagger(0.1, {
						startDelay: 0.3,
						ease: "easeInOut"
					})
				}
			);
		}
	});
</script>

<div 
	class="relative overflow-hidden bg-black" 
	style:min-height="100vh"
	{...rest}
>
	<!-- Dramatic gradient backgrounds -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-black to-secondary-900/20"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
	
	<!-- Subtle grid pattern -->
	<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
	
	<!-- Top gradient for nav readability -->
	<div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/90 to-transparent"></div>

	<header
		class="relative z-10 flex items-center justify-center px-8 text-center"
		style:min-height="100vh"
		data-enter-container
	>
		<div class="max-w-7xl space-y-12">
			<h1 class="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.85] tracking-tighter text-white" data-enter>
				<span class="block bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
					<AnimateText text={title} staggerDelay={80} animationDuration={1200} />
				</span>
			</h1>

			<p class="text-2xl font-medium text-white/90 max-w-4xl mx-auto leading-relaxed" data-enter>
				{subtitle}
			</p>

			{#if callsToAction.length > 0}
				<div class="flex flex-col sm:flex-row gap-6 justify-center items-center" data-enter>
					{#each callsToAction as cta, index}
						<Button
							href={cta.href}
							size="xl"
							variant={index % 2 === 0 ? "primary" : "secondary"}
							class="text-xl px-16 py-8 font-bold shadow-2xl border border-white/20 backdrop-blur-md hover:scale-105 transition-all duration-300"
						>
							{cta.label}
						</Button>
					{/each}
				</div>
			{/if}
		</div>
	</header>
</div>
