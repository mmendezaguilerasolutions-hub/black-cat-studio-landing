import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useChat } from '@/context/ChatContext';

const About = () => {
  const { openChat } = useChat();

  return (
    <section id="about" className="py-16 md:py-24 bg-brand-whiteSmoke text-brand-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Quiénes somos
            </h2>
            
            <div className="space-y-4 text-lg md:text-xl text-brand-ink">
              <p>
                Black Cat Tattoo Studio es más que un simple estudio de tatuajes. 
                Somos un colectivo de artistas apasionados ubicados en el vibrante 
                distrito de Born en Barcelona.
              </p>
              
              <p>
                Con más de 10 años de experiencia, nos especializamos en transformar 
                las visiones de nuestros clientes en arte corporal excepcional. Cada 
                tatuaje que creamos es único, personalizado y ejecutado con la máxima 
                atención al detalle.
              </p>
              
              <p>
                Nuestro equipo domina una amplia variedad de estilos, desde el realismo 
                fotográfico hasta el minimalismo contemporáneo, pasando por el tradicional 
                japonés y el blackwork moderno.
              </p>
              
              <p>
                Nos enorgullecemos de mantener los más altos estándares de higiene y 
                seguridad, utilizando únicamente equipos esterilizados y tintas de la 
                más alta calidad.
              </p>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="flex items-center justify-center">
            <Card className="bg-white border border-brand-ink/20 shadow-lg p-8 max-w-md w-full">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 mx-auto mb-4 text-brand-black" />
                
                <h3 className="text-2xl md:text-3xl font-black mb-4">
                  ¿Tienes alguna pregunta?
                </h3>
                
                <p className="text-brand-ink mb-6">
                  Nuestro equipo está disponible para ayudarte a planificar tu próximo tatuaje. 
                  Chatea con nosotros para resolver cualquier duda.
                </p>
                
                <Button
                  size="lg"
                  onClick={openChat}
                  className="w-full bg-brand-black text-brand-whiteSmoke hover:bg-brand-graphite"
                >
                  Habla con nosotros
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
