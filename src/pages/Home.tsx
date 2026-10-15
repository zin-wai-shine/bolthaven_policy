import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiFolder,
  FiShare2,
  FiCpu,
  FiActivity,
  FiShield,
  FiCheck,
} from 'react-icons/fi';
import { FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { MetaTags } from '../components/common/MetaTags';
import { HeroPreview } from '../components/previews/HeroPreview';
import { DashboardPreview } from '../components/previews/DashboardPreview';
import { WorkflowPreview } from '../components/previews/WorkflowPreview';

export const Home: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Social Media Publishing & Workflow Platform for Real Estate"
        description="Project_EA brings property media, content preparation, social publishing, and workflow management together in a streamlined workspace."
      />

      {/* Section 1 — Hero */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 border-b border-borderSubtle bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline and Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block text-[11px] font-semibold uppercase tracking-widest text-accent bg-accent-subtle px-2.5 py-1 rounded">
                SOCIAL PUBLISHING PLATFORM
              </div>

              <h1 className="text-hero font-bold tracking-tight text-textPrimary text-balance">
                One place to manage your property content.
              </h1>

              <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
                Project_EA brings property media, content preparation, social publishing, and
                workflow management together in a streamlined workspace.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  to="/features"
                  variant="primary"
                  size="lg"
                  icon={<FiArrowRight className="w-4 h-4" />}
                >
                  Explore Features
                </Button>
                <Button to="/how-it-works" variant="secondary" size="lg">
                  How It Works
                </Button>
              </div>

              {/* Functional trust notes */}
              <div className="pt-4 border-t border-borderSubtle flex flex-wrap items-center gap-4 text-xs text-textSecondary">
                <span className="flex items-center gap-1.5">
                  <FiShield className="w-3.5 h-3.5 text-accent" />
                  Role-Scoped Credentials
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Direct Content Posting API Staging
                </span>
              </div>
            </div>

            {/* Right Column: Realistic Interface Mockup */}
            <div className="lg:col-span-7">
              <HeroPreview />
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2 — Platform Overview */}
      <section className="py-16 sm:py-24 bg-bgSecondary border-b border-borderSubtle">
        <Container>
          <SectionHeading
            eyebrow="Platform Overview"
            title="Built for a more organized publishing workflow."
            description="Prepare property media, manage content, and coordinate publishing tasks without switching between disconnected tools."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white border border-borderSubtle p-6 rounded-lg space-y-3 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 rounded-md bg-bgSecondary border border-borderSubtle flex items-center justify-center text-textPrimary">
                <FiFolder className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-textPrimary">
                Property Content Management
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Organize property photos, descriptions, and publishing materials in clean listing folders.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-borderSubtle p-6 rounded-lg space-y-3 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 rounded-md bg-bgSecondary border border-borderSubtle flex items-center justify-center text-textPrimary">
                <FiShare2 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-textPrimary">
                Social Media Publishing
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Prepare channel-specific posts and manage authorized publishing workflows across networks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-borderSubtle p-6 rounded-lg space-y-3 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 rounded-md bg-bgSecondary border border-borderSubtle flex items-center justify-center text-textPrimary">
                <FiCpu className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-textPrimary">
                Workflow Automation
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Create repeatable steps for processing media, watermarking, and drafting standardized listing copy.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-borderSubtle p-6 rounded-lg space-y-3 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 rounded-md bg-bgSecondary border border-borderSubtle flex items-center justify-center text-textPrimary">
                <FiActivity className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-textPrimary">
                Publishing Visibility
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Keep track of publishing tasks, scheduled dispatches, status codes, and verified posting logs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3 — How It Works */}
      <section className="py-16 sm:py-24 bg-white border-b border-borderSubtle">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-block text-[11px] font-semibold uppercase tracking-wider text-accent mb-2">
                Structured Operations
              </div>
              <h2 className="text-section-title font-semibold text-textPrimary">
                From property content to publishing.
              </h2>
            </div>
            <Link
              to="/how-it-works"
              className="text-xs sm:text-sm font-medium text-accent hover:text-accent-hover inline-flex items-center gap-1 group"
            >
              <span>Explore full operational guide</span>
              <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <WorkflowPreview />
        </Container>
      </section>

      {/* Section 4 — Product Interface */}
      <section className="py-16 sm:py-24 bg-bgSecondary border-b border-borderSubtle">
        <Container>
          <SectionHeading
            eyebrow="Product Interface"
            title="A workspace designed around your workflow."
            description="Preview the real estate content studio where listings are formatted, reviewed across social channel specifications, and queued for publication."
            align="center"
          />

          <DashboardPreview />
        </Container>
      </section>

      {/* Section 5 — Supported Channels */}
      <section className="py-16 sm:py-24 bg-white border-b border-borderSubtle">
        <Container>
          <SectionHeading
            eyebrow="Channel Integrations"
            title="Prepare content for the channels you use."
            description="Project_EA connects to official platform developer APIs. Channels are staged to adhere strictly to third-party authorization and content policy standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TikTok Channel Card */}
            <div className="border border-borderSubtle rounded-lg p-6 bg-white space-y-4 hover:border-gray-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-[#111318] text-white flex items-center justify-center">
                  <FaTiktok className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Developer Review Mode
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-base text-textPrimary">TikTok</h3>
                <p className="text-xs sm:text-sm text-textSecondary mt-2 leading-relaxed">
                  Direct short-form video publishing via official TikTok Content Posting API. Supports 9:16 vertical walk-throughs, custom hashtags, and scheduling.
                </p>
              </div>
              <div className="pt-3 border-t border-borderSubtle text-xs text-textSecondary space-y-1">
                <div>&bull; Scope: Video Upload & Creator Info</div>
                <div>&bull; Status: In API Developer Review</div>
              </div>
            </div>

            {/* Instagram Channel Card */}
            <div className="border border-borderSubtle rounded-lg p-6 bg-white space-y-4 hover:border-gray-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-pink-50 border border-pink-100 text-[#E1306C] flex items-center justify-center">
                  <FaInstagram className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                  Planned Staging
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-base text-textPrimary">Instagram</h3>
                <p className="text-xs sm:text-sm text-textSecondary mt-2 leading-relaxed">
                  Prepare square and 4:5 property carousels, photo galleries, and Reels with custom property parameter bindings and agency watermarks.
                </p>
              </div>
              <div className="pt-3 border-t border-borderSubtle text-xs text-textSecondary space-y-1">
                <div>&bull; Scope: Graph API Instagram Publishing</div>
                <div>&bull; Status: Integration Roadmap</div>
              </div>
            </div>

            {/* Facebook Pages Channel Card */}
            <div className="border border-borderSubtle rounded-lg p-6 bg-white space-y-4 hover:border-gray-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-md bg-blue-50 border border-blue-100 text-[#1877F2] flex items-center justify-center">
                  <FaFacebook className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                  Planned Staging
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-base text-textPrimary">Facebook Pages</h3>
                <p className="text-xs sm:text-sm text-textSecondary mt-2 leading-relaxed">
                  Broadcast new agency listings, open house dates, and price reductions directly to verified agency business pages and team profiles.
                </p>
              </div>
              <div className="pt-3 border-t border-borderSubtle text-xs text-textSecondary space-y-1">
                <div>&bull; Scope: Facebook Pages API</div>
                <div>&bull; Status: Integration Roadmap</div>
              </div>
            </div>
          </div>

          {/* Third-party API Disclaimer */}
          <div className="mt-8 p-4 rounded-lg bg-bgSecondary border border-borderSubtle text-xs text-textSecondary leading-relaxed">
            <span className="font-semibold text-textPrimary">Integration Notice: </span>
            Supported publishing capabilities depend on official platform developer approval and API access levels. Platform names and logos are trademarks of their respective owners and used solely to identify platform compatibility. Project_EA does not claim official endorsement or partnership with TikTok, Meta, or any third party.
          </div>
        </Container>
      </section>

      {/* Section 6 — Closing CTA */}
      <section className="py-16 sm:py-24 bg-bgSecondary">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <h2 className="text-section-title font-semibold text-textPrimary">
              A simpler way to manage property publishing.
            </h2>
            <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
              Discover how Project_EA organizes media, content, and publishing workflows into one structured experience.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Button
                to="/features"
                variant="primary"
                size="lg"
                icon={<FiArrowRight className="w-4 h-4" />}
              >
                Explore Features
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
