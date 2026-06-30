import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import RollingText from '../components/RollingText';

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'Host', href: '#host' },
  { label: 'Package', href: '#package' },
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="section-container flex items-center justify-between h-[76px]">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-text-primary hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <svg
            className="h-[18px] w-[18px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 2l2.1 6.4 6.4 2.1-6.4 2.1L12 19l-2.1-6.4-6.4-2.1 6.4-2.1L12 2z"
            />
          </svg>
          <span className="font-display text-[20px] leading-none">MaestroClass</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-1 text-[18px] leading-[25px] text-text-primary hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#apply"
            onClick={(e) => handleNavClick(e, '#apply')}
            className="pill-button roll-link bg-olive text-cream hover:bg-dark"
          >
            <RollingText label="Apply Now" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-sage/95 backdrop-blur-md border-t border-dark/10">
          <div className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-text-primary hover:opacity-70 transition-opacity py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={(e) => handleNavClick(e, '#apply')}
              className="pill-button roll-link bg-olive text-cream hover:bg-dark mt-2 w-fit"
            >
              <RollingText label="Apply Now" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
