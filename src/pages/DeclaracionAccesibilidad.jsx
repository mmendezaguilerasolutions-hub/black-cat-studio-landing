import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const DeclaracionAccesibilidad = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Button>

        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-8">
          Declaración de Accesibilidad
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Compromiso con la Accesibilidad
            </h2>
            <p>
              En Black Cat Tattoo Studio nos comprometemos a hacer nuestro sitio web accesible 
              para todas las personas, independientemente de sus capacidades o tecnología utilizada.
            </p>
            <p>
              Trabajamos continuamente para mejorar la accesibilidad y usabilidad de nuestro sitio web, 
              siguiendo las pautas de accesibilidad WCAG 2.1 nivel AA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Características de Accesibilidad
            </h2>
            <p>
              Nuestro sitio web incluye las siguientes características de accesibilidad:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Navegación por teclado:</strong> Todas las funciones son accesibles mediante teclado</li>
              <li><strong>Textos alternativos:</strong> Todas las imágenes incluyen descripciones alt</li>
              <li><strong>Contraste de colores:</strong> Cumplimos con los ratios de contraste WCAG AAA</li>
              <li><strong>Estructura semántica:</strong> Uso correcto de HTML5 semántico</li>
              <li><strong>ARIA labels:</strong> Etiquetas ARIA para mejorar la navegación con lectores de pantalla</li>
              <li><strong>Responsive design:</strong> Diseño adaptable a diferentes tamaños de pantalla</li>
              <li><strong>Fuentes legibles:</strong> Tipografías claras y tamaños de fuente adecuados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Tecnologías Utilizadas
            </h2>
            <p>
              Este sitio web se basa en las siguientes tecnologías:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>ARIA (Accessible Rich Internet Applications)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Limitaciones Conocidas
            </h2>
            <p>
              A pesar de nuestros esfuerzos, algunas partes del sitio web pueden no ser completamente 
              accesibles. Estamos trabajando activamente para solucionar estos problemas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Algunos contenidos multimedia pueden no tener subtítulos completos</li>
              <li>Ciertas imágenes del portfolio pueden no tener descripciones detalladas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Navegadores y Tecnologías Asistivas
            </h2>
            <p>
              Este sitio web es compatible con:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Navegadores:</strong> Chrome, Firefox, Safari, Edge (últimas 2 versiones)</li>
              <li><strong>Lectores de pantalla:</strong> NVDA, JAWS, VoiceOver</li>
              <li><strong>Navegación por teclado:</strong> Totalmente soportada</li>
              <li><strong>Zoom:</strong> Hasta 200% sin pérdida de funcionalidad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Evaluación y Pruebas
            </h2>
            <p>
              La accesibilidad de este sitio web ha sido evaluada mediante:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Herramientas automáticas de evaluación (WAVE, Axe)</li>
              <li>Pruebas manuales con navegación por teclado</li>
              <li>Pruebas con lectores de pantalla</li>
              <li>Revisión de contraste de colores</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Feedback y Contacto
            </h2>
            <p>
              Valoramos tus comentarios sobre la accesibilidad de nuestro sitio web. Si encuentras 
              alguna barrera de accesibilidad o tienes sugerencias de mejora, por favor contáctanos:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Email:</strong> accesibilidad@blackcattattoo.com</li>
              <li><strong>Teléfono:</strong> +34 XXX XXX XXX</li>
            </ul>
            <p className="mt-4">
              Nos esforzamos por responder a todas las consultas sobre accesibilidad en un plazo 
              de 5 días laborables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Procedimiento de Aplicación
            </h2>
            <p>
              Si no estás satisfecho con nuestra respuesta, puedes contactar con:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ministerio de Asuntos Económicos y Transformación Digital</li>
              <li>Dirección: Paseo de la Castellana, 162, 28046 Madrid</li>
              <li>Web: <a href="https://www.mineco.gob.es" className="underline hover:text-foreground">www.mineco.gob.es</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Fecha de la Declaración
            </h2>
            <p>
              Esta declaración de accesibilidad fue creada el 15 de enero de 2025 y se revisó 
              por última vez el 15 de enero de 2025.
            </p>
            <p className="mt-4">
              Esta declaración se actualiza periódicamente para reflejar las mejoras continuas 
              en la accesibilidad de nuestro sitio web.
            </p>
          </section>

          <p className="text-sm mt-8">
            Última actualización: Enero 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeclaracionAccesibilidad;
