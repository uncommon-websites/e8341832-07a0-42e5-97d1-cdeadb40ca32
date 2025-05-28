<script>
	let { title = "", description = "", class: customClass = "" } = $props();
</script>

<article
	class="bg-gray-900/40 hover:bg-gray-900/60 border-white/10 hover:border-white/20 grid content-between gap-8 rounded-2xl border p-8 text-pretty transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl backdrop-blur-sm {customClass}"
>
	<h3 class="text-2xl font-bold text-white mb-4 leading-tight">
		{title}
	</h3>
	<p class="text-lg text-white/80 max-w-prose leading-relaxed">{description}</p>
</article>
