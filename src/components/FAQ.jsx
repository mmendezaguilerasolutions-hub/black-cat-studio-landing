import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Dónde está ubicado el estudio?',
      answer: 'Estamos ubicados en el distrito de Born en Barcelona, uno de los barrios más emblemáticos de la ciudad. Puedes encontrarnos fácilmente en transporte público o a pie desde el centro.',
    },
    {
      question: '¿Cuánto cuesta un tatuaje?',
      answer: 'El precio varía según el tamaño, complejidad y estilo del diseño. Ofrecemos consultas gratuitas donde podemos darte un presupuesto personalizado. En general, los precios comienzan desde 80€ para diseños pequeños.',
    },
    {
      question: '¿Necesito reservar una consulta antes del tatuaje?',
      answer: 'Sí, recomendamos encarecidamente una consulta previa. Esto nos permite discutir tu idea, hacer ajustes al diseño, explicar el proceso y responder todas tus preguntas. Las consultas son gratuitas.',
    },
    {
      question: '¿Puedo traer mi propio diseño?',
      answer: 'Por supuesto. Puedes traer tu propio diseño o referencias, y nuestros artistas trabajarán contigo para adaptarlo y hacerlo realidad. También ofrecemos diseños personalizados desde cero.',
    },
    {
      question: '¿Qué pasa si necesito cancelar mi cita?',
      answer: 'Si necesitas cancelar, te pedimos que nos avises con al menos 48 horas de antelación. Las cancelaciones de último momento pueden estar sujetas a una penalización.',
    },
    {
      question: '¿Cuánta experiencia tienen vuestros artistas?',
      answer: 'Todos nuestros artistas tienen más de 5 años de experiencia profesional. Cada uno se especializa en diferentes estilos, asegurando que encuentres al artista perfecto para tu visión.',
    },
    {
      question: '¿Hacéis cover-ups de tatuajes antiguos?',
      answer: 'Sí, varios de nuestros artistas son expertos en cover-ups. Trae fotos del tatuaje que quieres cubrir y trabajaremos contigo para crear un diseño que lo transforme completamente.',
    },
    {
      question: '¿Tenéis promociones o descuentos?',
      answer: 'Ocasionalmente ofrecemos promociones especiales. Síguenos en redes sociales o suscríbete a nuestro newsletter para estar al tanto de nuestras ofertas.',
    },
    {
      question: '¿Aceptáis pagos con tarjeta?',
      answer: 'Sí, aceptamos efectivo, tarjeta de crédito/débito y transferencias bancarias. Generalmente requerimos un depósito para confirmar la cita.',
    },
    {
      question: '¿Qué estilos de tatuaje hacéis?',
      answer: 'Nuestro equipo domina una amplia variedad de estilos incluyendo realismo, old school, neo-tradicional, japonés, blackwork, acuarela, geométrico, minimalista, tribal y dotwork.',
    },
    {
      question: '¿Ofrecéis retoques gratuitos?',
      answer: 'Sí, ofrecemos un retoque gratuito dentro de los primeros 3 meses si es necesario. Esto asegura que tu tatuaje se vea perfecto después de la cicatrización completa.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-whiteSmoke mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg md:text-xl text-brand-whiteSmoke/80 max-w-2xl mx-auto">
            Respuestas a las dudas más comunes
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-brand-ink rounded-lg overflow-hidden bg-brand-black/30"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-graphite/50 transition-colors"
              >
                <span className="text-lg font-bold text-brand-whiteSmoke pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-whiteSmoke flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-brand-whiteSmoke/80">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
