import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";
import Validator from "./pages/Validator";
import Formatter from "./pages/Formatter";
import Converter from "./pages/Converter";
import Diff from "./pages/Diff";
import Path from "./pages/Path";
import Schema from "./pages/Schema";
import Documentation from "./pages/Documentation";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import AboutUs from "./pages/AboutUs"; // Added import
import ContactUs from "./pages/ContactUs"; // Added import
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/validator" element={<Validator />} />
              <Route path="/formatter" element={<Formatter />} />
              <Route path="/converter" element={<Converter />} />
              <Route path="/diff" element={<Diff />} />
              <Route path="/path" element={<Path />} />
              <Route path="/schema" element={<Schema />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/about" element={<AboutUs />} /> {/* Added route */}
              <Route path="/contact" element={<ContactUs />} /> {/* Added route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
          </Layout>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
