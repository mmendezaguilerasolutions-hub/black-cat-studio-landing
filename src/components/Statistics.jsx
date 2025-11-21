import { useEffect, useRef, useState } from 'react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [years, setYears] = useState(0);
  const [tattoos, setTattoos] = useState(0);
  const [compliance, setCompliance] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const animateValue = (setter, target) => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, interval);
      return timer;
    };

    const timer1 = animateValue(setYears, 10);
    const timer2 = animateValue(setTattoos, 11000);
    const timer3 = animateValue(setCompliance, 100);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-brand-graphite"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-whiteSmoke mb-4">
              {years}+
            </div>
            <p className="text-lg md:text-xl text-brand-whiteSmoke/80">
              Años en la industria del tatuaje
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-whiteSmoke mb-4">
              {tattoos.toLocaleString()}+
            </div>
            <p className="text-lg md:text-xl text-brand-whiteSmoke/80">
              Tatuajes completados
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-whiteSmoke mb-4">
              {compliance}%
            </div>
            <p className="text-lg md:text-xl text-brand-whiteSmoke/80">
              Cumplimiento de estándares de salud y seguridad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
