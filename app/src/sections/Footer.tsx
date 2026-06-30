import { Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'Host', href: '#host' },
  { label: 'Package', href: '#package' },
  { label: 'Location', href: '#location' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Youtube', href: '#' },
  { label: 'X/Twitter', href: '#' },
  { label: 'Threads', href: '#' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-olive py-14 md:py-16">
      <div className="section-container max-w-[1100px]">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8">
          {/* Left - Brand */}
          <div className="md:max-w-[280px]">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-cream hover:opacity-80 transition-opacity"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-display italic text-lg">MaestroClass</span>
            </a>
            <p className="mt-4 text-cream-dark text-sm leading-relaxed">
              Get an experience of 48-Hour immersive masterclass in sourdough,
              fire, and Italian tradition.
            </p>
            <p className="mt-8 text-cream-dark/70 text-xs">
              Created by{' '}
              <a href="#" className="underline hover:text-cream transition-colors">
                Struxent
              </a>
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
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-cream-dark text-sm hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
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
