<script lang="ts">
	// Components
	import Marquee from "./sub/Marquee.svelte";

	// Props
	const {
		paused,
		label = "Scaling companies like yours",
		layout = "vertical",
		mode = "light",
		logoUrls = [
			"https://cdn.brandfetch.io/facebook.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
			"https://cdn.brandfetch.io/amazon.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
			"https://cdn.brandfetch.io/google.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7",
			"https://cdn.brandfetch.io/apple.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7"
		],
		...rest
	}: {
		paused?: boolean;
		label?: string;
		layout?: "horizontal" | "vertical";
		mode?: "light" | "dark";
		logoUrls?: string[];
	} = $props();
</script>

<div
	data-scroller
	class="relative bg-black border-y border-white/10 py-16 overflow-hidden"
	class:!flex={layout === "horizontal"}
	class:dark={mode === "dark"}
	{...rest}
>
	<!-- Dramatic background effects -->
	<div class="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-secondary-900/20"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>
	
	<div class="relative z-10 grid place-items-center gap-8">
		{#if label}
			<h2 class="text-2xl font-bold text-white tracking-tight text-center drop-shadow-lg">
				{label}
			</h2>
		{/if}
		<div class="w-full max-w-6xl overflow-hidden">
			<Marquee
				class="mask-image h-full items-center [--gap:theme(spacing.16)]"
				speed={paused ? 0 : 0.08}
			>
				{#each logoUrls as logo}
					<div class="mx-12 transform transition-all duration-300 hover:scale-110">
						<img
							src={logo}
							class="h-12 w-fit object-contain brightness-0 invert opacity-80 hover:opacity-100 filter drop-shadow-lg"
							alt="Company logo"
						/>
					</div>
				{/each}
			</Marquee>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(.mask-image) {
		mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
	}
</style>
