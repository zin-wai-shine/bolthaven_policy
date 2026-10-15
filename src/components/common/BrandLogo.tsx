import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo/bolthaven_logo.png';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'dark' }) => {
  const isDark = variant === 'dark';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg group ${className}`}
      aria-label="BoltHaven Properties Home"
    >
      {/* Brand Icon Image - Clean standalone logo without background */}
      <img
        src={logoImg}
        alt="BoltHaven Logo"
        className="w-9 h-9 sm:w-10 sm:h-10 object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
      />

      {/* Clean Typographic Wordmark with normal title casing */}
      <div className="flex flex-col">
        <span className="flex items-center text-[18px] sm:text-[20px] font-bold tracking-tight leading-none">
          <span className={isDark ? 'text-textPrimary' : 'text-white'}>
            BoltHaven
          </span>
          <span className="text-primary ml-0.5">.</span>
        </span>
        <span className={`text-[12px] font-normal tracking-normal mt-0.5 ${isDark ? 'text-textSecondary' : 'text-gray-300'}`}>
          Properties
        </span>
      </div>
    </Link>
  );
};
