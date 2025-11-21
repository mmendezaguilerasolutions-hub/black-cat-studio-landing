import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import PortfolioGallery from '@/components/PortfolioGallery';
import About from '@/components/About';
import Artists from '@/components/Artists';
import Contact from '@/components/Contact';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingChatBubble from '@/components/FloatingChatBubble';
import CookieBanner from '@/components/CookieBanner';

const Home = () => {
  return (
    <div className="relative">
      <NavBar />
      <main className="pt-16 md:pt-20">
        <Hero />
        <Statistics />
        <PortfolioGallery />
        <About />
        <Artists />
        <Contact />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <FloatingChatBubble />
      <CookieBanner />
    </div>
  );
};

export default Home;
