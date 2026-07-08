import { Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useEffect, useRef } from 'react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Training', to: '/training' },
  { label: 'Team', to: '/team' },
  { label: 'Materials', to: '/materials' },
  { label: 'About', to: '/about' },
];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Youtube', href: '#' },
  { label: 'X/Twitter', href: '#' },
  { label: 'Threads', href: '#' },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const pendingContactScroll = useRef(false);

  const scrollToApply = () => {
    const target = document.querySelector('#apply');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <footer className="bg-olive py-14 md:py-16">
      <div className="section-container max-w-[1100px]">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8">
          {/* Left - Brand */}
          <div className="md:max-w-[280px]">
            <Link
              to="/"
              className="flex items-center gap-2 text-cream hover:opacity-80 transition-opacity"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-display italic text-lg">Salad School</span>
            </Link>
            <p className="mt-4 text-cream-dark text-sm leading-relaxed">
              Live online language training built around level, rhythm, and
              confident conversation.
            </p>
            <p className="mt-8 text-cream-dark/70 text-xs">
              French, English, Spanish, Cantonese, and custom language pathways.
            </p>
          </div>

          {/* Center - Navigation */}
          <div>
            <h4 className="text-cream text-sm font-medium mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-cream-dark text-sm hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="#apply"
                  onClick={handleContactClick}
                  className="text-cream-dark text-sm hover:text-cream transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Social */}
          <div>
            <h4 className="text-cream text-sm font-medium mb-4">Social</h4>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream-dark text-sm hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
