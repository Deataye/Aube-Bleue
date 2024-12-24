import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import APropos from './components/APropos';
import Services from './components/Services';
import Protocol from './components/Protocol';
import Tarifs from './components/Tarifs';
import Contact from './components/Contact';
import Avis from './components/Avis';
import Footer from './components/Footer';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <APropos id="apropos" />
              <Services id="services" />
          <Protocol />
          <Tarifs id="tarifs" />
              <div className="bg-gradient-container">
          
          <Contact id="contact" />
          <Avis />
        </div>
              
            </>
          }
        />
        <Route path="/details/1" element={<Page1 />} />
        <Route path="/details/2" element={<Page2 />} />
        <Route path="/details/3" element={<Page3 />} />
        <Route path="/details/4" element={<Page4 />} />
        <Route path="/details/5" element={<Page5 />} />
        <Route path="/details/6" element={<Page6 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
