
import Footer from './components/custom/Footer'
import Navbar from './components/custom/Navbar'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQ from './pages/FAQ-Page'
import HeroPage from './pages/HeroPage'
import MainEventPage from './pages/Main-eventPage'
import PreEventPage from './pages/Pre-eventPage'
import SponsorPage from './pages/SponsorsPage'

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <section id="about">
        <AboutPage />
      </section>
      <section id="pre-events">
        <PreEventPage />
      </section>
      <section id="main-events">
        <MainEventPage />
      </section>
      <section id="sponsors">
        <SponsorPage />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
      <Footer />
    </>
  );
}

export default App
