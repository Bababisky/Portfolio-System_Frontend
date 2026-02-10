/**
 * Tag Component
 * 
 * Badge/pill for skills, categories, etc.
 * Usage: Skill tags, filters, labels
 */

import Link from 'next/link';

interface TagProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'default' | 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  default: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
  primary: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
  outline: 'border border-neutral-300 text-neutral-700 hover:border-neutral-400',
};

export function Tag({
  children,
  href,
  variant = 'default',
  className = '',
  onClick,
}: TagProps) {
  const classes = `tag ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return <span className={classes}>{children}</span>;
}
