import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PoliticaCookies = () => {
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
          Política de Cookies
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. ¿Qué son las Cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
              visitas un sitio web. Se utilizan para mejorar tu experiencia de navegación y proporcionar 
              funcionalidades adicionales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Tipos de Cookies que Utilizamos
            </h2>
            
            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">
              Cookies Necesarias
            </h3>
            <p>
              Estas cookies son esenciales para el funcionamiento del sitio web. No se pueden desactivar.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies de sesión:</strong> Mantienen tu sesión activa</li>
              <li><strong>Cookies de seguridad:</strong> Protegen contra actividades fraudulentas</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">
              Cookies Analíticas
            </h3>
            <p>
              Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> Para analizar el tráfico y comportamiento</li>
              <li><strong>Duración:</strong> Hasta 2 años</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">
              Cookies de Publicidad
            </h3>
            <p>
              Se utilizan para mostrar anuncios relevantes según tus intereses.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies de Facebook:</strong> Para publicidad en redes sociales</li>
              <li><strong>Cookies de Google Ads:</strong> Para anuncios personalizados</li>
              <li><strong>Duración:</strong> Hasta 1 año</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">
              Cookies de Preferencias
            </h3>
            <p>
              Permiten que el sitio web recuerde tus preferencias.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Idioma:</strong> Recuerda tu idioma preferido</li>
              <li><strong>Configuración:</strong> Guarda tus ajustes personalizados</li>
              <li><strong>Duración:</strong> Hasta 1 año</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Cookies de Terceros
            </h2>
            <p>
              Nuestro sitio web utiliza cookies de terceros:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> Para análisis de tráfico</li>
              <li><strong>Facebook Pixel:</strong> Para publicidad en redes sociales</li>
              <li><strong>Google Ads:</strong> Para anuncios personalizados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Gestión de Cookies
            </h2>
            <p>
              Puedes gestionar o eliminar las cookies según tus preferencias. La mayoría de los 
              navegadores aceptan cookies automáticamente, pero puedes modificar la configuración 
              de tu navegador para rechazarlas.
            </p>
            <p className="mt-4">
              Ten en cuenta que rechazar ciertas cookies puede afectar la funcionalidad del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Configuración del Navegador
            </h2>
            <p>
              Enlaces para configurar cookies en diferentes navegadores:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome" className="underline hover:text-foreground">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org" className="underline hover:text-foreground">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/safari" className="underline hover:text-foreground">Safari</a></li>
              <li><a href="https://support.microsoft.com/edge" className="underline hover:text-foreground">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Actualización de la Política
            </h2>
            <p>
              Esta política de cookies puede ser actualizada periódicamente. Te recomendamos revisarla 
              regularmente para estar informado sobre cómo usamos las cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Contacto
            </h2>
            <p>
              Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos en:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> privacidad@blackcattattoo.com
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

export default PoliticaCookies;
