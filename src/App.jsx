import AboutMe from "./components/AboutMe";
import AutoSlide from "./components/AutoSlide";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden px-[70px] pb-8 text-gray-900 dark:text-white max-lg:px-10 max-md:px-5">
        <Header className="w-[60%] position-fixed" />
        <HeroSection />
      </main>
      <AutoSlide />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
