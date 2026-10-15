import React from 'react';
import {
  FiCheck,
  FiInfo,
  FiArrowRight,
} from 'react-icons/fi';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { MetaTags } from '../components/common/MetaTags';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Add property media',
      description:
        'Upload property photo sets, aerial imagery, and short walk-through videos directly into the listing library. Project_EA organizes files by listing reference, preserves original resolutions, and prepares 9:16 vertical video and 1:1 square crop formats ready for social feeds.',
      details: [
        'Batch upload with automatic listing reference grouping',
        'Automatic 9:16 vertical video scaling and bitrate checks',
        'Agency watermark and logo overlays applied systematically',
      ],
      uiPreview: (
        <div className="bg-white border border-borderSubtle rounded-lg p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
            <span className="font-semibold text-textPrimary">Asset Ingestion</span>
            <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
              Ready (4 Files)
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-bgSecondary border border-borderSubtle">
              <div className="font-mono text-[10px] text-accent">9:16 Video</div>
              <div className="font-medium text-textPrimary truncate">walkthrough_clip.mp4</div>
              <div className="text-[10px] text-textSecondary">1080 &times; 1920 &bull; 24MB</div>
            </div>
            <div className="p-2 rounded bg-bgSecondary border border-borderSubtle">
              <div className="font-mono text-[10px] text-blue-600">1:1 Photo</div>
              <div className="font-medium text-textPrimary truncate">living_room_hero.jpg</div>
              <div className="text-[10px] text-textSecondary">1440 &times; 1440 &bull; 2.1MB</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      title: 'Prepare descriptions, captions, and hashtags',
      description:
        'Structure key property specifications—including bedroom counts, floor area in square meters, location districts, and pricing—into reusable post bodies. Use platform-specific character counters and localized hashtag packages tailored for property discovery.',
      details: [
        'Parameter substitution tags: {bedrooms}, {sqm}, {price}, {district}',
        'Platform character limit counters (e.g. 2,200 for TikTok and Instagram)',
        'Pre-configured Bangkok luxury real estate hashtag bundles',
      ],
      uiPreview: (
        <div className="bg-white border border-borderSubtle rounded-lg p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
            <span className="font-semibold text-textPrimary">Caption Composer</span>
            <span className="font-mono text-textSecondary text-[10px]">195 / 2,200 chars</span>
          </div>
          <div className="p-2.5 rounded bg-bgSecondary border border-borderSubtle text-[11px] leading-relaxed">
            "Rare 3-bedroom corner duplex in Watthana. 185 sqm with double-height ceiling and skyline views. Listed at ฿28.9M. DM for private inspections. #BangkokProperty #LuxuryLiving"
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'Select your publishing channels and connected accounts',
      description:
        'Choose which social channels and connected agency profiles should receive the listing announcement. Verify that OAuth authorization tokens are active and role permissions permit content dispatch.',
      details: [
        'Multi-account routing across agency brands and branches',
        'OAuth 2.0 token status verification before staging',
        'Direct connection to official TikTok Content Posting API',
      ],
      uiPreview: (
        <div className="bg-white border border-borderSubtle rounded-lg p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
            <span className="font-semibold text-textPrimary">Target Channel Authorization</span>
            <span className="text-emerald-700 font-mono text-[10px]">Token Active</span>
          </div>
          <div className="space-y-1.5">
            <div className="p-2 rounded border border-borderSubtle flex items-center justify-between">
              <span className="flex items-center gap-2 font-medium">
                <FaTiktok className="w-3.5 h-3.5" /> @bangkok_prime_agency
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono">
                Verified
              </span>
            </div>
            <div className="p-2 rounded border border-borderSubtle flex items-center justify-between opacity-75">
              <span className="flex items-center gap-2 font-medium">
                <FaInstagram className="w-3.5 h-3.5 text-[#E1306C]" /> @bangkokprime.estates
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-mono">
                Staged
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '04',
      title: 'Review content and publishing settings',
      description:
        'Examine full visual renders before anything is sent. Verify aspect ratios, check video playback smoothness, confirm audio sync settings, and select whether to publish immediately or schedule for optimal audience viewing hours.',
      details: [
        'Feed preview simulator showing realistic post layout',
        'Audio track assignment and commercial usage disclosures',
        'Timezone-aware scheduling engine (UTC+7 Bangkok default)',
      ],
      uiPreview: (
        <div className="bg-white border border-borderSubtle rounded-lg p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
            <span className="font-semibold text-textPrimary">Pre-Flight Review</span>
            <span className="text-accent font-mono text-[10px]">All Checks Passed</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-bgSecondary">
              <span className="text-textSecondary block text-[10px]">Schedule:</span>
              <span className="font-medium text-textPrimary">Today, 17:30 ICT</span>
            </div>
            <div className="p-2 rounded bg-bgSecondary">
              <span className="text-textSecondary block text-[10px]">Commercial Disclosure:</span>
              <span className="font-medium text-emerald-700">Declared (Real Estate)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '05',
      title: 'Publish through authorized integrations',
      description:
        'When the scheduled time arrives or the agent triggers instant push, Project_EA securely uploads media chunks and metadata to the destination platform API, adhering to platform rate limits and video encoding constraints.',
      details: [
        'Secure token exchange with server-side authorization headers',
        'Chunked media upload handling for large 4K / 1080p property videos',
        'Automatic retry strategy on temporary network connectivity issues',
      ],
      uiPreview: (
        <div className="bg-white border border-borderSubtle rounded-lg p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
            <span className="font-semibold text-textPrimary">API Dispatch Execution</span>
            <span className="font-mono text-emerald-700 text-[10px]">HTTP 200 Created</span>
          </div>
          <div className="p-2 rounded bg-bgSecondary font-mono text-[10px] space-y-1 text-textPrimary">
            <div>&gt; POST /v2/post/publish/video/init/</div>
            <div>&gt; Uploading chunks [100% complete]</div>
            <div>&gt; Video processed: publish_id #tk_9048120</div>
          </div>
        </div>
      ),
    },
    {
      number: '06',
      title: 'Review status and publishing history',
      description:
        'Track live post performance and historical publication logs. Maintain a permanent agency audit trail showing timestamps, operating agent details, destination post URLs, and delivery receipts.',
      details: [
        'Comprehensive chronological audit trail of all dispatch actions',
        'Direct external link generation to published social content',
        'Exportable history logs for agency management review',
      ],
      uiPreview: (
        <div className="bg-white border border-borderSubtle rounded-lg p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
            <span className="font-semibold text-textPrimary">Audit Trail Entry #4928</span>
            <span className="text-textSecondary font-mono text-[10px]">17:30:02 ICT</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-textSecondary">Target Channel:</span>
              <span className="font-medium text-textPrimary">TikTok (@bangkok_prime_agency)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textSecondary">Approved By:</span>
              <span className="font-medium text-textPrimary">Lead Operator (P. Somsak)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-textSecondary">Receipt:</span>
              <span className="text-emerald-700 font-mono text-[10px]">Verified Live</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <MetaTags
        title="How It Works — Step-by-Step Publishing Workflow"
        description="Learn how real estate media moves through Project_EA: from media ingestion and caption structuring to authorized API dispatch and audit logging."
      />

      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-12 bg-bgSecondary border-b border-borderSubtle">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/60 border border-primary/20 text-primary text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Operational workflow
              </span>
            </div>
            <h1 className="text-section-title font-bold text-textPrimary tracking-tight">
              A clear process from start to finish.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-textSecondary leading-relaxed">
              Understand each stage of the publishing cycle, from organizing raw property photography to verified distribution through authorized social media developer APIs.
            </p>
          </div>
        </Container>
      </section>

      {/* Step by Step Breakdown */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-xl border border-borderSubtle bg-white hover:border-gray-300 transition-colors"
              >
                {/* Left: Step Information */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-accent bg-accent-subtle px-3 py-1 rounded">
                      Step {step.number}
                    </span>
                    <span className="text-xs uppercase font-medium text-textSecondary tracking-wider">
                      Workflow Stage
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-semibold text-textPrimary">
                    {step.title}
                  </h2>

                  <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-textPrimary">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: UI Representation */}
                <div className="lg:col-span-5 bg-bgSecondary p-4 sm:p-5 rounded-lg border border-borderSubtle">
                  {step.uiPreview}
                </div>
              </div>
            ))}
          </div>

          {/* Important Authorization Notice */}
          <div className="mt-12 p-6 rounded-lg bg-bgSecondary border border-borderSubtle space-y-2">
            <div className="flex items-center gap-2 text-textPrimary font-semibold text-sm">
              <FiInfo className="w-4 h-4 text-accent" />
              <span>Platform Authorization & Developer Review Disclaimer</span>
            </div>
            <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
              Direct social publishing capabilities depend strictly on active platform authorization, correct user OAuth consent, and platform API approval status. Certain third-party developer integrations (including TikTok Content Posting API) undergo scheduled developer verification and staging reviews. Project_EA operates within authorized third-party developer guidelines.
            </p>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-bgSecondary border-t border-borderSubtle">
        <Container size="narrow">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary">
              Ready to explore our features?
            </h2>
            <p className="text-textSecondary text-sm sm:text-base">
              Explore the detailed technical capabilities built into every module of Project_EA.
            </p>
            <div className="pt-2">
              <Button to="/features" variant="primary" size="lg" icon={<FiArrowRight className="w-4 h-4" />}>
                Explore All Features
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
