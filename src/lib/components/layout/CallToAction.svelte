<!--
    @component
    A call-to-action component that attracts attention and encourages user engagement.

    Usage:
    ```html
    <CallToAction
      title="Get started today"
      subtitle="Join now"
      description="Ready to experience the difference? Join our community of satisfied customers and see how our solution can transform your workflow."
      image="/path/to/image.jpg"
      callsToAction={[
        {
          href: "/get-started",
          label: "Get Started",
          variant: "primary"
        },
        {
          href: "/contact",
          label: "Talk to Sales",
          variant: "secondary"
        }
      ]}
    />
    ```

    Props:
    - `title`: The main heading text (string)
    - `subtitle`: Secondary heading text (string)
    - `description`: Detailed information about the offer (string)
    - `callsToAction`: Array of CTA objects with href, label, and optional variant properties (CTA[])
    - `imageSrc`: portrait of the company's customer smiling at the camera.
-->

<script lang="ts">
	// Types
	import type { ComponentProps } from "svelte";

	// Components
	import Button from "../ui/Button.svelte";
	import AnimateText from "../animation/AnimateText.svelte";
	import { cta } from "$lib/navigation";

	// Types
	type CTA = {
		href: string;
		label: string;
		variant?: ComponentProps<typeof Button>["variant"];
	};

	// Props
	const {
		title = "Get started today",
		subtitle = "Join now",
		description = "Ready to experience the difference? Join our community of satisfied customers and see how our solution can transform your workflow. ",
		imageSrc = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
		callsToAction = [cta],
		...rest
	}: {
		title?: string;
		subtitle?: string;
		description?: string;
		imageSrc?: string;
		callsToAction?: CTA[];
	} = $props();
</script>

<div class="bg-black border-y border-white/10 relative overflow-hidden" {...rest}>
	<!-- Dramatic background effects -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-900/25 via-black to-secondary-900/20"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.12),transparent_50%)]"></div>
	
	<!-- Subtle grid pattern -->
	<div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

	<section class="section-px section-py container mx-auto relative z-10">
		<div
			class="bg-gray-900/40 border-white/10 grid content-start items-center justify-between gap-12 rounded-3xl border p-12 text-balance backdrop-blur-sm lg:grid-cols-[2fr_1fr]"
		>
			<div class="items-between grid h-full content-between gap-20">
				<h2 class="text-6xl font-black mb-6 flex flex-col text-white leading-tight">
					<span><AnimateText text={title} /></span>
					<span class="text-white/70 text-4xl font-bold mt-2"><AnimateText text={subtitle} /></span>
				</h2>
				<div class="flex flex-col items-start justify-start gap-10">
					<p class="text-xl text-white/85 leading-relaxed">
						{description}
					</p>
					<div class="flex flex-wrap gap-6">
						{#each callsToAction as cta}
							<Button class="w-full md:w-auto text-xl px-12 py-6 font-bold border-white/20 hover:border-white/40" href={cta.href} variant={cta.variant || "primary"}
								>{cta.label}</Button
							>
						{/each}
					</div>
				</div>
			</div>
			<img
				src={imageSrc}
				alt="Visual comparison showing product benefits"
				class="hidden aspect-[4/5] size-full max-h-full w-full rounded-2xl object-cover lg:block border border-white/10"
			/>
		</div>
	</section>
</div>
