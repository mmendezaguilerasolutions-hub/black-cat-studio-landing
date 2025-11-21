import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const AvisoLegal = () => {
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
          Aviso Legal
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Identificación
            </h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la 
              Sociedad de la Información y Comercio Electrónico, se informa de los datos identificativos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Denominación social:</strong> Black Cat Tattoo Studio S.L.</li>
              <li><strong>CIF:</strong> B-12345678</li>
              <li><strong>Domicilio social:</strong> Distrito Born, Barcelona, España</li>
              <li><strong>Email:</strong> info@blackcattattoo.com</li>
              <li><strong>Teléfono:</strong> +34 XXX XXX XXX</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Condiciones de Uso
            </h2>
            <p>
              El acceso y uso de este sitio web implica la aceptación de los siguientes términos y condiciones:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios del sitio.
              </li>
              <li>
                Queda prohibido el uso del sitio con fines ilícitos o que puedan dañar la imagen de la empresa.
              </li>
              <li>
                Black Cat Tattoo Studio se reserva el derecho de modificar los contenidos del sitio sin previo aviso.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Propiedad Intelectual
            </h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, imágenes, diseños, código fuente y logotipos, 
              son propiedad de Black Cat Tattoo Studio o de sus respectivos autores y están protegidos por las 
              leyes de propiedad intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Responsabilidad
            </h2>
            <p>
              Black Cat Tattoo Studio no se hace responsable de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>La continuidad y disponibilidad de los contenidos.</li>
              <li>Los errores en el acceso al sitio web o en su contenido.</li>
              <li>Los daños causados por el uso indebido del sitio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Ley Aplicable y Jurisdicción
            </h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier 
              controversia, las partes se someten a los Juzgados y Tribunales de Barcelona.
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

export default AvisoLegal;
