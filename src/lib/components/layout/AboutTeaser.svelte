<!--
@component AboutTeaser
A minimalist teaser for the about page.
-->
<script lang="ts">
	// Types
	type TeamMember = {
		name: string;
		role: string;
		image: string;
	};

	// Components
	import Button from "../ui/Button.svelte";
	import ScrollText from "./sub/ScrollText.svelte";

	// State
	let sectionRef: HTMLElement;

	let props = $props();

	// Data
	const teamMember: TeamMember = {
  name: "Paddy Lambros",
  role: "Co-founder & CEO",
  image: "/generated/image-a-headshot-of-a-thoughtful-male-founder-.webp"
};
</script>

<section bind:this={sectionRef} class="bg-black border-y border-white/10 relative overflow-hidden" {...props}>
	<!-- Dramatic background effects -->
	<div class="absolute inset-0 bg-gradient-to-br from-secondary-900/10 via-black to-primary-900/15"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.06),transparent_60%)]"></div>
	
	<!-- Subtle grid pattern -->
	<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:120px_120px]"></div>

	<div class="section-px section-py container mx-auto relative z-10">
		<div class="relative mx-auto grid max-w-4xl place-items-center gap-20">
			<ScrollText
        class="text-4xl font-bold text-center text-white leading-relaxed"
        text={`"Hiring is full of misaligned expectations. We built Dex to actually fix the disconnect—and restore trust in how hiring works."`}
      />

			<!-- Team Member & CTA Section -->
			<div class="grid items-center gap-10">
				<div class="flex items-center justify-center gap-6">
					<img
						src={teamMember.image}
						alt={teamMember.name}
						class="size-16 rounded-full object-cover border-2 border-white/20"
					/>
					<div>
						<div class="text-xl font-bold text-white">{teamMember.name}</div>
						<div class="text-lg text-white/70">{teamMember.role}</div>
					</div>
					<Button href="/about" variant="secondary" size="lg" class="ml-12 text-lg px-8 py-4 font-bold border-white/20 hover:border-white/40">Read more</Button>
				</div>
			</div>
		</div>
	</div>
</section>
