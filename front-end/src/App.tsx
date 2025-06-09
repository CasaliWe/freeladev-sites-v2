import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalogo from "./pages/Catalogo";
import AgenteIA from "./pages/AgenteIA";
import SistemaWeb from "./pages/SistemaWeb";
import NotFound from "./pages/NotFound";
import { AppContextProvider } from "./contexts/AppContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppContextProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/agente-ia" element={<AgenteIA />} />
            <Route path="/sistema-web" element={<SistemaWeb />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppContextProvider>
  </QueryClientProvider>
);

export default App;
