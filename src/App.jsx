import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import FeaturedDishes from "./components/FeaturedDishes.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero.jsx";
import Menu from "./components/Menu.jsx";
import Navbar from "./components/Navbar.jsx";
import Reservation from "./components/Reservation.jsx";
import Testimonials from "./components/Testimonials.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f3eb] font-sans text-[#30231d] antialiased">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <Menu />
        <Gallery />
        <About />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
