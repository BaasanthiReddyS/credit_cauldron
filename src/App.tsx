import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BorrowerForm from "./pages/BorrowerForm";
import LenderFinder from "./pages/LenderFinder";
import LenderRegistration from "./pages/LenderRegistration";
import LenderDashboard from "./pages/LenderDashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./lib/i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/borrower" element={<BorrowerForm />} />
          <Route path="/lender-finder" element={<LenderFinder />} />
          <Route path="/lender-registration" element={<LenderRegistration />} />
          <Route path="/lender-dashboard" element={<LenderDashboard />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
