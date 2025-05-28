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

<section
	class="section-py relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/20"
	{...rest}
>
	<!-- Subtle geometric pattern overlay -->
	<div class="absolute inset-0 opacity-[0.02]">
		<svg class="h-full w-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
					<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
				</pattern>
			</defs>
			<rect width="100" height="100" fill="url(#grid)" />
		</svg>
	</div>

	<div class="section-px container mx-auto relative z-10">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<h2 class="text-title1 text-foreground mb-4">Trusted by teams who hire with confidence</h2>
			<p class="text-body text-foreground/60 max-w-2xl mx-auto">
				See how Dex transforms hiring for companies and candidates alike
			</p>
		</div>

		<!-- Testimonials Grid -->
		<div class="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
			{#each testimonials as testimonial, index}
				<article
					class="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 ease-out hover:shadow-lg hover:border-border/80 hover:-translate-y-1"
					class:ring-2={current === index}
					class:ring-primary={current === index}
					class:ring-offset-2={current === index}
					class:ring-offset-background={current === index}
					class:scale-[1.02]={current === index}
					class:shadow-xl={current === index}
				>
					<!-- Quote -->
					<blockquote class="text-body text-foreground/90 mb-8 leading-relaxed">
						"{testimonial.quote}"
					</blockquote>

					<!-- Attribution -->
					<footer class="flex items-center gap-4">
						<!-- Avatar placeholder with initials -->
						<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border border-primary/20">
							<span class="text-sm font-semibold text-primary">
								{testimonial.name.split(' ').map(n => n[0]).join('')}
							</span>
						</div>
						
						<div>
							<cite class="not-italic">
								<p class="font-semibold text-foreground">{testimonial.name}</p>
								<p class="text-sm text-foreground/60">
									{testimonial.position}, {testimonial.company}
								</p>
							</cite>
						</div>
					</footer>

					<!-- Subtle corner accent -->
					<div class="absolute top-6 right-6 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
						</svg>
					</div>
				</article>
			{/each}
		</div>

		<!-- Navigation Dots -->
		<div class="flex justify-center gap-3 mt-12">
			{#each testimonials as _, index}
				<button
					class="w-3 h-3 rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
					class:bg-primary={current === index}
					class:scale-125={current === index}
					class:bg-border={current !== index}
					class:hover:bg-border/80={current !== index}
					aria-label="View testimonial {index + 1}"
					onclick={() => goToTestimonial(index)}
				></button>
			{/each}
		</div>

		<!-- Subtle bottom accent -->
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
	</div>
</section>
