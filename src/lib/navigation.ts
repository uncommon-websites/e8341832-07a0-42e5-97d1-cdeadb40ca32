/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "Conversations that reveal true fit",
				href: "/use-cases/conversation-matching",
				image: "/generated/image-a-professional-recruiter-having-a-conver.webp",
				description: "Dex uses AI-powered voice and chat to get to the heart of what candidates want and what companies need — surfacing motivations, work style, and strengths that go far beyond the CV.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "More than keywords: better matches, faster",
				href: "/use-cases/smart-matching",
				image: "/generated/image-a-group-of-diverse-candidates-gathered-a.webp",
				description: "No more endless applications or noisy job boards. Dex matches candidates to hard-to-find roles — including exclusive and unadvertised opportunities — and makes it simple for companies to hire with clarity.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Hiring decisions you can trust",
				href: "/use-cases/contextual-hiring-insights",
				image: "/generated/image-a-business-hiring-team-in-a-meeting-room.webp",
				description: "Dex's machine learning and large-scale data analysis uncover what drives success in every role. Hiring teams get context-rich insights that reduce churn, increase retention, and make every intro count.",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
