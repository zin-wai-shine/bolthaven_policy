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
        <div className="mb-3.5">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
              isDark
                ? 'bg-white/5 border-white/10 text-primary-light'
                : 'bg-primary-light/60 border-primary/20 text-primary'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
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
