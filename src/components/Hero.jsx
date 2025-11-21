import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.webp';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 80;
      const targetPosition = contactSection.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center bg-brand-black overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black" />

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src={logo}
              alt="Black Cat Logo"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl animate-fade-in"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-whiteSmoke mb-6 tracking-tight animate-fade-in">
            Black Cat
          </h1>

          {/* Subtitle */}
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-whiteSmoke/90 mb-8 animate-fade-in">
            Tattoo Studio
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-brand-whiteSmoke/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Arte corporal de calidad excepcional en el corazón de Barcelona. 
            Nuestros artistas especializados transforman tus ideas en obras maestras permanentes.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-brand-whiteSmoke text-brand-black hover:bg-brand-whiteSmoke/90 text-lg px-8 py-6 h-auto font-bold shadow-2xl animate-fade-in"
          >
            Reserva tu cita
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-whiteSmoke/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-whiteSmoke/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
