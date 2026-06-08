import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
const ProjectsDisplay = () => {
  return (
    <div className="bg-[#06060a] min-h-screen flex flex-col text-white/92">
      <Header />

      <main className="flex-grow pt-24">
        {/* Banner Section */}
        <section className="relative w-full py-24 lg:py-32 overflow-hidden border-b border-white/10">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_60%)] blur-[80px] -z-10 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 text-center">
            <h4 className="text-white/50 text-sm md:text-base font-light uppercase tracking-[0.2em] mb-4">
              Welcome To My Portfolio
            </h4>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-white mb-6 leading-tight">
              Scroll Down 
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-[1.6]">
                Here you can explore some of the projects I've worked on, showcasing my skills in frontend development and design. Each project reflects my passion for creating beautiful and functional digital experiences.
            </p>
          </div>
        </section>

        {/* Projects Grid Container */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 py-20">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsDisplay;
