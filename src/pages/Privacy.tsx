import React from 'react';
import { Container } from '../components/common/Container';
import { MetaTags } from '../components/common/MetaTags';
import { siteConfig } from '../config/site';

export const Privacy: React.FC = () => {
  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'info-we-collect', title: '2. Information We Collect' },
    { id: 'account-contact', title: '3. Account and Contact Information' },
    { id: 'connected-accounts', title: '4. Connected Social Media Accounts' },
    { id: 'oauth-tokens', title: '5. OAuth Authorization and Tokens' },
    { id: 'media-assets', title: '6. Uploaded Photos and Videos' },
    { id: 'publishing-data', title: '7. Publishing Data' },
    { id: 'how-info-used', title: '8. How Information Is Used' },
    { id: 'third-party-apis', title: '9. Third-Party Platform APIs' },
    { id: 'storage-security', title: '10. Data Storage and Security' },
    { id: 'data-retention', title: '11. Data Retention' },
    { id: 'account-disconnection', title: '12. Account Disconnection' },
    { id: 'deletion-requests', title: '13. Data Deletion Requests' },
    { id: 'cookies-analytics', title: '14. Cookies and Analytics' },
    { id: 'international-transfers', title: '15. International Data Transfers' },
    { id: 'user-rights', title: '16. User Rights' },
    { id: 'children-privacy', title: '17. Children\'s Privacy' },
    { id: 'policy-updates', title: '18. Policy Updates' },
    { id: 'contact-info', title: '19. Contact Information' },
  ];

  return (
    <>
      <MetaTags
        title="Privacy Policy"
        description="Privacy Policy detailing how Project_EA collects, handles, stores, and protects user data and social media OAuth tokens."
      />

      <div className="bg-bgSecondary border-b border-borderSubtle py-12">
        <Container size="narrow">
          <div className="space-y-3">
            <span className="text-xs font-mono font-medium text-textSecondary uppercase tracking-wider">
              Data Protection & Privacy &bull; Editable Draft
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-textSecondary">
              Last Updated: {siteConfig.lastUpdatedPrivacy} &bull; Jurisdiction:{' '}
              {siteConfig.jurisdiction}
            </p>
          </div>
        </Container>
      </div>

      <div className="py-12 sm:py-16 bg-white">
        <Container size="narrow">
          <div className="space-y-10 text-sm sm:text-base leading-relaxed text-textPrimary font-sans">
            {/* Callout Notice */}
            <div className="p-4 rounded-lg bg-bgSecondary border border-borderSubtle text-xs text-textSecondary leading-normal">
              <strong className="text-textPrimary block mb-1">Scope & Applicability:</strong>
              This Privacy Policy explains data practices for Project_EA. This public marketing website
              is a static website and collects no personal data or cookies beyond standard, ephemeral
              hosting server logs. The separate, authenticated Project_EA application processes property
              content and authorized social media tokens as detailed below.
            </div>

            {/* Table of Contents */}
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
                Project_EA ("we", "us", or "our") respects your personal data and is committed to
                protecting privacy rights. This Privacy Policy informs you how we collect, store,
                process, and safeguard information when real estate agents, agencies, and businesses
                interact with our platform and utilize our social media publishing integrations.
              </p>
            </section>

            {/* Section 2 */}
            <section id="info-we-collect" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">2. Information We Collect</h2>
              <p className="text-textSecondary">
                We only collect data necessary to provide and operate the Project_EA property
                management and social publishing tool. We do not sell personal data, do not profile
                consumers, and do not track users across unrelated websites.
              </p>
            </section>

            {/* Section 3 */}
            <section id="account-contact" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">3. Account and Contact Information</h2>
              <p className="text-textSecondary">
                When you register for Project_EA or submit an inquiry, we collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li>Agency or business name, registered company details.</li>
                <li>Operator full name, professional email address, and phone number.</li>
                <li>Workspace roles and operational team seat permissions.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="connected-accounts" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">4. Connected Social Media Accounts</h2>
              <p className="text-textSecondary">
                To enable automated publishing, users authorize Project_EA through official OAuth 2.0
                authorization flows provided by third-party platforms (such as TikTok, Instagram, and
                Facebook).
              </p>
              <p className="text-textSecondary">
                When you connect your TikTok account via TikTok Login Kit and Content Posting API, we
                retrieve basic profile metadata solely necessary to verify identity and confirm
                posting permissions:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li>TikTok Open ID (unique platform identifier)</li>
                <li>Profile display name and avatar image</li>
                <li>Account posting eligibility status and creator verification flags</li>
              </ul>
              <p className="text-textSecondary text-xs">
                We do NOT access your personal direct messages, private viewing history, passwords, or financial payment details from connected social platforms.
              </p>
            </section>

            {/* Section 5 */}
            <section id="oauth-tokens" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">5. OAuth Authorization and Tokens</h2>
              <p className="text-textSecondary">
                OAuth access tokens and refresh tokens granted during the authorization handshake are
                stored in hardened, encrypted server databases using industry-standard AES-256
                encryption at rest.
              </p>
              <p className="text-textSecondary">
                Tokens are exchanged strictly between our secure backend server and the official
                third-party API endpoints. They are never exposed to public browsers, never bundled
                in static client code, and never accessible to unauthorized team workspaces.
              </p>
            </section>

            {/* Section 6 */}
            <section id="media-assets" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">6. Uploaded Photos and Videos</h2>
              <p className="text-textSecondary">
                Property photographs, architectural blueprints, and video walkthrough files uploaded
                to Project_EA are stored securely in cloud object storage solely for formatting,
                previewing, watermarking, and dispatching to your chosen social accounts. We claim no
                ownership over your media and do not license or train public AI models on your
                property assets.
              </p>
            </section>

            {/* Section 7 */}
            <section id="publishing-data" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">7. Publishing Data</h2>
              <p className="text-textSecondary">
                We record operational metadata related to each publishing request:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li>Timestamp of publication dispatch</li>
                <li>Target social channel and account handle</li>
                <li>Post title, caption text, and hashtag parameters</li>
                <li>API response status codes, error details, and external post identifiers</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="how-info-used" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">8. How Information Is Used</h2>
              <p className="text-textSecondary">
                We use the collected information exclusively to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li>Provide, maintain, and optimize the Project_EA workflow platform.</li>
                <li>Execute authorized video and post uploads to designated third-party channels.</li>
                <li>Maintain agency audit logs and dispatch verification records.</li>
                <li>Provide technical support and respond to customer service inquiries.</li>
                <li>Enforce our Terms of Service and prevent abusive or fraudulent operations.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="third-party-apis" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">9. Third-Party Platform APIs</h2>
              <p className="text-textSecondary">
                When you initiate a publishing action, your content and media are transmitted directly
                to third-party APIs (including TikTok's Content Posting API). Once received by the
                destination platform, your content becomes subject to that platform's terms of service
                and privacy policy.
              </p>
              <p className="text-textSecondary">
                We encourage you to review:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li><a href="https://www.tiktok.com/legal/page/row/privacy-policy/en" target="_blank" rel="noopener noreferrer" className="text-accent underline">TikTok Privacy Policy</a></li>
                <li><a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">Meta Privacy Policy</a></li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="storage-security" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">10. Data Storage and Security</h2>
              <p className="text-textSecondary">
                We implement robust technical and organizational security measures to protect your
                information:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li>Encryption in transit using TLS 1.3 across all communication channels.</li>
                <li>Encryption at rest with AES-256 for all OAuth tokens and persistent credentials.</li>
                <li>Strict role-based access control (RBAC) isolating customer workspaces.</li>
                <li>Automated audit logging of system access and API token use.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section id="data-retention" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">11. Data Retention</h2>
              <p className="text-textSecondary">
                We retain your account details and media assets only for as long as your workspace
                remains active or as required to fulfill legal, accounting, and compliance obligations.
                Publishing audit logs are maintained for thirty (30) to ninety (90) days to allow
                agency verification before scheduled archiving.
              </p>
            </section>

            {/* Section 12 */}
            <section id="account-disconnection" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">12. Account Disconnection</h2>
              <p className="text-textSecondary">
                You can disconnect your social media accounts at any time from within your Project_EA
                workspace settings. Disconnecting an account immediately purges the corresponding OAuth
                tokens from our active dispatch cache.
              </p>
              <p className="text-textSecondary">
                You may also revoke Project_EA's access directly through the third-party platform's
                security settings:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li><strong>TikTok:</strong> Profile &rarr; Settings and Privacy &rarr; Security &rarr; Manage App Permissions &rarr; Revoke Project_EA.</li>
                <li><strong>Instagram / Facebook:</strong> Settings & Privacy &rarr; Apps and Websites &rarr; Remove Project_EA.</li>
              </ul>
            </section>

            {/* Section 13 */}
            <section id="deletion-requests" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">13. Data Deletion Requests</h2>
              <p className="text-textSecondary">
                In compliance with data protection laws and platform developer requirements, you have
                the right to request complete deletion of your account and associated data.
              </p>
              <p className="text-textSecondary">
                To submit a data deletion request, email us at{' '}
                <a href={`mailto:${siteConfig.privacyEmail}`} className="text-accent underline font-mono">
                  {siteConfig.privacyEmail}
                </a>{' '}
                with the subject line "Data Deletion Request" and your registered agency identifier.
                We will permanently delete your stored assets, tokens, and workspace records within
                thirty (30) calendar days and issue written confirmation.
              </p>
            </section>

            {/* Section 14 */}
            <section id="cookies-analytics" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">14. Cookies and Analytics</h2>
              <p className="text-textSecondary">
                The public website (<code>project-ea.com</code>) does not deploy third-party advertising
                cookies, tracking pixels, or cross-site tracking scripts. Our web hosting servers
                maintain standard, temporary access logs (IP address, browser user-agent, timestamp)
                strictly for cybersecurity and denial-of-service mitigation.
              </p>
            </section>

            {/* Section 15 */}
            <section id="international-transfers" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">15. International Data Transfers</h2>
              <p className="text-textSecondary">
                Your information may be stored and processed on secure cloud infrastructure located in
                Singapore, the United States, or other jurisdictions where our cloud service providers
                maintain facilities. By using the Service, you consent to the transfer of data across
                borders in accordance with this Policy and standard data protection clauses.
              </p>
            </section>

            {/* Section 16 */}
            <section id="user-rights" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">16. User Rights</h2>
              <p className="text-textSecondary">
                Depending on your geographic location (including under Thailand's Personal Data
                Protection Act - PDPA or European GDPR), you may have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-textSecondary text-sm">
                <li>Access and obtain a copy of personal information we hold about you.</li>
                <li>Rectify inaccurate or incomplete workspace information.</li>
                <li>Request restriction or object to the processing of your data.</li>
                <li>Request data portability.</li>
                <li>Withdraw consent at any time without affecting past lawful processing.</li>
              </ul>
            </section>

            {/* Section 17 */}
            <section id="children-privacy" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">17. Children's Privacy</h2>
              <p className="text-textSecondary">
                The Service is exclusively intended for commercial real estate professionals and property
                businesses. We do not knowingly collect personal data from individuals under eighteen
                (18) years of age. If we become aware that a minor has provided us with personal data, we
                will promptly delete such information.
              </p>
            </section>

            {/* Section 18 */}
            <section id="policy-updates" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">18. Policy Updates</h2>
              <p className="text-textSecondary">
                We may periodically update this Privacy Policy to reflect modifications to our
                platform capabilities, third-party API integration guidelines, or legal statutes. We
                will notify active users of material changes via email or system notices.
              </p>
            </section>

            {/* Section 19 */}
            <section id="contact-info" className="space-y-3 pt-6 border-t border-borderSubtle">
              <h2 className="text-xl font-bold text-textPrimary">19. Contact Information</h2>
              <p className="text-textSecondary">
                For privacy inquiries, data deletion requests, or questions regarding our third-party
                API compliance, please contact our Data Protection Officer:
              </p>
              <div className="p-4 rounded-lg bg-bgSecondary border border-borderSubtle text-xs space-y-1 font-mono text-textPrimary">
                <div>Data Protection & Privacy Officer</div>
                <div>Entity: {siteConfig.companyName}</div>
                <div>
                  Email:{' '}
                  <a href={`mailto:${siteConfig.privacyEmail}`} className="text-accent underline">
                    {siteConfig.privacyEmail}
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
