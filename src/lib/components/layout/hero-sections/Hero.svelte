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
	class="relative overflow-hidden" 
	style:min-height="100vh"
	{...rest}
>
	<!-- Dramatic Background Image -->
	<div 
		class="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
		style:background-image="url('/generated/image-a-dramatic-mountain-landscape-at-sunset-.webp')"
	></div>
	
	<!-- Black Overlay -->
	<div class="absolute inset-0 bg-black/70"></div>
	
	<!-- Top gradient for nav readability -->
	<div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent"></div>

	<header
		class="relative z-10 flex items-end justify-start px-8 pb-20 text-left"
		style:min-height="100vh"
		data-enter-container
	>
		<div class="max-w-6xl">
			<h1 class="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight text-white mb-6" data-enter>
				<span class="block drop-shadow-xl"><AnimateText text={title} staggerDelay={120} animationDuration={1000} /></span>
			</h1>

			<p class="text-xl font-normal text-white/85 max-w-2xl mb-10 drop-shadow-md" data-enter>
				{subtitle}
			</p>

			{#if callsToAction.length > 0}
				<div class="flex gap-8" data-enter>
					{#each callsToAction as cta, index}
						<Button
							href={cta.href}
							size="xl"
							variant={index % 2 === 0 ? "primary" : "secondary"}
							class="text-xl px-12 py-6 font-bold shadow-2xl border-2 border-white/20 backdrop-blur-sm">{cta.label}</Button
						>
					{/each}
				</div>
			{/if}
		</div>
	</header>

	<!-- Symbols removed for hyper minimalistic design -->
</div>
