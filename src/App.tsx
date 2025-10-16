
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/hooks/useTheme';
import { Toaster } from '@/components/ui/sonner';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTop from '@/components/ScrollToTop';
import Layout from '@/components/layout/Layout';

// Pages
import Index from '@/pages/Index';
import Validator from '@/pages/Validator';
import Formatter from '@/pages/Formatter';
import Converter from '@/pages/Converter';
import Diff from '@/pages/Diff';
import Path from '@/pages/Path';
import Schema from '@/pages/Schema';
import Documentation from '@/pages/Documentation';
import Blog from '@/pages/Blog';
import FAQ from '@/pages/FAQ';
import AboutUs from '@/pages/AboutUs';
import ContactUs from '@/pages/ContactUs';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Cookies from '@/pages/Cookies';
import NotFound from '@/pages/NotFound';

// Blog Posts
import JsonVsXmlComparison from '@/pages/blog/JsonVsXmlComparison';
import JsonValidationGuide from '@/pages/blog/JsonValidationGuide';
import JsonFormattingBestPractices from '@/pages/blog/JsonFormattingBestPractices';
import JsonConversionGuide from '@/pages/blog/JsonConversionGuide';
import JsonSchemaGuide from '@/pages/blog/JsonSchemaGuide';
import JsonApiGuide from '@/pages/blog/JsonApiGuide';
import JsonToolsForBeginners from '@/pages/blog/JsonToolsForBeginners';
import JsonDebuggingTips from '@/pages/blog/JsonDebuggingTips';
import JsonPerformanceOptimization from '@/pages/blog/JsonPerformanceOptimization';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
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
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/json-vs-xml-comparison" element={<JsonVsXmlComparison />} />
              <Route path="/blog/json-validation-guide" element={<JsonValidationGuide />} />
              <Route path="/blog/json-formatting-best-practices" element={<JsonFormattingBestPractices />} />
              <Route path="/blog/json-conversion-guide" element={<JsonConversionGuide />} />
              <Route path="/blog/json-schema-guide" element={<JsonSchemaGuide />} />
              <Route path="/blog/json-api-guide" element={<JsonApiGuide />} />
              <Route path="/blog/json-tools-for-beginners" element={<JsonToolsForBeginners />} />
              <Route path="/blog/json-debugging-tips" element={<JsonDebuggingTips />} />
              <Route path="/blog/json-performance-optimization" element={<JsonPerformanceOptimization />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <Toaster />
          <CookieConsent />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
