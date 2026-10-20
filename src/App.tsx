import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import FractionalHR from "./pages/FractionalHR";
import InternationalExpansion from "./pages/InternationalExpansion";
import Onboarding from "./pages/Onboarding";
import ReferralNetwork from "./pages/ReferralNetwork";
import Diagnostic from "./pages/Diagnostic";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import { pageMeta } from "./seo";

const queryClient = new QueryClient();

export const AppRoutes = () => {
  // Prerendered HTML carries the right <title>; keep it right on in-app navigation too.
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = pageMeta(pathname);
    if (meta) document.title = meta.title;
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/fractional-hr" element={<FractionalHR />} />
      <Route path="/international-expansion" element={<InternationalExpansion />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/referral-network" element={<ReferralNetwork />} />
      <Route path="/diagnostic" element={<Diagnostic />} />
      <Route path="/admin" element={<Admin />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      {/* New public routes also need an entry in src/seo.ts to be prerendered. */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// The router is passed in so the browser (BrowserRouter) and the
// prerender step (StaticRouter) share everything else.
const App = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
