import type { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-display font-bold uppercase tracking-wide transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-flame-600 text-white shadow-[0_10px_24px_-12px_rgba(200,16,46,0.9)] hover:bg-flame-700 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-navy-900 text-white shadow-[0_10px_24px_-12px_rgba(11,29,54,0.9)] hover:bg-navy-800 hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border-2 border-white/70 text-white hover:border-white hover:bg-white hover:text-navy-900',
  ghost:
    'border-2 border-navy-200 text-navy-900 hover:border-flame-600 hover:text-flame-700 hover:bg-flame-50',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-3 text-[13px]',
  lg: 'px-7 py-3.5 text-sm',
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, 'to' | 'className' | 'children'> & {
    to: string;
    href?: never;
  };
type ButtonAsAnchor = CommonProps &
  Omit<ComponentProps<'a'>, 'href' | 'className' | 'children'> & {
    href: string;
    to?: never;
  };
type ButtonAsButton = CommonProps &
  ComponentProps<'button'> & { to?: never; href?: never };

export function Button(props: ButtonAsLink | ButtonAsAnchor | ButtonAsButton) {
  const { children, variant = 'primary', size = 'md', className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('to' in rest && rest.to) {
    const { to, ...linkRest } = rest as ComponentProps<typeof Link> & { to: string };
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ComponentProps<'a'> & { href: string };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<'button'>)}>
      {children}
    </button>
  );
}
