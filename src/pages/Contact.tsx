import React from 'react';
import { FiMail, FiShield, FiHelpCircle, FiArrowUpRight, FiClock } from 'react-icons/fi';
import { Container } from '../components/common/Container';
import { MetaTags } from '../components/common/MetaTags';
import { siteConfig } from '../config/site';

export const Contact: React.FC = () => {
  const contactChannels = [
    {
      title: 'Business & Platform Inquiries',
      description:
        'For agencies and property firms seeking platform access, enterprise onboarding, or partnership inquiries.',
      email: siteConfig.contactEmail,
      icon: <FiMail className="w-5 h-5 text-accent" />,
      subject: 'BoltHaven Properties Platform Inquiry',
    },
    {
      title: 'Technical Support & Integrations',
      description:
        'For inquiries regarding developer API staging, third-party platform token authorizations, or operational issues.',
      email: siteConfig.supportEmail,
      icon: <FiHelpCircle className="w-5 h-5 text-accent" />,
      subject: 'BoltHaven Properties Technical Support',
    },
    {
      title: 'Privacy & Data Compliance',
      description:
        'For questions regarding our Privacy Policy, data deletion requests, or third-party developer compliance.',
      email: siteConfig.privacyEmail,
      icon: <FiShield className="w-5 h-5 text-accent" />,
      subject: 'BoltHaven Properties Privacy & Compliance Request',
    },
  ];

  return (
    <>
      <MetaTags
        title="Contact & Support"
        description="Get in touch with the BoltHaven Properties team for product access, technical integrations, or privacy inquiries."
      />

      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-12 bg-bgSecondary border-b border-borderSubtle">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/60 border border-primary/20 text-primary text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Direct inquiries
              </span>
            </div>
            <h1 className="text-section-title font-bold text-textPrimary tracking-tight">
              Get in touch.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-textSecondary leading-relaxed">
              For questions about BoltHaven Properties, product access, integrations, or privacy, contact our team directly through our verified operational channels.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactChannels.map((channel) => (
              <div
                key={channel.title}
                className="bg-white border border-borderSubtle rounded-lg p-6 flex flex-col justify-between hover:border-gray-300 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-md bg-bgSecondary border border-borderSubtle flex items-center justify-center">
                    {channel.icon}
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-textPrimary">
                      {channel.title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-textSecondary leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-borderSubtle">
                  <a
                    href={`mailto:${channel.email}?subject=${encodeURIComponent(channel.subject)}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-accent hover:text-accent-hover font-mono group"
                  >
                    <span>{channel.email}</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Hours and Developer Review Notice */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-bgSecondary border border-borderSubtle space-y-2">
              <div className="flex items-center gap-2 text-textPrimary font-semibold text-sm">
                <FiClock className="w-4 h-4 text-accent" />
                <span>Response Timelines</span>
              </div>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                Our support and engineering teams operate during Indochina Time (ICT, UTC+7), Monday through Friday. We strive to review and reply to verified platform inquiries within 24 to 48 business hours.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-bgSecondary border border-borderSubtle space-y-2">
              <div className="flex items-center gap-2 text-textPrimary font-semibold text-sm">
                <FiShield className="w-4 h-4 text-accent" />
                <span>Developer Review Submissions</span>
              </div>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                If you are a platform reviewer or API partner (such as TikTok Developer Review team), please include your partner ticket reference or reviewer email in the subject line for expedited response.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
