export interface OverviewFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface DetailedFeature {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string[];
  capabilities: string[];
  mockupType: 'media' | 'content' | 'captions' | 'accounts' | 'workflows' | 'history' | 'automation';
}

export const overviewFeatures: OverviewFeature[] = [
  {
    id: "property-content",
    title: "Property Content Management",
    description: "Organize property photos, descriptions, and publishing materials in high-resolution asset libraries.",
    iconName: "FiFolder",
  },
  {
    id: "social-publishing",
    title: "Social Media Publishing",
    description: "Prepare channel-specific posts and manage authorized publishing workflows across multiple networks.",
    iconName: "FiShare2",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Create repeatable steps for processing media, watermarking assets, and drafting standardized listing copy.",
    iconName: "FiCpu",
  },
  {
    id: "publishing-visibility",
    title: "Publishing Visibility",
    description: "Keep track of publishing tasks, dispatch statuses, error diagnostics, and historical posting logs.",
    iconName: "FiActivity",
  },
];

export const detailedFeatures: DetailedFeature[] = [
  {
    id: "media-management",
    number: "01",
    title: "Property Media Management",
    summary: "Centralized storage and asset sorting for real estate photography, walk-through videos, and floor plans.",
    description: [
      "Real estate marketing requires organizing hundreds of assets per listing: high-resolution interior photos, exterior aerials, short video clips, and architectural specs.",
      "Project_EA groups media files by listing reference, preserving raw file quality while automatically generating web-optimized previews and vertical video formats for social channels."
    ],
    capabilities: [
      "Listing-centric asset tagging & metadata preservation",
      "Automatic 9:16 vertical video & 1:1 square crop presets",
      "Bulk upload with duplicate detection and batch renaming",
      "Watermarking and agency branding overlays"
    ],
    mockupType: "media",
  },
  {
    id: "content-preparation",
    number: "02",
    title: "Content Preparation",
    summary: "Structure key listing details into reusable copy components tailored for social consumption.",
    description: [
      "Property listings contain structured parameters: bedroom counts, square meters, neighborhood highlights, and pricing terms. Turning this into engaging social posts is often tedious.",
      "The content preparation module automatically binds listing data fields to customizable post structures, generating clean, readable property specs ready for review."
    ],
    capabilities: [
      "Property data attribute mapping (price, location, dimensions)",
      "Multi-slide carousel sequencing with slide counters",
      "Template-driven post bodies with custom agency disclaimers",
      "Draft staging with visual preview mode"
    ],
    mockupType: "content",
  },
  {
    id: "channel-captions",
    number: "03",
    title: "Channel-Specific Captions",
    summary: "Optimize character counts, hashtags, and layout per social network specification.",
    description: [
      "Each social platform enforces distinct limits and stylistic standards. TikTok favors punchy captions and trending property discovery tags; Instagram supports structured micro-blogging; Facebook favors localized community details.",
      "Project_EA provides dedicated editing tabs per channel, allowing agents to fine-tune individual captions without duplicating effort."
    ],
    capabilities: [
      "Platform-specific character counters & truncation warnings",
      "Localized hashtag sets grouped by property district",
      "Auto-formatted call-to-actions (DM for private viewing, WhatsApp links)",
      "Emoji-free, professional luxury formatting standards"
    ],
    mockupType: "captions",
  },
  {
    id: "multi-account",
    number: "04",
    title: "Multi-Account Organization",
    summary: "Maintain distinct authorization scopes and brand identities across multiple agency branches.",
    description: [
      "Real estate agencies frequently manage multiple brand profiles, sub-teams, or regional branch accounts. Isolating credentials and permissions is paramount for security.",
      "Project_EA isolates social tokens per agency workspace, ensuring agents publish strictly to their assigned accounts with zero credential cross-contamination."
    ],
    capabilities: [
      "Isolated workspace credentials with strict role scoping",
      "Per-channel token health monitoring & renewal alerts",
      "Multi-brand routing (luxury division vs commercial arm)",
      "Secure OAuth token storage in hardened server vault"
    ],
    mockupType: "accounts",
  },
  {
    id: "publishing-workflows",
    number: "05",
    title: "Publishing Workflows",
    summary: "Orchestrate review, scheduling, and direct dispatch through verified platform APIs.",
    description: [
      "Avoid accidental premature postings with staged publishing pipelines. Drafts progress from initial content compilation to agent review, manager approval, and automated delivery.",
      "Publishing jobs are queued and executed against platform rate limits with automatic retry logic on network flakiness."
    ],
    capabilities: [
      "Sequential approval stages (Draft → In Review → Approved → Queued)",
      "Scheduled time slot dispatch with timezone awareness",
      "Instant push dispatch for urgent price corrections",
      "Immediate error reporting with actionable API response codes"
    ],
    mockupType: "workflows",
  },
  {
    id: "posting-history",
    number: "06",
    title: "Posting History & Audit Logs",
    summary: "Comprehensive record of published posts, timestamps, delivery receipts, and platform URLs.",
    description: [
      "Maintain a permanent audit trail of every post distributed across your agency's social properties. Quickly reference previous announcements, dates, and live post URLs.",
      "Detailed logs record the exact operator who approved the dispatch, the API response timestamp, and the permanent external post identifier."
    ],
    capabilities: [
      "Full chronological audit log of all publishing actions",
      "Direct links to published posts on connected platforms",
      "API payload snapshots for troubleshooting failed dispatches",
      "CSV/JSON audit export for compliance archiving"
    ],
    mockupType: "history",
  },
  {
    id: "workflow-automation",
    number: "07",
    title: "Workflow Automation",
    summary: "Eliminate repetitive tasks with automated listing-to-post generation rules.",
    description: [
      "When a new property listing enters your inventory, Project_EA can automatically trigger image asset cropping, assemble standard copy outlines, and place drafts into the review queue.",
      "Automations run reliably in the background, freeing property agents to focus on client relationships and viewings rather than repetitive copy-pasting."
    ],
    capabilities: [
      "Event-driven draft generation from listing data",
      "Automated image format conversion (HEIC/RAW to optimized JPEG/WebP)",
      "Status webhooks for agency CRM integration",
      "Custom trigger conditions based on property status or price changes"
    ],
    mockupType: "automation",
  },
];
