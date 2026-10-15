import React from 'react';
import { Container } from '../components/common/Container';
import { MetaTags } from '../components/common/MetaTags';
import { siteConfig } from '../config/site';

export const Terms: React.FC = () => {
  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'acceptance', title: '2. Acceptance of Terms' },
    { id: 'description', title: '3. Description of the Service' },
    { id: 'account', title: '4. Account Responsibilities' },
    { id: 'third-party', title: '5. Third-Party Platform Integrations' },
    { id: 'content-ownership', title: '6. User Content and Ownership' },
    { id: 'publishing-authorization', title: '7. Publishing Authorization' },
    { id: 'acceptable-use', title: '8. Acceptable Use' },
    { id: 'intellectual-property', title: '9. Intellectual Property' },
    { id: 'service-availability', title: '10. Service Availability' },
    { id: 'disclaimers', title: '11. Disclaimers' },
    { id: 'limitation-liability', title: '12. Limitation of Liability' },
    { id: 'suspension-termination', title: '13. Suspension and Termination' },
    { id: 'changes', title: '14. Changes to Terms' },
    { id: 'governing-law', title: '15. Governing Law' },
    { id: 'contact', title: '16. Contact Information' },
  ];

  return (
    <>
      <MetaTags
        title="Terms of Service"
        description="Terms of Service governing the use of BoltHaven Properties social publishing and workflow automation platform."
      />

      <div className="bg-bgSecondary border-b border-borderSubtle py-12">
        <Container size="narrow">
          <div className="space-y-3">
            <span className="text-xs font-mono font-medium text-textSecondary uppercase tracking-wider">
              Legal Documentation &bull; Editable Draft
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-textSecondary">
              Last Updated: {siteConfig.lastUpdatedTerms} &bull; Jurisdiction:{' '}
              {siteConfig.jurisdiction}
            </p>
          </div>
        </Container>
      </div>

      <div className="py-12 sm:py-16 bg-white">
        <Container size="narrow">
          <div className="space-y-10 text-sm sm:text-base leading-relaxed text-textPrimary font-sans">
            {/* Notice Callout */}
            <div className="p-4 rounded-lg bg-bgSecondary border border-borderSubtle text-xs text-textSecondary leading-normal">
              <strong className="text-textPrimary block mb-1">Important Notice:</strong>
              This document represents an editable draft Terms of Service formulated specifically for
              the BoltHaven Properties property publishing platform. Prior to commercial deployment, this
              draft should be reviewed and customized with verified legal counsel to reflect the
              operator's exact business entity structure and jurisdictional filings.
            </div>

            {/* Quick Table of Contents */}
            <nav className="p-5 rounded-lg border border-borderSubtle bg-white space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-textSecondary">
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-textSecondary hover:text-accent transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </nav>

            {/* Section 1 */}
            <section id="introduction" className="space-y-3 pt-4 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">1. Introduction</h2>
              <p className="text-textSecondary">
                These Terms of Service ("Terms") constitute a legally binding agreement between you
                (whether an individual property agent, agency administrator, or commercial property
                business entity, referred to as "User", "you", or "your") and BoltHaven Properties
                ("BoltHaven Properties", "we", "us", or "our"), governing your access to and use of our
                software platform, website, publishing workflows, and associated automation tools
                (collectively, the "Service").
              </p>
            </section>

            {/* Section 2 */}
            <section id="acceptance" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">2. Acceptance of Terms</h2>
              <p className="text-textSecondary">
                By accessing our website, creating an account, connecting authorized third-party
                social media accounts, or utilizing any functionality of BoltHaven Properties, you
                unconditionally agree to be bound by these Terms and our Privacy Policy. If you are
                entering into these Terms on behalf of an agency, company, or legal entity, you
                warrant that you have full legal authority to bind such entity. If you do not agree
                with these Terms, you must immediately refrain from accessing or using the Service.
              </p>
            </section>

            {/* Section 3 */}
            <section id="description" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">3. Description of the Service</h2>
              <p className="text-textSecondary">
                BoltHaven Properties provides a specialized software workspace engineered for real estate
                professionals and property enterprises. The platform allows users to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li>Organize, crop, and manage property photos, walk-through videos, and architectural specifications.</li>
                <li>Draft, format, and stage social media captions, property metadata, and localized hashtag packages.</li>
                <li>Connect authorized social media profiles via official developer OAuth protocols (including TikTok, Instagram, and Facebook).</li>
                <li>Schedule and dispatch prepared content through third-party platform application programming interfaces (APIs).</li>
                <li>Maintain chronological audit logs and dispatch status reports for agency operations.</li>
              </ul>
              <p className="text-textSecondary text-xs">
                BoltHaven Properties is an independent software tool and does not provide property brokerage, escrow, or real estate advisory services.
              </p>
            </section>

            {/* Section 4 */}
            <section id="account" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">4. Account Responsibilities</h2>
              <p className="text-textSecondary">
                When registered to use BoltHaven Properties, you are responsible for maintaining the
                confidentiality of your login credentials and for all activities conducted under your
                workspace. You agree to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li>Provide authentic, accurate, and current operational information.</li>
                <li>Promptly notify BoltHaven Properties in the event of any unauthorized credential access or security breach.</li>
                <li>Ensure that all agency staff members and operators granted workspace seats comply with these Terms.</li>
                <li>Never share master administrator credentials or automated API access tokens across unauthorized third parties.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="third-party" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">5. Third-Party Platform Integrations</h2>
              <p className="text-textSecondary">
                The Service interacts with external social media platforms, including but not
                limited to TikTok (ByteDance Ltd.), Instagram, and Facebook (Meta Platforms, Inc.).
                Your use of these integrations requires valid account credentials on each respective
                network and is governed by their respective developer terms, terms of service, and
                community guidelines:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li>TikTok Developer Terms of Service and Community Guidelines</li>
                <li>Meta Platform Terms and Community Standards</li>
              </ul>
              <p className="text-textSecondary">
                BoltHaven Properties does not control, and assumes no liability for, the availability, uptime,
                rate limits, API modifications, suspension, or termination of third-party platforms.
                Third-party platforms reserve the right to revoke developer API access or user OAuth
                authorizations at their discretion.
              </p>
            </section>

            {/* Section 6 */}
            <section id="content-ownership" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">6. User Content and Ownership</h2>
              <p className="text-textSecondary">
                "User Content" encompasses all photos, floor plans, video walk-throughs, property
                descriptions, prices, agent contact details, and marketing copy uploaded or processed
                through the Service.
              </p>
              <p className="text-textSecondary">
                You retain complete ownership and intellectual property rights in your User Content.
                BoltHaven Properties claims no proprietary ownership over your real estate assets. By
                uploading User Content to the Service, you grant BoltHaven Properties a limited, worldwide,
                non-exclusive, royalty-free license solely to host, process, reformat (e.g., resizing
                or watermarking), and transmit such content to your designated third-party social
                accounts in direct accordance with your instructions.
              </p>
            </section>

            {/* Section 7 */}
            <section id="publishing-authorization" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">7. Publishing Authorization</h2>
              <p className="text-textSecondary">
                By configuring a social media channel within BoltHaven Properties and scheduling or executing
                a publishing action, you explicitly authorize BoltHaven Properties to transmit your User
                Content and associated metadata to the connected platform on your behalf using the
                OAuth access tokens you have granted.
              </p>
              <p className="text-textSecondary">
                You represent and warrant that you possess all requisite authorizations, licenses,
                model releases, property owner permissions, and agency mandates necessary to publish
                the submitted property media publicly on the selected social media networks.
              </p>
            </section>

            {/* Section 8 */}
            <section id="acceptable-use" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">8. Acceptable Use</h2>
              <p className="text-textSecondary">
                You agree not to misuse the Service. Specifically, you agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li>Publish fraudulent, deceptive, or misleading property listings, fake pricing, or non-existent units.</li>
                <li>Transmit content that infringes upon third-party copyrights, architectural rights, or trademarks.</li>
                <li>Publish content containing malware, spam, harassment, hate speech, or sexually explicit material.</li>
                <li>Circumvent or attempt to bypass platform rate limiting, security controls, or API quotas.</li>
                <li>Reverse engineer, decompile, or attempt to extract source code from BoltHaven Properties.</li>
                <li>Use the platform for automated bot scraping, unauthorized data harvesting, or denial-of-service attacks.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="intellectual-property" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">9. Intellectual Property</h2>
              <p className="text-textSecondary">
                The BoltHaven Properties platform, code, software architecture, user interfaces, branding,
                logos, and documentation are the exclusive property of BoltHaven Properties and its licensors,
                protected by international copyright, trademark, and intellectual property laws.
                Nothing in these Terms grants you any right, title, or interest in BoltHaven Properties
                trademarks or proprietary software other than the limited right to use the Service as
                expressly permitted herein.
              </p>
            </section>

            {/* Section 10 */}
            <section id="service-availability" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">10. Service Availability</h2>
              <p className="text-textSecondary">
                We make commercially reasonable efforts to ensure the continuous operation and
                availability of the Service. However, scheduled maintenance, system updates,
                telecommunication disruptions, or external platform API outages may occasionally
                result in service interruptions. BoltHaven Properties does not guarantee that the Service will
                be uninterrupted, error-free, or perpetually available.
              </p>
            </section>

            {/* Section 11 */}
            <section id="disclaimers" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">11. Disclaimers</h2>
              <p className="text-textSecondary uppercase text-xs tracking-wider font-mono">
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF
                ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
              </p>
              <p className="text-textSecondary">
                PROJECT_EA DOES NOT WARRANT THAT PUBLISHING ACTIONS WILL GENERATE LEADS, PROPERTY
                SALES, OR SPECIFIC SOCIAL MEDIA ENGAGEMENT LEVELS. WE ARE NOT LIABLE FOR THIRD-PARTY
                PLATFORM ALGORITHMIC DISTRIBUTION, CONTENT REMOVAL, ACCOUNT BANS, OR ENFORCEMENT
                DECISIONS MADE BY EXTERNAL SOCIAL NETWORKS.
              </p>
            </section>

            {/* Section 12 */}
            <section id="limitation-liability" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">12. Limitation of Liability</h2>
              <p className="text-textSecondary">
                To the maximum extent permitted by applicable law, in no event shall BoltHaven Properties, its
                officers, directors, employees, or contractors be liable for any indirect,
                incidental, special, consequential, or punitive damages, including loss of profits,
                goodwill, business opportunities, data loss, or work stoppage, arising out of or in
                connection with your use of or inability to use the Service.
              </p>
              <p className="text-textSecondary">
                In no circumstance shall our cumulative aggregate liability exceed the total amounts
                paid by you to BoltHaven Properties during the twelve (12) months preceding the incident giving
                rise to liability, or USD $100, whichever is greater.
              </p>
            </section>

            {/* Section 13 */}
            <section id="suspension-termination" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">13. Suspension and Termination</h2>
              <p className="text-textSecondary">
                We reserve the right to suspend or terminate your account and access to the Service
                at any time, with or without prior notice, if we have reason to believe that you have
                violated these Terms, engaged in fraudulent property representations, received repeated
                copyright infringement notifications, or jeopardized the security of our
                infrastructure or platform API standing.
              </p>
              <p className="text-textSecondary">
                You may terminate your account at any time by ceasing use of the Service and
                disconnecting your authorized social accounts. Upon termination, your right to access
                the Service ceases immediately.
              </p>
            </section>

            {/* Section 14 */}
            <section id="changes" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">14. Changes to Terms</h2>
              <p className="text-textSecondary">
                We may revise these Terms from time to time to reflect product enhancements,
                statutory amendments, or changes in third-party API policies. When modifications
                occur, we will update the "Last Updated" date at the top of this document. Continued
                use of the Service following published updates constitutes your binding acceptance
                of the revised Terms.
              </p>
            </section>

            {/* Section 15 */}
            <section id="governing-law" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">15. Governing Law</h2>
              <p className="text-textSecondary">
                These Terms and any disputes arising hereunder shall be governed by and construed in
                accordance with the laws of {siteConfig.jurisdiction}, without giving effect to any
                choice of law or conflict of law principles. Any legal suit, action, or proceeding
                arising out of or related to these Terms shall be instituted exclusively in the
                competent courts located in {siteConfig.jurisdiction}.
              </p>
            </section>

            {/* Section 16 */}
            <section id="contact" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">16. Contact Information</h2>
              <p className="text-textSecondary">
                For questions regarding these Terms of Service, platform compliance, or legal inquiries,
                please reach out directly to:
              </p>
              <div className="p-4 rounded-lg bg-bgSecondary border border-borderSubtle text-xs space-y-1 font-mono text-textPrimary">
                <div>BoltHaven Properties Legal & Compliance Team</div>
                <div>Entity: {siteConfig.companyName}</div>
                <div>
                  Email:{' '}
                  <a href={`mailto:${siteConfig.supportEmail}`} className="text-accent underline">
                    {siteConfig.supportEmail}
                  </a>
                </div>
                <div>Jurisdiction: {siteConfig.jurisdiction}</div>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
};
