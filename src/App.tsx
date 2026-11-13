import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import SmileResults from "./components/SmileResults";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <SmileResults />
        <Reviews />
        <Booking />
        <Contact />
        <Footer />
        



        <FloatingChat />
      </main>
    </>
  );
}