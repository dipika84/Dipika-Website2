import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'sonner';

// Layout Components
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";
import { MobileCTA } from "./components/layout/MobileCTA";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import InternationalHelp from "./pages/InternationalHelp";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/international-help" element={<InternationalHelp />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileCTA />
      </BrowserRouter>
    </div>
  );
}

export default App;
