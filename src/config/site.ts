export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contactEmail: string;
  supportEmail: string;
  privacyEmail: string;
  jurisdiction: string;
  companyName: string;
  lastUpdatedTerms: string;
  lastUpdatedPrivacy: string;
  navLinks: Array<{ label: string; href: string }>;
  channels: Array<{
    id: string;
    name: string;
    status: 'Planned' | 'In Integration' | 'Development Preview';
    description: string;
    badge: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "BoltHavenProperties",
  tagline: "Social Media Publishing & Workflow Platform for Real Estate",
  description:
    "BoltHaven Properties brings property media, content preparation, social publishing, and workflow management together in a streamlined workspace for real estate professionals.",
  url: "https://bolthavenproperties.com",
  contactEmail: "inquiries@bolthavenproperties.com",
  supportEmail: "support@bolthavenproperties.com",
  privacyEmail: "privacy@bolthavenproperties.com",
  jurisdiction: "Thailand",
  companyName: "BoltHaven Properties Co., Ltd.",
  lastUpdatedTerms: "October 15, 2026",
  lastUpdatedPrivacy: "October 15, 2026",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
  ],
  channels: [
    {
      id: "tiktok",
      name: "TikTok",
      status: "In Integration",
      description:
        "Prepare short-form video property tours, captions, and schedule publishing via TikTok's official Content Posting API.",
      badge: "Developer Review Preparation",
    },
    {
      id: "instagram",
      name: "Instagram",
      status: "Planned",
      description:
        "Format real-estate photo carousels, reels, and stories for property listings with automated hashtag sets.",
      badge: "API Staging",
    },
    {
      id: "facebook",
      name: "Facebook Pages",
      status: "Planned",
      description:
        "Publish new listing announcements, open-house schedules, and price updates directly to agency Facebook Pages.",
      badge: "API Staging",
    },
  ],
};
