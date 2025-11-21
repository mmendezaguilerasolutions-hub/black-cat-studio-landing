import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.webp';
import { useAuth } from '@/context/AuthContext';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Portfolio', sectionId: 'portfolio' },
    { label: 'Quiénes Somos', sectionId: 'about' },
    { label: 'Artistas', sectionId: 'artists' },
    { label: 'Testimonios', sectionId: 'reviews' },
    { label: 'FAQ', sectionId: 'faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-whiteSmoke/95 backdrop-blur-sm shadow-lg'
          : 'bg-brand-whiteSmoke/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            className="flex items-center gap-2 group"
          >
            <img
              src={logo}
              alt="Black Cat Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-xl md:text-2xl font-black text-brand-black">
              Black Cat
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className="text-brand-black hover:text-brand-ink transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-brand-black text-brand-whiteSmoke hover:bg-brand-graphite"
            >
              Reserva tu cita
            </Button>

            {user ? (
              <Button
                onClick={() => navigate('/dashboard')}
                variant="outline"
                className="border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-whiteSmoke"
              >
                Dashboard
              </Button>
            ) : (
              <Button
                onClick={() => navigate('/dashboard')}
                variant="outline"
                className="border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-whiteSmoke"
              >
                Acceso
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-black hover:text-brand-ink transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-whiteSmoke border-t border-brand-ink/20">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className="block w-full text-left py-2 text-brand-black hover:text-brand-ink transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-brand-black text-brand-whiteSmoke hover:bg-brand-graphite"
            >
              Reserva tu cita
            </Button>

            {user ? (
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/dashboard');
                }}
                variant="outline"
                className="w-full border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-whiteSmoke"
              >
                Dashboard
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/dashboard');
                }}
                variant="outline"
                className="w-full border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-whiteSmoke"
              >
                Acceso
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
