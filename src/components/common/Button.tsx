import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-textPrimary focus-visible:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none select-none';

  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-hover active:bg-[#D34312] border border-transparent',
    secondary:
      'bg-white text-textPrimary border border-borderSubtle hover:bg-bgSecondary hover:border-gray-300 active:bg-gray-100',
    outline:
      'bg-transparent text-textPrimary border border-borderSubtle hover:bg-bgSecondary active:bg-gray-100',
    ghost:
      'bg-transparent text-textSecondary hover:text-textPrimary hover:bg-bgSecondary',
  }[variant];

  const sizeStyles = {
    sm: 'text-sm px-3.5 py-1.5 gap-1.5 leading-normal',
    md: 'text-sm px-4 py-2 gap-2 leading-normal',
    lg: 'text-sm sm:text-base px-5 py-2.5 gap-2.5 leading-normal',
  }[size];

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  const combinedClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} tabIndex={disabled ? -1 : undefined}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
