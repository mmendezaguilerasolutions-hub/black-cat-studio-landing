import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ChatProvider } from "@/context/ChatContext";
import { ConsentProvider } from "@/context/ConsentContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import DeclaracionAccesibilidad from "./pages/DeclaracionAccesibilidad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConsentProvider>
      <AuthProvider>
        <ChatProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/aviso-legal" element={<AvisoLegal />} />
                <Route path="/privacidad" element={<PoliticaPrivacidad />} />
                <Route path="/cookies" element={<PoliticaCookies />} />
                <Route path="/accesibilidad" element={<DeclaracionAccesibilidad />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ChatProvider>
      </AuthProvider>
    </ConsentProvider>
  </QueryClientProvider>
);

export default App;
