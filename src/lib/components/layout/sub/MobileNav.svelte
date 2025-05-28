<script lang="ts">
	// Types
	import type { NavItem } from "$lib/navigation";

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import IconMenu from "~icons/lucide/menu";
	import IconChevronRight from "~icons/lucide/chevron-right";

	// Utils
	import { cta, navigation } from "$lib/navigation";
	import { beforeNavigate } from "$app/navigation";

	// Props
	const { items = [] }: { items: typeof navigation } = $props();

	// State
	let isMenuOpen = $state(false);
	let scrollBarWidth: number = $state(0);
	let themeColor: string = $state("");
	let originalThemeColor: string | null = $state(null);

	$effect(() => {
		scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
	});

	$effect(() => {
		const metaThemeColor = document.querySelector('meta[name="theme-color"]');
		originalThemeColor = metaThemeColor?.getAttribute("content");
	});

	$effect(() => {
		try {
			// Handle body scroll locking when menu is open
			if (isMenuOpen) {
				// Get accurate scrollbar width - recalculate to handle viewport changes
				scrollBarWidth = Math.max(0, window.innerWidth - document.documentElement.clientWidth);

				// Lock body scroll with padding to prevent layout shift
				if (document.body) {
					document.body.style.overflow = "hidden";
					document.body.style.paddingRight = `${scrollBarWidth}px`;
				}

				// Get computed background style for theme-color meta tag
				const navElement = document.getElementById("nav") || document.querySelector("#nav");

				if (navElement) {
					// Use computed style for accurate color
					const computedStyle = window.getComputedStyle(navElement);
					themeColor = computedStyle.backgroundColor || computedStyle.background;
				} else {
					// Fallback with theme-aware default
					themeColor = document.documentElement.classList.contains("dark")
						? "hsl(var(--background))" // dark mode fallback using CSS variable
						: "hsl(var(--background))"; // light mode fallback using CSS variable
				}
			} else {
				// Restore normal scrolling
				if (document.body) {
					document.body.style.overflow = "";
					document.body.style.paddingRight = "";
				}

				// Restore original theme color
				themeColor = originalThemeColor || "";
			}
		} catch (_) {
			// Ensure body scroll is restored in case of error
			if (document.body) {
				document.body.style.overflow = "";
				document.body.style.paddingRight = "";
			}
		}
	});

	beforeNavigate(() => {
		if (isMenuOpen) {
			isMenuOpen = false;
		}
	});
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === "Escape" && isMenuOpen) {
			isMenuOpen = false;
		}
	}}
/>

<svelte:head>
	{#if themeColor}
		<meta name="theme-color" content={themeColor} />
	{/if}
</svelte:head>
<!-- Futuristic Mobile Nav Menu -->
<div
	id="nav"
	class={[
		"items-between group/nav-list bg-black/95 backdrop-blur-2xl fixed inset-0 -z-10 m-0 grid h-[100dvh] content-between overflow-y-auto pt-32 transition duration-500 ease-out border-r-2 border-cyan-400/30",
		"pointer-events-none translate-x-[-100%] data-[show]:pointer-events-auto data-[show]:translate-x-0"
	]}
	data-show={isMenuOpen || null}
>
	<!-- Futuristic grid background -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(6,182,212,0.1)_50%,transparent_100%)] bg-[length:50px_100%]"></div>
		<div class="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(6,182,212,0.05)_50%,transparent_100%)] bg-[length:100%_30px]"></div>
	</div>

	<ul class="nav-list container mx-auto relative z-10">
		{#each items as item, index}
			{@render linkOrGroup(item, index)}
		{/each}
	</ul>

	<div class="section-px section-pb container mx-auto w-full relative z-10">
		<!-- Futuristic CTA Button -->
		<div class="relative group">
			<div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
			<Button 
				size="lg" 
				variant="primary" 
				class="relative z-0 w-full bg-black border-2 border-cyan-400/50 text-cyan-100 hover:text-white hover:bg-cyan-400/10 font-bold tracking-wider rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]" 
				href={cta.href}
			>
				{cta.label}
			</Button>
		</div>
	</div>
</div>

<div class="flex items-center justify-end gap-4">
	<!-- Futuristic CTA Button for mobile -->
	<div class="relative group">
		<div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
		<Button 
			size="sm" 
			variant="secondary" 
			href={cta.href} 
			class="relative bg-black border border-cyan-400/50 text-cyan-100 hover:text-white hover:bg-cyan-400/10 font-bold tracking-wide px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm"
		>
			{cta.label}
		</Button>
	</div>

	<!-- Futuristic Menu Button -->
	<div class="relative group">
		<div class="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
		<Button
			aria-label="Toggle nav"
			size="lg"
			variant="ghost"
			hideLabel
			suffix={IconMenu}
			iconOnly
			class="relative z-50 max-h-full text-white hover:bg-cyan-400/10 border border-cyan-400/30 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:text-cyan-300"
			onclick={() => (isMenuOpen = !isMenuOpen)}
		>
			Menu
		</Button>
	</div>
</div>

{#snippet linkOrGroup(item: NavItem, index: number)}
	{#if item.children}
		<details class="group transition-all duration-300 ease-out border-b border-cyan-400/20">
			<summary
				class="section-px nav-item text-title2 text-white hover:bg-cyan-400/10 flex cursor-pointer list-none items-center justify-between transition-all select-none group-open:font-bold group-open:text-cyan-300 font-bold tracking-wide"
				>{item.label}
				<IconChevronRight class="transition duration-300 ease-out group-open:rotate-90 text-cyan-400" /></summary
			>

			<ul
				class="my-3 grid transition-all [clip-path:inset(0,0,100%,0)] group-open:[clip-path:inset(0)] bg-black/50 rounded-lg mx-4"
			>
				{#each item.children as child, childIndex}
					{@render linkOrGroup(child, childIndex)}
				{/each}
			</ul>
		</details>
	{:else}
		<a
			href={item?.href}
			class="section-px group nav-item hover:bg-cyan-400/10 text-title2 flex flex-col transition-all duration-300 ease-out border-b border-cyan-400/10 relative"
			aria-label={item.label}
		>
			<!-- Holographic effect -->
			<div class="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-cyan-400 to-blue-500 transition-all duration-300 group-hover:h-full"></div>
			
			<span
				style:transition-delay="{index * 150}ms"
				class="text-white transition-all duration-500 ease-out group-hover:text-cyan-300 font-bold tracking-wide relative z-10"
			>
				<span
					style:transition-delay="{index * 50}ms"
					class="inline-block transition duration-300 ease-out group-hover:translate-x-2">{item.label}</span
				>
			</span>
		</a>
	{/if}
{/snippet}

<style lang="postcss">
	@reference '../../../../app.css';
	.nav-item {
		@apply py-2.5;
	}

	/* Hide default details marker */
	:global(summary::marker),
	:global(summary::-webkit-details-marker) {
		display: none;
	}
</style>
