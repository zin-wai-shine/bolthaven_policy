import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { HowItWorks } from './pages/HowItWorks';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
