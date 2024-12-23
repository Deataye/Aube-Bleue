import { Routes ,Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import APropos from "./components/APropos"
import Services from "./components/Services"
import Protocol from "./components/Protocol"
import Tarifs from "./components/Tarifs"
import Contact from "./components/Contact"
import Avis from "./components/Avis"
import Footer from "./components/Footer"



function App() {
  

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <APropos id="apropos"/>
      <Services id="services" />
      <Protocol/>
      <Tarifs id="tarifs" />
      <Contact id="contact" />
      <Avis/>
      
      <Footer/>
    </>
  )
}

export default App
