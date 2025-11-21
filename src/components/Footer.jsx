import { useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Music, MapPin } from 'lucide-react';
import logo from '@/assets/logo.webp';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
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

  return (
    <footer className="bg-brand-black text-brand-whiteSmoke">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Black Cat Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-black">Black Cat</span>
            </div>
            <p className="text-brand-whiteSmoke/70">
              Arte corporal de calidad excepcional en el corazón de Barcelona.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('artists')}
                  className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                >
                  Artistas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('/aviso-legal')}
                  className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                >
                  Aviso Legal
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/privacidad')}
                  className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/cookies')}
                  className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                >
                  Política de Cookies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/accesibilidad')}
                  className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                >
                  Accesibilidad
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-whiteSmoke/70 hover:text-brand-whiteSmoke transition-colors"
                aria-label="TikTok"
              >
                <Music className="w-6 h-6" />
              </a>
            </div>

            <div className="flex items-start gap-2 text-brand-whiteSmoke/70">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-brand-whiteSmoke">Barcelona Born</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-whiteSmoke transition-colors"
                >
                  Ver ubicación
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-ink pt-8 text-center text-brand-whiteSmoke/70">
          <p>&copy; {new Date().getFullYear()} Black Cat Tattoo Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
