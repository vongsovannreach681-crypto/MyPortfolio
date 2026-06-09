import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import CodeAcademyImage from "../assets/Image/CodeA.png";
import StoreManagementImage from "../assets/Image/Store.png";
import ECommerceImage from "../assets/Image/Ecommerce.png";
const webProjects = [
  {
    title: "Code Academy",
    url: "https://code-acadamy-lab.vercel.app/",
    description: "An interactive learning platform for coding.",
    image: CodeAcademyImage,
  },
  {
    title: "Store Management",
    url: "https://sw24-final-setec.vercel.app/",
    description:
      "A web application for efficient store and inventory management.",
    image: StoreManagementImage,
  },
  {
    title: "E-commerce Platform",
    url: "https://food-e-commers.vercel.app",
    description:
      "A full-featured e-commerce platform for ordering food online.",
    image: ECommerceImage,
  },
];

const WebPage = () => {
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
              Web <span className="text-[#f5c542]">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto font-light leading-[1.6]">
              A collection of my web development projects. Click on any project
              to view it live.
            </p>
          </div>
        </section>

        {/* Projects Grid Container */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {webProjects.map((project, index) => (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block relative bg-slate-100/60 border border-slate-300/40 rounded-2xl overflow-hidden hover:border-slate-400/40 transition-all duration-300 shadow-lg dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20"
              >
                {/* Image Section */}
                <div className="w-full h-56 md:h-72 bg-slate-50 dark:bg-black/40 overflow-hidden relative border-b border-slate-200/40 dark:border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-medium text-slate-950 tracking-tight group-hover:text-slate-900 transition-colors dark:text-white dark:group-hover:text-white/90">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-slate-950/5 border border-slate-300/40 flex items-center justify-center group-hover:bg-slate-950/10 transition-colors duration-300 dark:bg-white/10 dark:border-white/10 dark:group-hover:bg-white/20">
                      <FaExternalLinkAlt className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors dark:text-white/70 dark:group-hover:text-white" />
                    </div>
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed dark:text-white/60">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebPage;
