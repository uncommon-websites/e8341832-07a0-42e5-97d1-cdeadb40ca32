<script lang="ts">
	// Types
	type Testimonial = {
		name: string;
		position: string;
		company: string;
		quote: string;
		image?: string; // Optional now since we're removing images
	};

	// Props
	let { testimonials, ...rest }: { testimonials: Testimonial[] } = $props();

	// State
	let current = $state(0);
	let intervalId: number;

	import { onMount } from "svelte";

	onMount(() => {
		// Auto-rotate testimonials every 4 seconds
		intervalId = setInterval(() => {
			current = (current + 1) % testimonials.length;
		}, 4000);

		return () => {
			clearInterval(intervalId);
		};
	});

	// Manual navigation functions
	function goToTestimonial(index: number) {
		current = index;
		// Reset the interval
		clearInterval(intervalId);
		intervalId = setInterval(() => {
			current = (current + 1) % testimonials.length;
		}, 4000);
	}
</script>

<section class="section-py relative overflow-hidden border-y border-white/10 bg-black" {...rest}>
	<!-- Dramatic background effects -->
	<div
		class="from-primary-900/20 to-secondary-900/15 absolute inset-0 bg-gradient-to-br via-black"
	></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.1),transparent_50%)]"
	></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.08),transparent_50%)]"
	></div>

	<!-- Subtle grid pattern -->
	<div
		class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"
	></div>

	<div class="section-px relative z-10 container mx-auto">
		<!-- Section Header -->
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-6xl font-black tracking-tight text-white">
				Trusted by teams who hire with confidence
			</h2>
			<p class="mx-auto max-w-3xl text-xl leading-relaxed text-white/80">
				See how Dex transforms hiring for companies and candidates alike
			</p>
		</div>

		<!-- Testimonials Grid -->
		<div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
			{#each testimonials as testimonial, index}
				<article
					class="group relative rounded-3xl border border-white/10 bg-gray-900/50 p-10 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
					class:ring-2={current === index}
					class:ring-primary-400={current === index}
					class:ring-offset-2={current === index}
					class:ring-offset-black={current === index}
					class:scale-[1.03]={current === index}
					class:shadow-2xl={current === index}
				>
					<!-- Quote -->
					<blockquote class="mb-10 text-lg leading-relaxed font-medium text-white/95">
						"{testimonial.quote}"
					</blockquote>

					<!-- Attribution -->
					<footer class="flex items-center gap-5">
						<!-- Avatar placeholder with initials -->
						<div
							class="from-primary-500/30 to-secondary-500/20 border-primary-400/30 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 bg-gradient-to-br shadow-lg"
						>
							<span class="text-primary-300 text-base font-bold">
								{testimonial.name
									.split(" ")
									.map((n) => n[0])
									.join("")}
							</span>
						</div>

						<div>
							<cite class="not-italic">
								<p class="text-lg font-bold text-white">{testimonial.name}</p>
								<p class="text-base text-white/70">
									{testimonial.position}, {testimonial.company}
								</p>
							</cite>
						</div>
					</footer>

					<!-- Subtle corner accent -->
					<div
						class="text-primary-400 absolute top-8 right-8 h-10 w-10 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
					>
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
								fill="currentColor"
							/>
						</svg>
					</div>
				</article>
			{/each}
		</div>

		<!-- Navigation Dots -->
		<div class="mt-16 flex justify-center gap-4">
			{#each testimonials as _, index}
				<button
					class="focus:ring-primary-400 h-4 w-4 rounded-full transition-all duration-300 ease-out focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
					class:bg-primary-400={current === index}
					class:scale-125={current === index}
					aria-label="View testimonial {index + 1}"
					onclick={() => goToTestimonial(index)}
				></button>
			{/each}
		</div>
	</div>
</section>
