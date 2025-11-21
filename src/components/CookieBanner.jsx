import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { useConsent } from '@/context/ConsentContext';

const CookieBanner = () => {
  const navigate = useNavigate();
  const { consent, acceptAll, rejectAll, setCustomConsent, hasConsent } = useConsent();
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [customPreferences, setCustomPreferences] = useState({
    analytics: false,
    advertising: false,
    preferences: false,
  });

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('cookie_banner_dismissed');
    if (!hasConsent && !isDismissed) {
      setShowBanner(true);
    }
  }, [hasConsent]);

  useEffect(() => {
    if (showBanner && !dismissed) {
      document.body.style.paddingBottom = '120px';
    } else {
      document.body.style.paddingBottom = '0';
    }

    return () => {
      document.body.style.paddingBottom = '0';
    };
  }, [showBanner, dismissed]);

  const handleAcceptAll = () => {
    acceptAll();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setShowBanner(false);
  };

  const handleConfigure = () => {
    setShowModal(true);
  };

  const handleSavePreferences = () => {
    setCustomConsent(customPreferences);
    setShowModal(false);
    setShowBanner(false);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setShowBanner(false);
    sessionStorage.setItem('cookie_banner_dismissed', 'true');
  };

  if (!showBanner || hasConsent) {
    return null;
  }

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#002F5C] text-white p-6 shadow-2xl">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">
                Este sitio utiliza cookies
              </h3>
              <p className="text-sm text-white/90">
                Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el uso de nuestra web. 
                Puedes aceptar todas las cookies, rechazarlas o configurar tus preferencias.{' '}
                <button
                  onClick={() => navigate('/cookies')}
                  className="underline hover:text-white/80"
                >
                  Más información
                </button>
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleConfigure}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#002F5C]"
              >
                Configurar
              </Button>
              <Button
                onClick={handleRejectAll}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#002F5C]"
              >
                Rechazar todo
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                Aceptar todo
              </Button>
            </div>

            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 md:relative md:top-auto md:right-auto text-white hover:text-white/70 transition-colors"
              aria-label="Cerrar banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Configuration Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Configuración de Cookies</DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Checkbox checked={true} disabled={true} />
              <div className="flex-1">
                <h4 className="font-bold mb-1">Cookies Necesarias</h4>
                <p className="text-sm text-muted-foreground">
                  Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
                </p>
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Checkbox
                checked={customPreferences.analytics}
                onCheckedChange={(checked) =>
                  setCustomPreferences({ ...customPreferences, analytics: !!checked })
                }
              />
              <div className="flex-1">
                <h4 className="font-bold mb-1">Cookies Analíticas</h4>
                <p className="text-sm text-muted-foreground">
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                </p>
              </div>
            </div>

            {/* Advertising */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Checkbox
                checked={customPreferences.advertising}
                onCheckedChange={(checked) =>
                  setCustomPreferences({ ...customPreferences, advertising: !!checked })
                }
              />
              <div className="flex-1">
                <h4 className="font-bold mb-1">Cookies de Publicidad</h4>
                <p className="text-sm text-muted-foreground">
                  Se utilizan para mostrar anuncios relevantes para ti.
                </p>
              </div>
            </div>

            {/* Preferences */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Checkbox
                checked={customPreferences.preferences}
                onCheckedChange={(checked) =>
                  setCustomPreferences({ ...customPreferences, preferences: !!checked })
                }
              />
              <div className="flex-1">
                <h4 className="font-bold mb-1">Cookies de Preferencias</h4>
                <p className="text-sm text-muted-foreground">
                  Permiten que el sitio web recuerde tus preferencias y elecciones.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={() => setShowModal(false)} variant="outline" className="flex-1">
              Cancelar
            </Button>
            <Button onClick={handleSavePreferences} className="flex-1">
              Guardar preferencias
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieBanner;
