import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../common/BrandLogo';
import { siteConfig } from '../../config/site';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bgSecondary border-t border-borderSubtle">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-borderSubtle">
          {/* Col 1: Brand & Overview */}
          <div className="md:col-span-2 space-y-4">
            <BrandLogo />
            <p className="text-textSecondary text-sm max-w-sm leading-relaxed mt-3">
              BoltHaven brings property media processing, listing staging, official social publishing APIs, and agency workflow management together in a high-fidelity workspace.
            </p>
            <div className="text-xs text-textSecondary pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-textPrimary">Operating Region:</span>{' '}
              {siteConfig.jurisdiction} &bull; Headquartered in Bangkok
            </div>
          </div>

          {/* Col 2: Platform Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-textPrimary">
              Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-textSecondary hover:text-textPrimary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-textSecondary hover:text-textPrimary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-textSecondary hover:text-textPrimary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-textSecondary hover:text-textPrimary transition-colors"
                >
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Policies */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-textPrimary">
              Legal & Policies
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/terms"
                  className="text-textSecondary hover:text-textPrimary transition-colors font-medium"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-textSecondary hover:text-textPrimary transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-2 text-xs text-textSecondary">
                <span>Inquiries: </span>
                <a
                  href={`mailto:${siteConfig.privacyEmail}`}
                  className="text-textPrimary hover:underline"
                >
                  {siteConfig.privacyEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Platform Trademark Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-textSecondary">
          <p className="font-medium text-textPrimary">
            &copy; {currentYear} BoltHaven Properties Co., Ltd. All rights reserved.
          </p>
          <p className="max-w-xl text-xs text-gray-500 leading-normal">
            BoltHaven Properties is an independent real estate software platform. TikTok, Instagram, and Facebook are trademarks of their respective owners. Content distribution is powered strictly via official third-party developer APIs.
          </p>
        </div>
      </div>
    </footer>
  );
};
