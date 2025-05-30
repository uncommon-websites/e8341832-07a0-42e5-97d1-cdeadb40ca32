<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Human-first, always",
    description: "We blend AI efficiency with genuine empathy, treating everyone as a person—not a number."
  },
  {
    title: "Move fast, stay open",
    description: "We act quickly, share ideas freely, and welcome fresh perspectives—no ego, just collective progress."
  },
  {
    title: "Solve for real impact",
    description: "We build tools that make hiring more meaningful, rewarding, and accessible for everyone."
  },
  {
    title: "Data with heart",
    description: "We trust insights, but never lose sight of people—the story behind the stats matters most."
  },
  {
    title: "Laugh, care, grow",
    description: "We celebrate wins, lift each other up, and don’t take ourselves too seriously along the way."
  }
];
</script>

<SecondaryHero
	title="Rethinking how talent meets opportunity"
	subtitle="Real conversations. Exclusive roles. Human-AI hiring that actually works."
	imageSrc="/mockups/airport-screen-1748450787748.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Dex started with a question: why is hiring so hard—on both sides? As talent leaders and engineers, we saw firsthand how candidates get stuck in blackhole applications and how companies waste time sifting through endless CVs. It felt impersonal, inefficient, and broken. Finding the right job—or the right person—shouldn’t feel like a gamble.",
		"We built Dex to bring clarity and connection back into the process. Instead of forms and filters, you speak with an AI voice agent trained to understand real people—your goals, values, and experience. Those insights power a matchmaking engine that reaches beyond job titles and keywords. Whether you're hiring or looking, Dex helps surface fit that goes deeper than a resume.",
		"We're on a mission to make hiring more human—and more rewarding. For candidates, that means getting seen for who you actually are. For companies, it's knowing the people you meet genuinely belong. Because great work begins with the right connection."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Our team."
  subtitle="Meet the people behind Dex."
  stakeholders={[
    {
      name: "Paddy Lambros",
      position: "Co-founder & CEO",
      bio: "Spent a decade interviewing 10,000+ candidates at Atomico and Improbable.",
      image: "/generated/image-a-professional-headshot-of-a-male-tech-f.webp"
    },
    {
      name: "Harry Uglow",
      position: "Co-founder & CTO",
      bio: "Built LLM infrastructure and GenAI tools while leading engineering at Atomico.",
      image: "/generated/image-a-professional-headshot-of-a-male-cto-ex.webp"
    },
    {
      name: "Andrea Domenichini",
      position: "Growth Manager",
      bio: "15 years helping startups scale through brand, content, and storytelling.",
      image: "/generated/image-a-professional-headshot-of-a-male-growth.webp"
    },
    {
      name: "Mark Nevill",
      position: "Senior Software Engineer",
      bio: "Built AI infrastructure at Google and startups—making machine learning work in production.",
      image: "/generated/image-a-professional-headshot-of-a-male-softwa.webp"
    }
  ]}
/>

<StakeholderGrid
  stakeholderType="investor"
  title="Backed by great investors."
  subtitle="Supported by leading VCs and angel investors."
  stakeholders={[
    {
      name: "a16z speedrun",
      image: "https://cdn.brandfetch.io/a16z.com/w/400/h/400/logo"
    },
    {
      name: "Concept Ventures",
      image: "https://cdn.brandfetch.io/concept.vc/w/400/h/400/logo"
    },
    {
      name: "Charlie Songhurst (Meta)",
      image: "https://cdn.brandfetch.io/meta.com/w/400/h/400/logo"
    },
    {
      name: "Eric French (COO, Deliveroo)",
      image: "https://cdn.brandfetch.io/deliveroo.co.uk/w/400/h/400/logo"
    },
    {
      name: "Nilan Peiris (CPO, Wise)",
      image: "https://cdn.brandfetch.io/wise.com/w/400/h/400/logo"
    },
    {
      name: "Stephen Whitworth (CEO, Incident.io)",
      image: "https://cdn.brandfetch.io/incident.io/w/400/h/400/logo"
    }
  ]}
/>

<!-- CTA Section -->
<CallToAction
  title="Ready to rethink hiring?"
  subtitle="Work with Dex or get matched with roles built for you"
  description="If you're an ambitious founder, leader, or candidate tired of how hiring usually works, let's chat. Dex combines AI, data, and real human smarts to make hiring about people a0— not paperwork. Join our invite-only group and see how different work can feel."
  callsToAction={[
    { href: "/contact", label: "Talk to Dex", variant: "primary" },
    { href: "/refer", label: "Refer & earn £1,000", variant: "secondary" }
  ]}
  imageSrc="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
/>
