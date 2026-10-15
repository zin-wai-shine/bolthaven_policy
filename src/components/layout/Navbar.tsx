import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { BrandLogo } from '../common/BrandLogo';
import { Button } from '../common/Button';
import { siteConfig } from '../../config/site';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-borderSubtle transition-all">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 min-h-[88px] sm:min-h-[96px] py-2 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <BrandLogo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-bgSecondary/80 rounded-full border border-borderSubtle/60" aria-label="Main Navigation">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-xs sm:text-[13px] font-medium transition-all duration-150 px-4 py-1.5 rounded-full ${
                  isActive
                    ? 'bg-white text-textPrimary font-semibold shadow-xs border border-borderSubtle/80'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-white/60'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            to="/features"
            variant="primary"
            size="sm"
            className="shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30"
            icon={<FiArrowRight className="w-3.5 h-3.5" />}
          >
            Explore Platform
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-textPrimary hover:bg-bgSecondary rounded-md focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close main navigation' : 'Open main navigation'}
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6 text-textPrimary" />
            ) : (
              <FiMenu className="w-6 h-6 text-textPrimary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[68px] bottom-0 bg-black/20 z-30 md:hidden"
          onClick={closeMobileMenu}
        >
          <div
            className="bg-white border-b border-borderSubtle px-6 py-6 space-y-4 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {siteConfig.navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `text-sm py-2 px-3 rounded-md transition-colors ${
                      isActive
                        ? 'bg-bgSecondary text-textPrimary font-semibold'
                        : 'text-textSecondary hover:text-textPrimary font-normal'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-borderSubtle">
              <Button
                to="/features"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={closeMobileMenu}
                icon={<FiArrowRight className="w-4 h-4" />}
              >
                Explore Platform
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
