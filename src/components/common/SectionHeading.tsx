import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  isDark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  isDark = false,
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={`mb-10 sm:mb-14 ${
        isCentered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-block text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark ? 'text-red-400' : 'text-accent'
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-section-title font-semibold tracking-tight ${
          isDark ? 'text-white' : 'text-textPrimary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-textSecondary'
          } ${isCentered ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
