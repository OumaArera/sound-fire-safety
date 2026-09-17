import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { TopBar } from './TopBar';
import { navigation, phones, requestServiceMailto, site } from '@/data/site';
import { cn } from '@/lib/cn';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openMenu = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 140);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <TopBar />

      <div
        className={cn(
          'border-b border-navy-100/80 bg-white/95 backdrop-blur transition-shadow duration-300',
          scrolled && 'shadow-[0_8px_30px_-16px_rgba(11,29,54,0.45)]',
        )}
      >
        <Container size="wide">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
            <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
              <img
                src={site.logo}
                alt=""
                className="h-11 w-11 object-contain lg:h-14 lg:w-14"
                width={56}
                height={56}
              />
              <span className="leading-tight">
                <span className="block whitespace-nowrap font-display text-[13px] font-extrabold uppercase tracking-tight text-navy-900 sm:text-base lg:text-lg">
                  Sound <span className="text-flame-600">Fire &amp; Safety</span>
                </span>
                <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-500 sm:block sm:text-[11px]">
                  {site.tagline}
                </span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
              {navigation.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openMenu(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn(navLinkClass, isActive && 'text-flame-600')
                      }
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                      onFocus={() => openMenu(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform duration-200',
                          openDropdown === item.label && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </NavLink>

                    <div
                      className={cn(
                        'absolute left-0 top-full w-80 origin-top-left pt-3 transition-all duration-200',
                        openDropdown === item.label
                          ? 'visible scale-100 opacity-100'
                          : 'invisible scale-95 opacity-0',
                      )}
                    >
                      <ul className="overflow-hidden rounded-lg border border-navy-100 bg-white py-2 shadow-[0_24px_48px_-20px_rgba(11,29,54,0.45)]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavLink
                              to={child.href}
                              className={({ isActive }) =>
                                cn(
                                  'block border-l-2 px-4 py-2.5 text-sm font-medium transition',
                                  isActive
                                    ? 'border-flame-600 bg-flame-50 text-flame-700'
                                    : 'border-transparent text-navy-700 hover:border-flame-600 hover:bg-navy-50 hover:text-flame-700',
                                )
                              }
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) => cn(navLinkClass, isActive && 'text-flame-600')}
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden xl:block">
                <Button href={requestServiceMailto} size="sm">
                  Request Service
                </Button>
              </div>
              <a
                href={phones[0].href}
                className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-3 py-2 text-xs font-bold text-white transition hover:bg-navy-800 lg:hidden"
              >
                <Phone className="size-4" aria-hidden="true" />
                <span className="hidden sm:inline">Call</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                className="inline-flex size-10 items-center justify-center rounded-md border border-navy-200 text-navy-900 transition hover:border-flame-600 hover:text-flame-600 lg:hidden"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

const navLinkClass =
  'inline-flex items-center gap-1 rounded-md px-3 py-2 font-display text-[13px] font-bold uppercase tracking-wide text-navy-800 transition hover:text-flame-600';

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
          <span className="font-display text-sm font-extrabold uppercase tracking-tight text-navy-900">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-9 items-center justify-center rounded-md border border-navy-200 text-navy-700 transition hover:border-flame-600 hover:text-flame-600"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Mobile">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.label}>
                <div className="flex items-center">
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        'flex-1 rounded-md px-3 py-3 font-display text-sm font-bold uppercase tracking-wide transition',
                        isActive ? 'bg-flame-50 text-flame-700' : 'text-navy-800 hover:bg-navy-50',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded((current) => (current === item.label ? null : item.label))
                      }
                      className="inline-flex size-9 items-center justify-center rounded-md text-navy-500 transition hover:text-flame-600"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={expanded === item.label}
                    >
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform',
                          expanded === item.label && 'rotate-180',
                        )}
                      />
                    </button>
                  )}
                </div>

                {item.children && expanded === item.label && (
                  <ul className="mb-2 ml-3 space-y-1 border-l-2 border-navy-100 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavLink
                          to={child.href}
                          onClick={onClose}
                          className={({ isActive }) =>
                            cn(
                              'block rounded-md px-3 py-2.5 text-sm font-medium transition',
                              isActive
                                ? 'text-flame-700'
                                : 'text-navy-600 hover:text-flame-700',
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-navy-100 p-5">
          <Button href={requestServiceMailto} className="w-full" onClick={onClose}>
            Request Service
          </Button>
          <a
            href={phones[0].href}
            className="flex items-center justify-center gap-2 rounded-md border-2 border-navy-200 px-4 py-3 font-display text-[13px] font-bold uppercase tracking-wide text-navy-900 transition hover:border-flame-600 hover:text-flame-600"
          >
            <Phone className="size-4" aria-hidden="true" />
            {phones[0].display}
          </a>
        </div>
      </div>
    </>
  );
}
