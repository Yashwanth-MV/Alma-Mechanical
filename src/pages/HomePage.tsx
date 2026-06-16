import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import ContactHero from '../components/ContactHero';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Banner />
      <Products />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Blog />
      <ContactHero />
      <Footer />
    </main>
  );
}
