import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import RollingText from '../common/RollingText';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Training', to: '/training' },
  { label: 'Team', to: '/team' },
  { label: 'Materials', to: '/materials' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDocked, setIsDocked] = useState(false);
  const lastScrollY = useRef(0);
  const pendingContactScroll = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      setIsDocked(currentScrollY > 40);

      if (currentScrollY <= 8) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(difference) < 6) return;

      if (difference < 0) {
        setIsVisible(true);
      } else if (currentScrollY > 92) {
        setIsVisible(false);
        setMobileOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToApply = () => {
    const target = document.querySelector('#apply');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== '/' || !pendingContactScroll.current) return;

    pendingContactScroll.current = false;
    window.setTimeout(scrollToApply, 380);
  }, [location.pathname]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      pendingContactScroll.current = true;
      navigate('/');
      return;
    }

    scrollToApply();
  };

  const handlePageNavClick = () => {
    setIsVisible(true);
    setMobileOpen(false);
    lastScrollY.current = 0;
    window.saladLenis?.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const startsOnDark =
    location.pathname === '/training' ||
    location.pathname === '/assessment' ||
    location.pathname.startsWith('/courses/');
  const navIsDark = isDocked || mobileOpen;
  const navClassName = navIsDark
    ? 'bg-[#0d120b] text-cream shadow-[0_12px_32px_rgba(13,18,11,0.22)]'
    : startsOnDark
      ? 'bg-transparent text-cream'
      : 'bg-transparent text-text-primary';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navClassName}`}
      initial={false}
      animate={{ y: isVisible ? 0 : -92 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-container flex items-center justify-between h-[76px]">
        {/* Logo */}
        <Link
          to="/"
          onClick={handlePageNavClick}
          className="flex items-center gap-1.5 text-current hover:opacity-80 transition-opacity"
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
          <span className="font-display text-[20px] leading-none">Salad School</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={handlePageNavClick}
              className={({ isActive }) =>
                `px-1 text-[18px] leading-[25px] text-current transition-opacity hover:opacity-70 ${
                  isActive ? 'opacity-100' : 'opacity-78'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="#apply"
            onClick={handleContactClick}
            className="px-1 text-[18px] leading-[25px] text-current opacity-78 transition-opacity hover:opacity-70"
          >
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/assessment"
            onClick={handlePageNavClick}
            className={`pill-button roll-link ${
              navIsDark
                ? 'bg-cream text-dark hover:bg-cream-dark'
                : startsOnDark
                  ? 'bg-cream text-dark hover:bg-cream-dark'
                : 'bg-olive text-cream hover:bg-dark'
            }`}
          >
            <RollingText label="Find Your Class" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-current p-2"
          onClick={() => {
            setMobileOpen((current) => {
              const next = !current;
              if (next) setIsVisible(true);
              return next;
            });
          }}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md border-t border-cream/10">
          <div className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                onClick={handlePageNavClick}
                className="text-base font-medium text-cream hover:opacity-70 transition-opacity py-2"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="#apply"
              onClick={handleContactClick}
              className="text-base font-medium text-cream hover:opacity-70 transition-opacity py-2"
            >
              Contact
            </a>
            <Link
              to="/assessment"
              onClick={handlePageNavClick}
              className="pill-button roll-link bg-cream text-dark hover:bg-cream-dark mt-2 w-fit"
            >
              <RollingText label="Find Your Class" />
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
