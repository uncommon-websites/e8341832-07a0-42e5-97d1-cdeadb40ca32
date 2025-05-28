<script lang="ts">
	type Props = {
		items: typeof navigation;
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import { NavigationMenu } from "bits-ui";
	import DesktopNavDropdown from "./_DesktopNavDropdown.svelte";

	// Utils
	import { cta, navigation } from "$lib/navigation";

	// Props
	const { items }: Props = $props();
</script>

<div
	class="relative flex items-center justify-end gap-8"
>
	<NavigationMenu.Root class="text-white relative z-10 flex justify-end">
		<NavigationMenu.List class="group flex list-none items-center justify-center gap-8 p-1">
			{#each items as item}
				<NavigationMenu.Item
					class="relative group/item"
				>
					{#if item.children}
						<DesktopNavDropdown {item} />
					{:else}
						<NavigationMenu.Link 
							class="link relative text-white font-bold text-lg tracking-wide transition-all duration-300 hover:text-cyan-300 drop-shadow-lg group/link"
							href={item.href}
						>
							<!-- Holographic underline effect -->
							<span class="relative z-10">{item.label}</span>
							<div class="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover/link:w-full"></div>
							
							<!-- Glitch effect on hover -->
							<div class="absolute inset-0 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200">
								<span class="absolute inset-0 text-cyan-300 animate-pulse" style="clip-path: inset(0 0 95% 0);">{item.label}</span>
								<span class="absolute inset-0 text-blue-300 animate-pulse" style="clip-path: inset(95% 0 0 0); animation-delay: 0.1s;">{item.label}</span>
							</div>
						</NavigationMenu.Link>
					{/if}
				</NavigationMenu.Item>
			{/each}
			<NavigationMenu.Indicator
				class="data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in top-full z-10 flex h-2.5 items-end justify-center overflow-hidden opacity-100 transition-[all,transform_200ms_ease] duration-200 data-[state=hidden]:opacity-0"
			>
				<div class="bg-cyan-400 relative top-[70%] size-2.5 rotate-[45deg] rounded-tl-[2px] shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
			</NavigationMenu.Indicator>
		</NavigationMenu.List>
		<div class="absolute top-full right-0 justify-center perspective-[2000px]">
			<NavigationMenu.Viewport
				forceMount
				class="text-white bg-black/95 data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in border-cyan-400/30 relative mt-2.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-lg border-2 p-4 shadow-[0_0_50px_rgba(6,182,212,0.3)] backdrop-blur-xl transition-[width,_height] duration-200 data-[state=closed]:pointer-events-none data-[state=closed]:translate-y-4 data-[state=closed]:opacity-0 sm:w-[var(--bits-navigation-menu-viewport-width)]"
			/>
		</div>
	</NavigationMenu.Root>

	<!-- Futuristic CTA Button -->
	<div class="relative group">
		<!-- Animated border -->
		<div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
		
		<Button 
			size="sm" 
			variant="secondary" 
			href={cta.href} 
			class="relative bg-black border-2 border-cyan-400/50 text-cyan-100 hover:text-white hover:bg-cyan-400/10 font-bold tracking-wider px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] backdrop-blur-sm"
		>
			<span class="relative z-10">{cta.label}</span>
			<!-- Scanning line effect -->
			<div class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
		</Button>
	</div>
</div>

<style lang="postcss">
	@reference '../../../../app.css';

	:global(.link) {
		@apply hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground inline-flex w-full items-center transition-colors focus:outline-hidden disabled:pointer-events-none disabled:opacity-50;
	}

	:global([data-navigation-menu-content]) {
		position: absolute;
		top: 0;
		right: 0;
		animation-duration: 200ms;
		animation-timing-function: var(--ease-in-out);
	}

	:global([data-motion="from-start"]) {
		animation-name: enter-from-left;
	}

	:global([data-motion="from-end"]) {
		animation-name: enter-from-right;
	}

	:global([data-motion="to-start"]) {
		animation-name: exit-to-left;
	}

	:global([data-motion="to-end"]) {
		animation-name: exit-to-right;
	}

	:global([data-navigation-menu-viewport]) {
		position: relative;
		width: var(--bits-navigation-menu-viewport-width);
		height: var(--bits-navigation-menu-viewport-height);
		transition:
			width,
			height,
			200ms var(--ease-out);
	}

	@keyframes enter-from-right {
		from {
			opacity: 0;
			transform: translateX(200px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes enter-from-left {
		from {
			opacity: 0;
			transform: translateX(-200px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes exit-to-right {
		from {
			opacity: 1;
			transform: translateX(0);
		}
		to {
			opacity: 0;
			transform: translateX(200px);
		}
	}

	@keyframes exit-to-left {
		from {
			opacity: 1;
			transform: translateX(0);
		}
		to {
			opacity: 0;
			transform: translateX(-200px);
		}
	}

	@keyframes animate-fade-out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
