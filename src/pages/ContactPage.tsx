import Navbar from '../components/Navbar';
import ContactHero from '../components/ContactHero';
import FAQ from '../components/FAQ';
import WhyChoose from '../components/WhyChoose';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <FAQ />
      <WhyChoose />
      <Footer />
    </main>
  );
}
