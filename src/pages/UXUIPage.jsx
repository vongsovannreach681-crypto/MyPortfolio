import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaFigma } from "react-icons/fa";

const uxuiProjects = [
  {
    title: "Zando App ",
    url: "https://www.figma.com/proto/cpGbCF408gXxQbF0wMUoed/Final_UX-UI?node-id=3343-24&t=jONEaff5W5ku6LxF-1",
    embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcpGbCF408gXxQbF0wMUoed%2FFinal_UX-UI%3Fnode-id%3D3343-24%26t%3DjONEaff5W5ku6LxF-1",
    description: "A comprehensive UX/UI redesign prototype for the Zando mobile app, focusing on modern aesthetics and user-friendly navigation.",
  },
  {
    title: "ABA App ",
    url: "https://www.figma.com/proto/jwToLuXKx6LrPpkP6BbiXX/Final-ABA-Project?node-id=0-1&t=d6ngL1j1BopdqOly-1",
    embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjwToLuXKx6LrPpkP6BbiXX%2FFinal-ABA-Project%3Fnode-id%3D0-1%26t%3Dd6ngL1j1BopdqOly-1",
    description: "An improved user interface and experience prototype for the ABA banking application, streamlining financial transactions.",
  },
  {
    title: "LibreShelf Website",
    url: "https://www.figma.com/proto/AfuGpZ2XMmjhj907EhSdRj/LibreShelf?node-id=0-1&t=PiKilnUXCzJbvECk-1",
    embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAfuGpZ2XMmjhj907EhSdRj%2FLibreShelf%3Fnode-id%3D0-1%26t%3DPiKilnUXCzJbvECk-1",
    description: "A user-centric design prototype for the LibreShelf website, enhancing the online book shopping experience with intuitive navigation and a modern look.",
  },
  {
    title: "E-commerce Website",
    url:"https://www.figma.com/proto/PE1oyhXUePNPjvnQwfkYxq/Final-project?node-id=0-1&t=SmDyay2hnzHzt5EU-1",
    embedUrl:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPE1oyhXUePNPjvnQwfkYxq%2FFinal-project%3Fnode-id%3D0-1%26t%3DSmDyay2hnzHzt5EU-1",
    description: "A sleek and user-friendly e-commerce website prototype designed to provide a seamless shopping experience, featuring intuitive navigation and a modern aesthetic.",
  }
];

const UxUiPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900 dark:bg-[#050507] dark:text-white/92">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        {/* Banner Section */}
        <section className="relative w-full py-20 lg:py-24 overflow-hidden border-b border-slate-200/70 dark:border-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_60%)] blur-[80px] -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 text-center">
            <h4 className="text-[#f5c542] text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-4 dark:text-white/50">
              Portfolio
            </h4>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-[#0f1f4f] dark:text-white mb-6 leading-tight">
              UX/UI <span className="text-[#f5c542]">Design</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto font-light leading-[1.6]">
              A collection of my User Experience and User Interface design projects. Interact with the prototypes below.
            </p>
          </div>
        </section>

        {/* Projects Grid Container */}
        <section className="max-w-[1400px] mx-auto px-6 sm:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {uxuiProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative bg-slate-100/60 border border-slate-300/40 rounded-3xl overflow-hidden hover:border-slate-400/40 transition-all duration-300 shadow-lg dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 flex flex-col"
              >
                {/* Content Section */}
                <div className="p-6 md:p-8 border-b border-slate-200/40 dark:border-white/10 relative z-10 flex flex-col xl:flex-row xl:items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-medium text-slate-950 tracking-tight group-hover:text-slate-900 transition-colors dark:text-white dark:group-hover:text-white/90 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed dark:text-white/60">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors duration-300 dark:bg-white/10 dark:hover:bg-white/20 whitespace-nowrap xl:mt-0 mt-2"
                  >
                    <FaFigma className="text-base" />
                    <span>View</span>
                    <FaExternalLinkAlt className="text-xs ml-1 opacity-70" />
                  </a>
                </div>

                {/* Iframe Section */}
                <div className="w-full h-[450px] bg-slate-200 dark:bg-black/40 overflow-hidden relative">
                  <iframe
                    className="w-full h-full border-none"
                    src={project.embedUrl}
                    allowFullScreen
                    title={project.title}
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UxUiPage;