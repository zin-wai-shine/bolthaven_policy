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
      className={`inline-flex items-center gap-2.5 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md group ${className}`}
      aria-label="BoltHaven Properties Home"
    >
      {/* Brand Icon Image */}
      <img
        src={logoImg}
        alt="BoltHaven Logo"
        className="w-8 h-8 object-contain rounded-md flex-shrink-0 transition-transform duration-150 group-hover:scale-105"
      />

      {/* Clean Typographic Wordmark */}
      <span className="flex items-center text-[16px] font-bold tracking-tight">
        <span className={isDark ? 'text-textPrimary' : 'text-white'}>
          BoltHaven
        </span>
        <span className={`font-medium ml-1 ${isDark ? 'text-textSecondary' : 'text-gray-300'}`}>
          Properties
        </span>
      </span>
    </Link>
  );
};
