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
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-20 sm:pb-28 border-b border-borderSubtle bg-gradient-to-b from-white via-[#FAFBFD] to-white">
        {/* Subtle background ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-r from-primary/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline and Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-borderSubtle text-textPrimary text-xs font-medium shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Next-gen real estate social publishing</span>
              </div>

              <h1 className="text-hero font-extrabold tracking-tight text-textPrimary text-balance leading-[1.08]">
                One unified studio to scale property content.
              </h1>

              <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
                <span className="font-semibold text-textPrimary">BoltHaven</span> automates multi-channel short-form tours, high-resolution media preparation, and authorized social publishing directly from your property portfolio.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button
                  to="/features"
                  variant="primary"
                  size="lg"
                  className="shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 transition-all"
                  icon={<FiArrowRight className="w-4 h-4" />}
                >
                  Explore All Features
                </Button>
                <Button to="/how-it-works" variant="secondary" size="lg" className="shadow-2xs">
                  How It Works
                </Button>
              </div>

              {/* Functional trust notes */}
              <div className="pt-5 border-t border-borderSubtle flex flex-wrap items-center gap-5 text-xs text-textSecondary">
                <span className="flex items-center gap-1.5 font-medium">
                  <FiShield className="w-4 h-4 text-primary" />
                  Role-Scoped Credentials
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <FiCheck className="w-4 h-4 text-emerald-600" />
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
            <div className="group bg-white border border-borderSubtle p-6 rounded-xl space-y-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                <FiFolder className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-textPrimary">
                Property Media Vault
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Centralize floorplans, 4K video walk-throughs, and staging photos tagged by property ID and MLS parameters.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white border border-borderSubtle p-6 rounded-xl space-y-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                <FiShare2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-textPrimary">
                Direct Social Publishing
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Dispatch verified short-form reels and posts directly to TikTok, Instagram, and Facebook using authorized APIs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white border border-borderSubtle p-6 rounded-xl space-y-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                <FiCpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-textPrimary">
                Automated Transcoding
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Automatically crop to 9:16 vertical, burn agency branding, and enforce channel bitrate specifications seamlessly.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white border border-borderSubtle p-6 rounded-xl space-y-4 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                <FiActivity className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-textPrimary">
                Compliance &amp; Audit Logs
              </h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Real-time dispatch confirmations, token lifecycle monitoring, and verified immutable posting records.
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
              <div className="mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/60 border border-primary/20 text-primary text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Structured operations
                </span>
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
            <div className="border border-borderSubtle rounded-2xl p-6 sm:p-7 bg-white space-y-5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#111318] text-white flex items-center justify-center shadow-sm">
                  <FaTiktok className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20">
                  Developer Review Mode
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-textPrimary">TikTok Content Posting API</h3>
                <p className="text-xs sm:text-sm text-textSecondary mt-2 leading-relaxed">
                  Direct short-form video publishing. Automate 9:16 vertical walk-throughs, scheduled uploads, and agency hashtag distributions with OAuth 2.0 creator authorization.
                </p>
              </div>
              <div className="pt-4 border-t border-borderSubtle text-xs text-textSecondary space-y-1.5 font-mono">
                <div className="flex items-center gap-1.5 text-textPrimary">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Scope: video.upload, user.info.basic
                </div>
                <div className="text-textSecondary">&bull; In API Developer Review &amp; Staging</div>
              </div>
            </div>

            {/* Instagram Channel Card */}
            <div className="border border-borderSubtle rounded-2xl p-6 sm:p-7 bg-white space-y-5 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center shadow-sm">
                  <FaInstagram className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                  Planned Staging
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-textPrimary">Instagram Graph API</h3>
                <p className="text-xs sm:text-sm text-textSecondary mt-2 leading-relaxed">
                  Format square and 4:5 property carousels, photo galleries, and Reels with custom property parameter overlays and agency watermarks.
                </p>
              </div>
              <div className="pt-4 border-t border-borderSubtle text-xs text-textSecondary space-y-1.5 font-mono">
                <div className="flex items-center gap-1.5 text-textPrimary">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Scope: instagram_content_publish
                </div>
                <div className="text-textSecondary">&bull; Integration Roadmap Milestone</div>
              </div>
            </div>

            {/* Facebook Pages Channel Card */}
            <div className="border border-borderSubtle rounded-2xl p-6 sm:p-7 bg-white space-y-5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shadow-sm">
                  <FaFacebook className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                  Planned Staging
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-textPrimary">Facebook Pages API</h3>
                <p className="text-xs sm:text-sm text-textSecondary mt-2 leading-relaxed">
                  Broadcast new agency listings, open house schedules, and price updates directly to verified agency business pages and team profiles.
                </p>
              </div>
              <div className="pt-4 border-t border-borderSubtle text-xs text-textSecondary space-y-1.5 font-mono">
                <div className="flex items-center gap-1.5 text-textPrimary">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Scope: pages_manage_posts
                </div>
                <div className="text-textSecondary">&bull; Integration Roadmap Milestone</div>
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
      <section className="py-20 sm:py-28 bg-[#0D0F14] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/20 blur-[120px] pointer-events-none rounded-full" />
        <Container size="narrow">
          <div className="text-center space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-primary border border-primary/30 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Production-ready real estate publishing
            </span>
            <h2 className="text-section-title font-extrabold text-white tracking-tight text-balance">
              Streamline your real estate publishing operations today.
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Experience the end-to-end publishing workflow engineered specifically for real estate developers, agencies, and asset managers.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button
                to="/features"
                variant="primary"
                size="lg"
                className="shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 font-semibold"
                icon={<FiArrowRight className="w-4 h-4" />}
              >
                Explore Platform Features
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold backdrop-blur-sm"
              >
                Schedule Team Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
