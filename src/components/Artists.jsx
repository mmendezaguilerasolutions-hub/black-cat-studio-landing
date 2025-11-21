import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { supabase } from '@/lib/supabase';

const Artists = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);

  // Mock data as fallback
  const mockArtists = [
    {
      id: 1,
      name: 'María González',
      styles: ['Realismo', 'Retrato'],
      bio: 'Especialista en retratos fotorrealistas con más de 8 años de experiencia.',
      photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      portfolio: [
        'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1590246814883-57c511ea1d6f?w=400&h=400&fit=crop',
      ],
    },
    {
      id: 2,
      name: 'Alex Ruiz',
      styles: ['Old School', 'Neo-tradicional'],
      bio: 'Maestro del estilo tradicional americano con un toque moderno.',
      photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      portfolio: [
        'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=400&h=400&fit=crop',
      ],
    },
    {
      id: 3,
      name: 'Sofia Chen',
      styles: ['Japonés', 'Oriental'],
      bio: 'Experta en tatuajes de estilo japonés tradicional y contemporáneo.',
      photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      ],
    },
  ];

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      const { data, error } = await supabase
        .from('artists')
        .select('*')
        .eq('is_active', true);

      if (error) throw error;

      if (data && data.length > 0) {
        setArtists(data);
      } else {
        setArtists(mockArtists);
      }
    } catch (error) {
      console.error('Error fetching artists:', error);
      setArtists(mockArtists);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artists.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, artists.length]);

  const getVisibleArtists = () => {
    if (artists.length === 0) return [];
    
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % artists.length;
      result.push(artists[index]);
    }
    return result;
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + artists.length) % artists.length);
    setAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % artists.length);
    setAutoPlay(false);
  };

  const scrollToContact = (artistName) => {
    setSelectedArtist(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 80;
      const targetPosition = contactSection.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="artists" className="py-16 md:py-24 bg-brand-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-whiteSmoke">Cargando artistas...</p>
        </div>
      </section>
    );
  }

  if (artists.length === 0) {
    return (
      <section id="artists" className="py-16 md:py-24 bg-brand-graphite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-whiteSmoke">Próximamente habrá artistas disponibles</p>
        </div>
      </section>
    );
  }

  const visibleArtists = getVisibleArtists();

  return (
    <section id="artists" className="py-16 md:py-24 bg-brand-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-whiteSmoke mb-4">
            Nuestros Artistas
          </h2>
          <p className="text-lg md:text-xl text-brand-whiteSmoke/80 max-w-2xl mx-auto">
            Conoce al talentoso equipo que hará realidad tu visión
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-brand-whiteSmoke/10 hover:bg-brand-whiteSmoke/20 text-brand-whiteSmoke p-3 rounded-full transition-colors"
            aria-label="Artista anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-brand-whiteSmoke/10 hover:bg-brand-whiteSmoke/20 text-brand-whiteSmoke p-3 rounded-full transition-colors"
            aria-label="Siguiente artista"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Artists Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {visibleArtists.map((artist) => (
              <div
                key={artist.id}
                onClick={() => setSelectedArtist(artist)}
                className="cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <img
                    src={artist.photo_url}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-brand-whiteSmoke mb-2">
                  {artist.name}
                </h3>
                <p className="text-brand-whiteSmoke/70">
                  {Array.isArray(artist.styles) ? artist.styles.join(', ') : artist.styles}
                </p>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {artists.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoPlay(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-brand-whiteSmoke'
                    : 'bg-brand-whiteSmoke/30'
                }`}
                aria-label={`Ir al artista ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Artist Detail Modal */}
      <Dialog open={!!selectedArtist} onOpenChange={() => setSelectedArtist(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedArtist && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-black">
                  {selectedArtist.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Artist Photo */}
                <img
                  src={selectedArtist.photo_url}
                  alt={selectedArtist.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

                {/* Styles */}
                <div>
                  <h4 className="font-bold mb-2">Estilos:</h4>
                  <p className="text-muted-foreground">
                    {Array.isArray(selectedArtist.styles)
                      ? selectedArtist.styles.join(', ')
                      : selectedArtist.styles}
                  </p>
                </div>

                {/* Bio */}
                <div>
                  <h4 className="font-bold mb-2">Biografía:</h4>
                  <p className="text-muted-foreground">{selectedArtist.bio}</p>
                </div>

                {/* Portfolio */}
                {selectedArtist.portfolio && selectedArtist.portfolio.length > 0 && (
                  <div>
                    <h4 className="font-bold mb-4">Trabajos destacados:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedArtist.portfolio.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Trabajo ${idx + 1}`}
                          className="w-full aspect-square object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => scrollToContact(selectedArtist.name)}
                >
                  Reservar cita con {selectedArtist.name}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Artists;
