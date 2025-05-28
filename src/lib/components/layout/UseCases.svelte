<script lang="ts">
	// Types
	type UseCase = {
		title: string;
		description: string;
		image: string;
		uniqeSellingPoints?: string[];
		link?: {
			href: string;
			label: string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";

	// Props
	const {
		title,
		subtitle,
		useCases = [],
		...rest
	}: { title: string; subtitle: string; useCases: UseCase[] } = $props();

	let current = $state(0);

	import { onMount } from "svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import { fade } from "svelte/transition";
	import { cubicInOut, cubicOut } from "svelte/easing";

	// Preload images lazily
	onMount(() => {
		if (useCases.length) {
			useCases.forEach((useCase, index) => {
				if (index !== current && useCase.image) {
					const img = new Image();
					img.loading = "lazy";
					img.src = useCase.image;
				}
			});
		}
	});
</script>

<section class="[--gap:--spacing(4)] [--inner-radius:calc(var(--radius)-var(--gap))] bg-black border-y border-white/10 relative overflow-hidden" {...rest}>
	<!-- Dramatic background effects -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-900/15 via-black to-secondary-900/20"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(168,85,247,0.1),transparent_50%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.08),transparent_50%)]"></div>
	
	<!-- Subtle grid pattern -->
	<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

	<div class="section-px section-py container mx-auto grid relative z-10">
		<SectionHeader {title} {subtitle} />

		<div class="grid gap-8 rounded-3xl lg:grid-cols-[1fr_2fr]">
			<!-- Left column: Use cases list -->
			<div
				class="bg-gray-900/40 border-white/10 row-start-2 grid content-between gap-10 rounded-3xl border p-8 lg:row-start-auto backdrop-blur-sm"
			>
				<div class="space-y-6">
					{#each useCases as useCase, index}
						<div class="group">
							<button
								class="text-2xl font-bold hover:text-primary-400 row-start-1 mb-3 w-full text-left transition-all duration-300 leading-tight"
								class:text-primary-400={current === index}
								class:text-white/70={current !== index}
								onpointerenter={() => (current = index)}
							>
								{useCase.title}
							</button>
						</div>
					{/each}
				</div>
				<article class="row-start-2">
					<p class="text-lg text-white/85 leading-relaxed mb-6">{useCases[current].description}</p>
					{#if useCases[current]?.link}
						<div class="mt-8">
							<Button href={useCases[current].link.href} variant="secondary" class="text-lg px-8 py-4 font-bold border-white/20 hover:border-white/40">
								{useCases[current].link.label}
							</Button>
						</div>
					{/if}
				</article>
			</div>

			<!-- Right column: Featured image -->
			<div class="grid overflow-clip rounded-3xl bg-gray-900/20 border border-white/10">
				{#key useCases[current]?.image}
					<img
						transition:fade={{ easing: cubicInOut, duration: 300 }}
						src={useCases[current].image}
						alt="Featured use case"
						loading="lazy"
						class="grid-center aspect-[3/2] size-full max-h-full object-cover"
					/>
				{/key}
			</div>
		</div>
	</div>
</section>
