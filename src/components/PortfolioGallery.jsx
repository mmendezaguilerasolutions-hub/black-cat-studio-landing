import { Button } from '@/components/ui/button';

const PortfolioGallery = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 80;
      const targetPosition = contactSection.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const works = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&h=600&fit=crop',
      artist: 'María González',
      style: 'Realismo',
      size: 'large', // 2x2
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=300&fit=crop',
      artist: 'Alex Ruiz',
      style: 'Old School',
      size: 'wide', // 2x1
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1590246814883-57c511ea1d6f?w=300&h=600&fit=crop',
      artist: 'Sofia Chen',
      style: 'Japonés',
      size: 'tall', // 1x2
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=300&h=300&fit=crop',
      artist: 'Lucas Martin',
      style: 'Blackwork',
      size: 'medium', // 1x1
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
      artist: 'Emma Torres',
      style: 'Acuarela',
      size: 'medium',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=300&fit=crop',
      artist: 'David López',
      style: 'Geométrico',
      size: 'wide',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=600&fit=crop',
      artist: 'Ana Morales',
      style: 'Minimalista',
      size: 'tall',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=300&h=300&fit=crop',
      artist: 'Carlos Vega',
      style: 'Neo-tradicional',
      size: 'medium',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      artist: 'Laura Sánchez',
      style: 'Dotwork',
      size: 'medium',
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop',
      artist: 'Miguel Ángel',
      style: 'Tribal',
      size: 'large',
    },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'wide':
        return 'col-span-2 row-span-1';
      case 'tall':
        return 'col-span-1 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            Nuestro Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora una selección de nuestros trabajos más destacados
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] mb-12">
          {works.map((work) => (
            <div
              key={work.id}
              className={`${getSizeClasses(work.size)} group relative overflow-hidden rounded-lg cursor-pointer`}
            >
              {/* Image */}
              <img
                src={work.image}
                alt={`Trabajo de ${work.artist}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-brand-whiteSmoke font-bold text-lg mb-1">
                    {work.artist}
                  </p>
                  <p className="text-brand-whiteSmoke/80 text-sm">
                    {work.style}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 h-auto font-bold"
          >
            Ver más trabajos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
