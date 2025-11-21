import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Laura M.',
      rating: 5,
      date: '15.01.2025',
      text: 'Increíble experiencia. María hizo un trabajo espectacular con mi retrato realista. El nivel de detalle es impresionante y superó todas mis expectativas. El estudio es muy profesional y limpio.',
      avatar: 'L',
    },
    {
      id: 2,
      name: 'Carlos R.',
      rating: 5,
      date: '08.01.2025',
      text: 'Mi primer tatuaje y no podría estar más contento. Alex fue muy paciente explicándome todo el proceso. El diseño old school quedó perfecto. Totalmente recomendado.',
      avatar: 'C',
    },
    {
      id: 3,
      name: 'Ana S.',
      rating: 5,
      date: '22.12.2024',
      text: 'Sofia es una artista excepcional. Mi tatuaje japonés es una obra de arte. La atención al detalle y el profesionalismo del equipo son de primer nivel.',
      avatar: 'A',
    },
    {
      id: 4,
      name: 'Miguel T.',
      rating: 5,
      date: '10.12.2024',
      text: 'Excelente estudio, ambiente profesional y artistas talentosos. Me hice un blackwork con Lucas y el resultado es espectacular. Volveré sin duda.',
      avatar: 'M',
    },
    {
      id: 5,
      name: 'Elena P.',
      rating: 5,
      date: '28.11.2024',
      text: 'El mejor estudio de Barcelona sin duda. Emma hizo un tatuaje acuarela precioso en mi brazo. El trato es cercano y profesional. 100% recomendable.',
      avatar: 'E',
    },
    {
      id: 6,
      name: 'David L.',
      rating: 5,
      date: '15.11.2024',
      text: 'Fantástica experiencia de principio a fin. David López creó un diseño geométrico único para mí. La calidad del trabajo es excepcional.',
      avatar: 'D',
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(reviews.length - 3, prev + 1));
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg md:text-xl text-brand-ink max-w-2xl mx-auto">
            Testimonios reales de personas que confiaron en nosotros
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-brand-black text-brand-whiteSmoke p-3 rounded-full hover:bg-brand-graphite transition-colors"
              aria-label="Review anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {currentIndex < reviews.length - 3 && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-brand-black text-brand-whiteSmoke p-3 rounded-full hover:bg-brand-graphite transition-colors"
              aria-label="Siguiente review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Reviews Grid */}
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            <div className="flex gap-6">
              {reviews.map((review) => (
                <Card
                  key={review.id}
                  className="min-w-[calc(100%-2rem)] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1rem)] bg-gray-50 border border-gray-200 p-6 hover:border-brand-black/50 transition-colors"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Date */}
                  <p className="text-sm text-brand-ink mb-4">{review.date}</p>

                  {/* Text */}
                  <p className="text-brand-black mb-6 line-clamp-4">{review.text}</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-black text-brand-whiteSmoke flex items-center justify-center font-bold">
                      {review.avatar}
                    </div>
                    <p className="font-bold text-brand-black">{review.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(reviews.length - 2)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-brand-black' : 'bg-brand-black/30'
                }`}
                aria-label={`Ir a review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
