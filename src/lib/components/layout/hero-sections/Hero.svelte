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
	<!-- Ultra-dramatic gradient backgrounds -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-black to-secondary-900/30"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.25),transparent_60%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_90%_70%,rgba(236,72,153,0.2),transparent_60%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.15),transparent_70%)]"></div>
	
	<!-- Dynamic grid pattern -->
	<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>
	
	<!-- Animated light streaks -->
	<div class="absolute inset-0">
		<div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent animate-pulse"></div>
		<div class="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-secondary-400/50 to-transparent animate-pulse" style="animation-delay: 1s;"></div>
	</div>
	
	<!-- Top gradient for nav readability -->
	<div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/95 to-transparent"></div>
	
	<!-- Bottom gradient for text contrast -->
	<div class="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

	<header
		class="relative z-10 flex items-end justify-start px-8 pb-16"
		style:min-height="100vh"
		data-enter-container
	>
		<div class="max-w-7xl w-full">
			<div class="space-y-8 text-left max-w-5xl">
				<h1 class="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.8] tracking-[-0.05em] text-white relative" data-enter>
					<!-- Glow effect behind text -->
					<div class="absolute inset-0 bg-gradient-to-r from-primary-400/30 via-white/20 to-secondary-400/30 blur-3xl opacity-60 scale-110"></div>
					
					<!-- Main text with ultra-dramatic styling -->
					<span class="relative block bg-gradient-to-r from-white via-primary-100 via-white to-secondary-100 bg-clip-text text-transparent drop-shadow-2xl filter brightness-110 contrast-125">
						<AnimateText text={title} staggerDelay={60} animationDuration={1500} />
					</span>
					
					<!-- Subtle text shadow for depth -->
					<div class="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-white/10 to-secondary-600/20 bg-clip-text text-transparent translate-x-1 translate-y-1 -z-10">
						{title}
					</div>
				</h1>

				<p class="text-2xl lg:text-3xl font-semibold text-white/95 max-w-3xl leading-relaxed tracking-wide" data-enter>
					{subtitle}
				</p>

				{#if callsToAction.length > 0}
					<div class="flex flex-col sm:flex-row gap-6 items-start pt-4" data-enter>
						{#each callsToAction as cta, index}
							<Button
								href={cta.href}
								size="xl"
								variant={index % 2 === 0 ? "primary" : "secondary"}
								class="text-xl px-20 py-8 font-black shadow-2xl border border-white/30 backdrop-blur-xl hover:scale-105 hover:shadow-primary-500/25 transition-all duration-500 relative overflow-hidden group"
							>
								<!-- Button glow effect -->
								<div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<span class="relative z-10">{cta.label}</span>
							</Button>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</header>
</div>
