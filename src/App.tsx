import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// 1. Add 'Outlet' to imports
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import About10x from "./pages/About10x";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/NotFound";
import Press from "./pages/Press";
import BlogDetails from "./pages/BlogDetails";
import ExtensionLabPage from "./pages/ExtensionLabPage";
import MeetingPilotPage from "./pages/MeetingPilotPage";
import StoryMasterPage from "./pages/StoryMasterPage";
import FunnelBee from "./pages/FunnelBee";
import SalesBee from "./pages/SalesBee";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {/* Remove the outer <Layout> wrapper here */}

        <Routes>
          {/* --------------------------------------------------------- */}
          {/* GROUP A: Pages WITH Header and Footer                     */}
          {/* We pass <Outlet /> to Layout so it renders child routes   */}
          {/* --------------------------------------------------------- */}
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About10x />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/galaxy-notes" element={<Blogs />} />
            <Route path="/brand-media-hub" element={<Press />} />
            <Route path="/galaxy-notes/:slug" element={<BlogDetails />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            {/* 404 Page (usually keeps Header/Footer) */}
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* --------------------------------------------------------- */}
          {/* GROUP B: Pages WITHOUT Header and Footer                  */}
          {/* These sit outside the Layout wrapper                      */}
          {/* --------------------------------------------------------- */}
          <Route
            path="/extension-lab-ai-coming-soon"
            element={<ExtensionLabPage />}
          />
          <Route
            path="/meeting-pilot-ai-coming-soon"
            element={<MeetingPilotPage />}
          />
          <Route
            path="/story-master-ai-coming-soon"
            element={<StoryMasterPage />}
          />
          <Route path="/funnel-bee-coming-soon" element={<FunnelBee />} />
          <Route path="/sales-bee-crm-coming-soon" element={<SalesBee />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
