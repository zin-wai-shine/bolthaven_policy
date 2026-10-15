import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { MetaTags } from '../components/common/MetaTags';
import { FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export const Features: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Features & Operations"
        description="Comprehensive breakdown of Project_EA tools: property media management, channel-specific captions, publishing workflows, and automation."
      />

      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-12 bg-bgSecondary border-b border-borderSubtle">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/60 border border-primary/20 text-primary text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Platform capabilities
              </span>
            </div>
            <h1 className="text-section-title font-bold text-textPrimary tracking-tight">
              Tools for organized content operations.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-textSecondary leading-relaxed">
              Explore the dedicated modules built to manage property media, coordinate social posts across channels, and automate repetitive listing publication steps.
            </p>
          </div>
        </Container>
      </section>

      {/* Feature Deep Dives (7 Features with alternating layouts) */}
      <section className="py-16 sm:py-20 divide-y divide-borderSubtle bg-white">
        {/* Feature 01: Property Media Management */}
        <div id="media-management" className="py-16 first:pt-0">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded">
                  Feature 01
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary">
                  Property Media Management
                </h2>
                <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                  Real estate marketing requires organizing hundreds of assets per listing: high-resolution interior photos, exterior aerials, short video clips, and architectural specs.
                </p>
                <p className="text-textSecondary text-sm leading-relaxed">
                  Project_EA groups media files by listing reference, preserving raw file quality while automatically generating web-optimized previews and vertical video formats for social channels.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-textPrimary">
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Listing-centric asset tagging & metadata preservation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Automatic 9:16 vertical video & 1:1 square crop presets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Bulk upload with duplicate detection and batch renaming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Watermarking and agency branding overlays</span>
                  </li>
                </ul>
              </div>

              {/* Visual Mockup 01 */}
              <div className="lg:col-span-6 bg-bgSecondary p-4 sm:p-6 rounded-lg border border-borderSubtle">
                <div className="bg-white rounded-md border border-borderSubtle p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-borderSubtle">
                    <span className="font-semibold text-textPrimary">Listing #EA-8920 Media Vault</span>
                    <span className="font-mono text-textSecondary text-[11px]">8 Assets &bull; 142 MB</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="border border-borderSubtle rounded p-2.5 bg-bgSecondary/40 space-y-2">
                      <div className="aspect-[9/12] bg-[#111318] text-white rounded flex flex-col justify-between p-2">
                        <span className="text-[10px] font-mono text-red-400">9:16 Vertical</span>
                        <div className="text-center font-mono text-[10px] text-gray-400">
                          Video Walkthrough
                          <br />
                          1080 &times; 1920
                        </div>
                        <span className="text-[10px] text-gray-300">00:30 &bull; H.264</span>
                      </div>
                      <div className="text-[11px] font-medium text-textPrimary truncate">living_room_tour.mp4</div>
                    </div>

                    <div className="border border-borderSubtle rounded p-2.5 bg-bgSecondary/40 space-y-2">
                      <div className="aspect-[9/12] bg-white border border-borderSubtle rounded flex flex-col justify-between p-2">
                        <span className="text-[10px] font-mono text-blue-600">1:1 Square</span>
                        <div className="text-center font-mono text-[10px] text-textSecondary">
                          Master Balcony View
                          <br />
                          1440 &times; 1440
                        </div>
                        <span className="text-[10px] text-textSecondary">JPEG &bull; 2.4 MB</span>
                      </div>
                      <div className="text-[11px] font-medium text-textPrimary truncate">balcony_sunset.jpg</div>
                    </div>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-[11px] text-textSecondary border-t border-borderSubtle">
                    <span>Branding Preset: Watermark Bottom-Right</span>
                    <span className="text-emerald-700 font-medium">Applied</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Feature 02: Content Preparation */}
        <div id="content-preparation" className="py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Visual Mockup 02 (Left) */}
              <div className="lg:col-span-6 order-2 lg:order-1 bg-bgSecondary p-4 sm:p-6 rounded-lg border border-borderSubtle">
                <div className="bg-white rounded-md border border-borderSubtle p-4 space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
                    <span className="font-semibold text-textPrimary">Structured Parameter Mapping</span>
                    <span className="text-accent text-[11px] font-mono">Template: Luxury High-Rise</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded bg-bgSecondary text-[11px]">
                      <span className="text-textSecondary">Property Name:</span>
                      <span className="font-medium text-textPrimary">Thong Lo Skyline Duplex</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-bgSecondary text-[11px]">
                      <span className="text-textSecondary">Floor Area & Bedrooms:</span>
                      <span className="font-medium text-textPrimary">185 sqm &bull; 3 Bed / 3 Bath</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-bgSecondary text-[11px]">
                      <span className="text-textSecondary">Price & Ownership:</span>
                      <span className="font-medium text-textPrimary">฿28,900,000 &bull; Freehold</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded border border-borderSubtle bg-white font-mono text-[11px] text-textSecondary">
                    Preview: "Presenting this 185 sqm duplex at Thong Lo Skyline. 3 Beds, 3 Baths, Freehold title. Listed at ฿28.9M."
                  </div>
                </div>
              </div>

              {/* Text 02 (Right) */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <span className="font-mono text-xs font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded">
                  Feature 02
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary">
                  Content Preparation
                </h2>
                <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                  Property listings contain structured parameters: bedroom counts, square meters, neighborhood highlights, and pricing terms. Turning this into engaging social posts is often tedious.
                </p>
                <p className="text-textSecondary text-sm leading-relaxed">
                  The content preparation module automatically binds listing data fields to customizable post structures, generating clean, readable property specs ready for review.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-textPrimary">
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Property data attribute mapping (price, location, dimensions)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Multi-slide carousel sequencing with slide counters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Template-driven post bodies with custom agency disclaimers</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Feature 03: Channel-Specific Captions */}
        <div id="channel-captions" className="py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded">
                  Feature 03
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary">
                  Channel-Specific Captions
                </h2>
                <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                  Each social platform enforces distinct limits and stylistic standards. TikTok favors punchy captions and trending property discovery tags; Instagram supports structured micro-blogging; Facebook favors localized community details.
                </p>
                <p className="text-textSecondary text-sm leading-relaxed">
                  Project_EA provides dedicated editing tabs per channel, allowing agents to fine-tune individual captions without duplicating effort.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-textPrimary">
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Platform-specific character counters & truncation warnings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Localized hashtag sets grouped by property district</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Auto-formatted call-to-actions (DM for private viewing, WhatsApp links)</span>
                  </li>
                </ul>
              </div>

              {/* Visual Mockup 03 */}
              <div className="lg:col-span-6 bg-bgSecondary p-4 sm:p-6 rounded-lg border border-borderSubtle">
                <div className="bg-white rounded-md border border-borderSubtle p-4 space-y-3 text-xs">
                  <div className="grid grid-cols-3 gap-2 pb-2 border-b border-borderSubtle">
                    <div className="p-2 rounded bg-dark text-white font-medium flex items-center justify-center gap-1.5">
                      <FaTiktok className="w-3 h-3" /> TikTok
                    </div>
                    <div className="p-2 rounded bg-bgSecondary text-textSecondary font-medium flex items-center justify-center gap-1.5">
                      <FaInstagram className="w-3 h-3" /> Instagram
                    </div>
                    <div className="p-2 rounded bg-bgSecondary text-textSecondary font-medium flex items-center justify-center gap-1.5">
                      <FaFacebook className="w-3 h-3" /> Facebook
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-textSecondary">
                      <span>TikTok Optimization Mode</span>
                      <span className="font-mono text-accent">140 / 2,200 chars</span>
                    </div>
                    <div className="p-2.5 rounded bg-bgSecondary border border-borderSubtle text-[11px] leading-relaxed">
                      "Unreal city views from this Thong Lo duplex. 185 sqm, 3 beds, private terrace. What would you do with this living room? #BangkokLiving #PropertyTour #LuxuryHome"
                    </div>
                    <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px]">
                      &check; Complies with TikTok Content Posting API description length standards.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Feature 04: Multi-Account Organization */}
        <div id="multi-account" className="py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Visual Mockup 04 (Left) */}
              <div className="lg:col-span-6 order-2 lg:order-1 bg-bgSecondary p-4 sm:p-6 rounded-lg border border-borderSubtle">
                <div className="bg-white rounded-md border border-borderSubtle p-4 space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
                    <span className="font-semibold text-textPrimary">Connected Account Registry</span>
                    <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                      All Tokens Active
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2.5 rounded border border-borderSubtle flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <FaTiktok className="w-4 h-4 text-dark" />
                        <div>
                          <div className="font-semibold text-textPrimary">@bangkok_prime_agency</div>
                          <div className="text-[10px] text-textSecondary">Primary Luxury Channel &bull; TikTok Direct Post</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600">Valid</span>
                    </div>
                    <div className="p-2.5 rounded border border-borderSubtle flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <FaInstagram className="w-4 h-4 text-[#E1306C]" />
                        <div>
                          <div className="font-semibold text-textPrimary">@bangkokprime.estates</div>
                          <div className="text-[10px] text-textSecondary">Instagram Business Account</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600">Valid</span>
                    </div>
                  </div>
                  <div className="pt-2 text-[10px] text-textSecondary border-t border-borderSubtle">
                    Tokens are isolated per agency workspace. Tokens are encrypted at rest with AES-256.
                  </div>
                </div>
              </div>

              {/* Text 04 (Right) */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <span className="font-mono text-xs font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded">
                  Feature 04
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary">
                  Multi-Account Organization
                </h2>
                <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                  Real estate agencies frequently manage multiple brand profiles, sub-teams, or regional branch accounts. Isolating credentials and permissions is paramount for security.
                </p>
                <p className="text-textSecondary text-sm leading-relaxed">
                  Project_EA isolates social tokens per agency workspace, ensuring agents publish strictly to their assigned accounts with zero credential cross-contamination.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-textPrimary">
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Isolated workspace credentials with strict role scoping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Per-channel token health monitoring & renewal alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Secure OAuth token storage in hardened server vault</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Feature 05: Publishing Workflows */}
        <div id="publishing-workflows" className="py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded">
                  Feature 05
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary">
                  Publishing Workflows
                </h2>
                <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                  Avoid accidental premature postings with staged publishing pipelines. Drafts progress from initial content compilation to agent review, manager approval, and automated delivery.
                </p>
                <p className="text-textSecondary text-sm leading-relaxed">
                  Publishing jobs are queued and executed against platform rate limits with automatic retry logic on network flakiness.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-textPrimary">
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Sequential approval stages (Draft &rarr; In Review &rarr; Approved &rarr; Queued)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Scheduled time slot dispatch with timezone awareness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Immediate error reporting with actionable API response codes</span>
                  </li>
                </ul>
              </div>

              {/* Visual Mockup 05 */}
              <div className="lg:col-span-6 bg-bgSecondary p-4 sm:p-6 rounded-lg border border-borderSubtle">
                <div className="bg-white rounded-md border border-borderSubtle p-4 space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
                    <span className="font-semibold text-textPrimary">Publishing Pipeline Stages</span>
                    <span className="text-textSecondary text-[11px]">Batch #EA-B20</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 rounded border border-borderSubtle flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gray-400" />
                        <span className="font-medium text-textPrimary">1. Draft Created</span>
                      </div>
                      <span className="text-[10px] text-textSecondary font-mono">Agent: S. Narong</span>
                    </div>
                    <div className="p-2 rounded border border-borderSubtle flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="font-medium text-textPrimary">2. Listing Specs Verified</span>
                      </div>
                      <span className="text-[10px] text-blue-700 font-medium">Approved</span>
                    </div>
                    <div className="p-2 rounded border border-accent bg-accent-subtle/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <span className="font-semibold text-textPrimary">3. Queued for Dispatch</span>
                      </div>
                      <span className="text-[10px] font-mono text-accent font-semibold">17:30 ICT</span>
                    </div>
                    <div className="p-2 rounded border border-dashed border-borderSubtle text-textSecondary flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gray-300" />
                        <span>4. Platform Receipt Confirmed</span>
                      </div>
                      <span className="text-[10px] font-mono">Pending Dispatch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Feature 06: Posting History & Audit Logs */}
        <div id="posting-history" className="py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Visual Mockup 06 (Left) */}
              <div className="lg:col-span-6 order-2 lg:order-1 bg-bgSecondary p-4 sm:p-6 rounded-lg border border-borderSubtle">
                <div className="bg-white rounded-md border border-borderSubtle p-4 space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
                    <span className="font-semibold text-textPrimary">Publishing Audit Log</span>
                    <span className="text-[10px] font-mono text-textSecondary">HTTP 200 Receipts</span>
                  </div>
                  <div className="divide-y divide-borderSubtle">
                    <div className="py-2 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-textPrimary">#EA-9011 Asoke Duplex</div>
                        <div className="text-[10px] text-textSecondary font-mono">TikTok API &bull; 2026-10-15 14:02:18 ICT</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700">
                        SUCCESS (ID: 74291)
                      </span>
                    </div>
                    <div className="py-2 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-textPrimary">#EA-8980 Phrom Phong Penthouse</div>
                        <div className="text-[10px] text-textSecondary font-mono">TikTok API &bull; 2026-10-14 18:00:04 ICT</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700">
                        SUCCESS (ID: 74180)
                      </span>
                    </div>
                    <div className="py-2 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-textPrimary">#EA-8955 Sathorn Villa</div>
                        <div className="text-[10px] text-textSecondary font-mono">TikTok API &bull; 2026-10-13 11:30:12 ICT</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700">
                        SUCCESS (ID: 73994)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text 06 (Right) */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <span className="font-mono text-xs font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded">
                  Feature 06
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary">
                  Posting History & Audit Logs
                </h2>
                <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                  Maintain a permanent audit trail of every post distributed across your agency's social properties. Quickly reference previous announcements, dates, and live post URLs.
                </p>
                <p className="text-textSecondary text-sm leading-relaxed">
                  Detailed logs record the exact operator who approved the dispatch, the API response timestamp, and the permanent external post identifier.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-textPrimary">
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Full chronological audit log of all publishing actions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Direct links to published posts on connected platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>API payload snapshots for troubleshooting failed dispatches</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Feature 07: Workflow Automation */}
        <div id="workflow-automation" className="py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs font-semibold text-accent bg-accent-subtle px-2.5 py-1 rounded">
                  Feature 07
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary">
                  Workflow Automation
                </h2>
                <p className="text-textSecondary text-sm sm:text-base leading-relaxed">
                  When a new property listing enters your inventory, Project_EA can automatically trigger image asset cropping, assemble standard copy outlines, and place drafts into the review queue.
                </p>
                <p className="text-textSecondary text-sm leading-relaxed">
                  Automations run reliably in the background, freeing property agents to focus on client relationships and viewings rather than repetitive copy-pasting.
                </p>
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-textPrimary">
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Event-driven draft generation from listing data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Automated image format conversion (HEIC/RAW to optimized JPEG/WebP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Status webhooks for agency CRM integration</span>
                  </li>
                </ul>
              </div>

              {/* Visual Mockup 07 */}
              <div className="lg:col-span-6 bg-bgSecondary p-4 sm:p-6 rounded-lg border border-borderSubtle">
                <div className="bg-white rounded-md border border-borderSubtle p-4 space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-borderSubtle">
                    <span className="font-semibold text-textPrimary">Automation Rule Engine</span>
                    <span className="text-[10px] font-mono text-accent">Active Rule #A-04</span>
                  </div>
                  <div className="p-3 rounded bg-bgSecondary border border-borderSubtle font-mono text-[11px] space-y-1.5 text-textPrimary">
                    <div>
                      <span className="text-accent font-semibold">ON EVENT:</span>{' '}
                      listing.imported(type == "luxury_condo")
                    </div>
                    <div>
                      <span className="text-blue-600 font-semibold">TRIGGER:</span>{' '}
                      generate_vertical_clip(resolution: 1080x1920)
                    </div>
                    <div>
                      <span className="text-emerald-700 font-semibold">ACTION:</span>{' '}
                      apply_agency_watermark(logo: "Prime_Dark")
                    </div>
                    <div>
                      <span className="text-amber-700 font-semibold">QUEUE:</span>{' '}
                      stage_draft_for_review(assignee: "Lead_Agent")
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-textSecondary pt-1">
                    <span>Execution time: ~1.2s</span>
                    <span className="text-emerald-700 font-medium">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-bgSecondary border-t border-borderSubtle">
        <Container size="narrow">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-textPrimary">
              See the complete process in action.
            </h2>
            <p className="text-textSecondary text-sm sm:text-base">
              Learn how media moves from raw property assets to published social posts in our step-by-step workflow guide.
            </p>
            <div className="pt-2">
              <Button to="/how-it-works" variant="primary" size="lg" icon={<FiArrowRight className="w-4 h-4" />}>
                View How It Works
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
