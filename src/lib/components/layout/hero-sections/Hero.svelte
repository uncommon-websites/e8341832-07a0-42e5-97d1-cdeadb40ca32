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

<div class="bg-[#FAF5EC]" {...rest}>
	<header
		class={[
			"section-px container mx-auto grid items-end gap-16 gap-y-9 py-12 pt-24 text-balance",
			centered ? "place-items-center text-center" : " xl:grid-cols-[1fr_auto]"
		]}
		data-enter-container
	>
		<div class="grid gap-6" class:max-w-prose={centered}>
			<h1 class="text-display w-full" data-enter>
				<span class="block"><AnimateText text={title} staggerDelay={120} animationDuration={1000} /></span>
				{#if !centered}
					<span class="text-emphasis-dim block"><AnimateText text={subtitle} staggerDelay={60} animationDuration={800} /></span>
				{/if}
			</h1>

			{#if centered}
				<p
					data-enter
					class={[
						"text-muted-foreground text-headline mx-auto block max-w-[45ch] transition duration-500 ease-out"
						// isTitleComplete ? "opacity-100" : "translate-y-2 opacity-0 blur-sm"
					]}
				>
					{subtitle}
				</p>
			{/if}
		</div>

		{#if callsToAction.length > 0}
			<div class="flex gap-4" data-enter>
				{#each callsToAction as cta, index}
					<Button
						href={cta.href}
						size="lg"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="max-lg:hidden">{cta.label}</Button
					>
					<Button
						href={cta.href}
						size="md"
						variant={index % 2 === 0 ? "primary" : "secondary"}
						class="lg:hidden">{cta.label}</Button
					>
				{/each}
			</div>
		{/if}
	</header>

	{#if imageSrc && !withSymbols}
		<div class="col-span-full aspect-video" data-enter>
			<img
				src={imageSrc}
				alt="Customer"
				class="size-full object-cover"
				onerror={handleImageError}
			/>
		</div>
	{/if}

	{#if withSymbols}
		<div class="relative mt-12 overflow-hidden py-20" data-enter>
			<!-- Background pattern -->
			<div class="absolute inset-0 grid grid-cols-6 gap-8 opacity-10">
				{#each symbols as symbol, index}
					<div 
						bind:this={symbolElements[index]}
						class="flex items-center justify-center {symbol.size}"
						style:color={symbol.color}
						style:transform="rotate({Math.random() * 30 - 15}deg)"
					>
						{symbol.icon}
					</div>
				{/each}
			</div>
			
			<!-- Main floating symbols with enhanced animations -->
			<div class="relative min-h-[300px]">
				<div class="absolute left-[8%] top-[15%] animate-bounce" style:animation-delay="0s" style:animation-duration="3s">
					<span class="text-7xl drop-shadow-lg" style:color="#FF6B35">🎯</span>
				</div>
				<div class="absolute right-[12%] top-[5%] animate-pulse" style:animation-delay="1s" style:animation-duration="2s">
					<span class="text-6xl drop-shadow-lg" style:color="#FF8C42">⚡</span>
				</div>
				<div class="absolute left-[15%] bottom-[25%] animate-bounce" style:animation-delay="2s" style:animation-duration="2.5s">
					<span class="text-8xl drop-shadow-lg" style:color="#FF9F1C">🚀</span>
				</div>
				<div class="absolute right-[20%] bottom-[15%] animate-pulse" style:animation-delay="0.5s" style:animation-duration="3.5s">
					<span class="text-6xl drop-shadow-lg" style:color="#FFB627">💡</span>
				</div>
				<div class="absolute left-[45%] top-[10%] animate-bounce" style:animation-delay="1.5s" style:animation-duration="2.8s">
					<span class="text-7xl drop-shadow-lg" style:color="#FF6B35">🔥</span>
				</div>
				<div class="absolute right-[35%] bottom-[35%] animate-pulse" style:animation-delay="2.5s" style:animation-duration="2.2s">
					<span class="text-5xl drop-shadow-lg" style:color="#FF8C42">⭐</span>
				</div>
				<div class="absolute left-[30%] bottom-[10%] animate-bounce" style:animation-delay="3s" style:animation-duration="3.2s">
					<span class="text-6xl drop-shadow-lg" style:color="#FF9F1C">🎪</span>
				</div>
				<div class="absolute right-[45%] top-[25%] animate-pulse" style:animation-delay="1.8s" style:animation-duration="2.7s">
					<span class="text-5xl drop-shadow-lg" style:color="#FFB627">🎨</span>
				</div>
			</div>
		</div>
	{/if}
</div>
