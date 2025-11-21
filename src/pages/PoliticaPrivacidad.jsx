import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PoliticaPrivacidad = () => {
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
          Política de Privacidad
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos personales es:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identidad:</strong> Black Cat Tattoo Studio S.L.</li>
              <li><strong>CIF:</strong> B-12345678</li>
              <li><strong>Dirección:</strong> Distrito Born, Barcelona, España</li>
              <li><strong>Email:</strong> privacidad@blackcattattoo.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Datos Personales que Recogemos
            </h2>
            <p>
              Podemos recoger y tratar los siguientes tipos de datos personales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datos de identificación: nombre, apellidos, email, teléfono</li>
              <li>Datos de navegación: cookies, dirección IP, tipo de dispositivo</li>
              <li>Datos de reservas: fecha, hora, servicio solicitado, artista preferido</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Finalidad del Tratamiento
            </h2>
            <p>
              Los datos personales se utilizan para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar y confirmar citas</li>
              <li>Comunicarnos contigo sobre tus reservas</li>
              <li>Mejorar nuestros servicios</li>
              <li>Enviar comunicaciones comerciales (solo con tu consentimiento)</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Base Legal del Tratamiento
            </h2>
            <p>
              El tratamiento de tus datos personales se basa en:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentimiento:</strong> Para enviar comunicaciones comerciales</li>
              <li><strong>Ejecución de contrato:</strong> Para gestionar tu reserva</li>
              <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios</li>
              <li><strong>Obligación legal:</strong> Para cumplir con normativas aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Conservación de Datos
            </h2>
            <p>
              Los datos personales se conservarán durante el tiempo necesario para cumplir con las 
              finalidades descritas y para cumplir con obligaciones legales. Una vez que ya no sean 
              necesarios, procederemos a su eliminación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Derechos del Usuario
            </h2>
            <p>
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> Solicitar información sobre tus datos personales</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
              <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, puedes contactarnos en privacidad@blackcattattoo.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Seguridad
            </h2>
            <p>
              Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos 
              personales contra acceso no autorizado, pérdida o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. 
              Te notificaremos cualquier cambio significativo.
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

export default PoliticaPrivacidad;
