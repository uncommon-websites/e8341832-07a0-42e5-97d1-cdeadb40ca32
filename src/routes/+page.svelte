<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
</script>

<Hero
  centered={false}
  withSymbols={false}
  imageSrc="/generated/image-a-modern-office-setting-with-diverse-pro.webp"
  title="Where talent meets opportunity, perfectly"
  subtitle="Trusted by UK teams and talent for genuine, high-quality connections"
  callsToAction={[
    {
      href: "/for-candidates",
      label: "Talk to Dex"
    },
    {
      href: "/for-companies", 
      label: "Hire with Dex"
    }
  ]}
/>
<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		'https://logo.clearbit.com/revolut.com',
		'https://logo.clearbit.com/octopusventures.com',
		'https://logo.clearbit.com/monzo.com',
		'https://logo.clearbit.com/wise.com'
	]}
/>

<Summary
	title="What we do"
	text="Dex is an AI talent agent connecting candidates and companies through intelligent voice, chat, and advanced data analysis. We match people to opportunities that truly fit, and help teams hire with confidence—faster and smarter."
/>

<Testimonials
	testimonials={[
		{
			name: "Elena Kovács",
			position: "Engineering Manager",
			company: "Brightseed Tech",
			quote:
				"Dex saved my team months of hiring time. We stopped wading through endless CVs and only met people ready to make real impact from day one.",
			image: "/generated/image-a-confident-woman-smiling-in-a-modern-wo.webp"
		},
		{
			name: "Rio Davenport",
			position: "Head of People",
			company: "DriftSync",
			quote:
				"I used to worry about bad hiring decisions. With Dex’s AI agent, we had data-backed confidence in every intro and dramatically reduced employee turnover.",
			image: "/generated/image-a-nonbinary-person-working-in-a-stylish-.webp"
		},
		{
			name: "Mateo Girard",
			position: "Co-founder",
			company: "Nimbus Solutions",
			quote:
				"We hired smarter and cut recruiting fees by 50% in one quarter. Dex found us top fit talent—no wasted spend on the wrong matches.",
			image: "/generated/image-a-man-in-a-meeting-room-of-a-startup-loo.webp"
		}
	]}
/>

<Features
  title="What makes Dex different"
  subtitle="A smarter way to connect talent and opportunity"
  features={[
    {
      title: "Deeper candidate profiles in minutes",
      description:
        "AI voice and live chat build a rich, human-first profile in one conversation—not endless forms."
    },
    {
      title: "Smarter matches you won't find elsewhere",
      description:
        "Our AI searches exclusive roles and hidden talent pools using real goals, not just job titles."
    },
    {
      title: "Precision shortlists, not bulk resumes",
      description:
        "We handpick aligned candidates for each role—so you can hire with clarity and confidence."
    }
  ]}
/>

<UseCases
	title="Use cases"
	subtitle="How Dex changes hiring — for people and teams"
	useCases={[
		{
			title: "Conversations that reveal true fit",
			description: "Dex uses AI-powered voice and chat to get to the heart of what candidates want and what companies need — surfacing motivations, work style, and strengths that go far beyond the CV."
			,image: "/generated/image-a-professional-recruiter-having-a-conver.webp",
			link: {
				href: "/use-cases/conversation-matching",
				label: "Learn more"
			}
		},
		{
			title: "More than keywords: better matches, faster",
			description: "No more endless applications or noisy job boards. Dex matches candidates to hard-to-find roles — including exclusive and unadvertised opportunities — and makes it simple for companies to hire with clarity.",
			image: "/generated/image-a-group-of-diverse-candidates-gathered-a.webp",
			link: {
				href: "/use-cases/smart-matching",
				label: "Learn more"
			}
		},
		{
			title: "Hiring decisions you can trust",
			description: "Dex's machine learning and large-scale data analysis uncover what drives success in every role. Hiring teams get context-rich insights that reduce churn, increase retention, and make every intro count.",
			image: "/generated/image-a-business-hiring-team-in-a-meeting-room.webp",
			link: {
				href: "/use-cases/contextual-hiring-insights",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
  title="Your future team is waiting"
  subtitle="Find work worth doing. Hire people worth keeping."
  description="Ready to meet your match? Whether you're searching for the next big opportunity or looking for people who fit your team, Dex delivers the right connections—faster, smarter, and with a personal touch. Join the AI talent agent rethinking what hiring can be."
  imageSrc="/generated/image-a-cheerful-young-professional-in-a-moder.webp"
  callsToAction={[
    {
      href: "/for-candidates",
      label: "Talk to Dex",
      variant: "primary"
    },
    {
      href: "/for-companies",
      label: "Hire with Dex",
      variant: "secondary"
    }
  ]}
/>
