import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import FractionalHR from "./pages/FractionalHR";
import InternationalExpansion from "./pages/InternationalExpansion";
import Onboarding from "./pages/Onboarding";
import ReferralNetwork from "./pages/ReferralNetwork";
import Diagnostic from "./pages/Diagnostic";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fractional-hr" element={<FractionalHR />} />
          <Route path="/international-expansion" element={<InternationalExpansion />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/referral-network" element={<ReferralNetwork />} />
          <Route path="/diagnostic" element={<Diagnostic />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
