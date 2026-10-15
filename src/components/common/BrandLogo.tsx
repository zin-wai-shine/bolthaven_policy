import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo/bolthaven_logo.png';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '' }) => {

  return (
    <Link
      to="/"
      className={`inline-flex items-center select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg group ${className}`}
      aria-label="BoltHaven Properties Home"
    >
      {/* Brand Icon Image - Double size standalone logo */}
      <img
        src={logoImg}
        alt="BoltHaven"
        className="h-20 sm:h-24 w-auto object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
      />
    </Link>
  );
};
