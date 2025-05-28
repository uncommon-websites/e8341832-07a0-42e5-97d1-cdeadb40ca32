<script lang="ts">
	// Components
	import MobileNav from "./sub/MobileNav.svelte";
	import DesktopNav from "./sub/DesktopNav.svelte";
	import Logo from "../Logo.svelte";

	// Utils
	import { MediaQuery } from "svelte/reactivity";
	import { navHeight } from "$lib/state/nav.svelte";
	import { scrollY } from "svelte/reactivity/window";
	import { CONFIG } from "$lib/content";
	import { navigation } from "$lib/navigation";

	// State
	const touch = new MediaQuery("(hover: none) and (pointer: coarse)");
	const mobile = new MediaQuery("(max-width: 1024px)");

	const DURATION = 500;

	const navItems = $derived(
		navigation
			.filter((item) => item.showInNav)
			.map((item) => {
				if (!item.children) return item;

				return {
					...item,
					children: item.children.filter((child) => child.showInNav !== false)
				};
			})
	);
</script>

<div
	bind:clientHeight={navHeight.current}
	class={[
		"fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform",
		scrollY.current !== 0 
			? "bg-black/95 backdrop-blur-2xl border-b border-cyan-400/30 shadow-[0_0_50px_rgba(6,182,212,0.3)]" 
			: "bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-xl"
	]}
	style:--tw-duration="{DURATION}ms"
>
	<!-- Futuristic grid overlay -->
	<div class="absolute inset-0 opacity-20">
		<div class="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(6,182,212,0.1)_50%,transparent_100%)] bg-[length:100px_100%] animate-pulse"></div>
		<div class="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(6,182,212,0.05)_50%,transparent_100%)] bg-[length:100%_50px]"></div>
	</div>

	<!-- Animated border -->
	<div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
	
	<div class="relative z-10 section-px container mx-auto grid grid-cols-[auto_1fr] gap-8 py-6">
		<a href="/" class="flex items-center gap-4 group relative">
			<!-- Holographic glow effect -->
			<div class="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
			
			<div class="relative">
				<Logo class="z-50 size-10 transition-all duration-300 group-hover:scale-125 brightness-0 invert group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
				<!-- Rotating ring around logo -->
				<div class="absolute inset-0 border border-cyan-400/30 rounded-full animate-spin [animation-duration:8s] group-hover:border-cyan-400/60"></div>
			</div>

			<div class="relative">
				<span class="font-black text-2xl tracking-wider text-transparent bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300">
					{CONFIG.companyName}
				</span>
				<!-- Scanning line effect -->
				<div class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent w-full h-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
			</div>
		</a>

		<!-- Navigation items with futuristic styling -->
		<div class="relative">
			{#if mobile?.current}
				<div class="lg:hidden">
					<MobileNav items={navItems} />
				</div>
			{:else}
				<div class="hidden lg:block">
					<DesktopNav items={navItems} />
				</div>
			{/if}
		</div>
	</div>

	<!-- Particle effect overlay -->
	<div class="absolute inset-0 pointer-events-none">
		{#each Array(6) as _, i}
			<div 
				class="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"
				style:left="{15 + i * 15}%"
				style:top="{20 + (i % 2) * 60}%"
				style:animation-delay="{i * 0.5}s"
				style:animation-duration="2s"
			></div>
		{/each}
	</div>
</div>
