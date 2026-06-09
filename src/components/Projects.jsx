import React from "react";
import WebFol from "../assets/Image/WebFol.png";
import GDfol from "../assets/Image/GDFol.png";
import SMfol from "../assets/Image/SMFol.png";
import UIfol from "../assets/Image/UXUIFol.png";
import Spfol from "../assets/Image/SPFol.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <section id="projects" className="px-6 py-10">
      <h2 className="text-3xl font-bold text-left mb-8 border-b-4 border-[#0f1f4f] w-fit pb-2 text-[#0f1f4f] dark:border-white dark:text-white">
        View My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
          <div className="overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-2xl dark:bg-white/[0.02] dark:border-white/8">
            <Link to="/webProjects" className="w-full h-full block">
              <img
                className="w-full max-w-[450px] h-auto mx-auto transition-transform duration-500 group-hover:scale-105 rounded-lg"
                src={WebFol}
                alt="Project 1"
              />
            </Link>
          </div>
          <p className="text-xl text-center mt-5 text-slate-700 transition-colors duration-300 group-hover:text-slate-900 dark:text-white/80 dark:group-hover:text-white font-medium">
            Web Development
          </p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
          <div className="overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-2xl dark:bg-white/[0.02] dark:border-white/8">
            <Link to="/GDProjects" className="w-full h-full block">
              <img
                className="w-full max-w-[450px] h-auto mx-auto transition-transform duration-500 group-hover:scale-105 rounded-lg"
                src={GDfol}
                alt="Project 2"
              />
            </Link>
          </div>
          <p className="text-xl text-center mt-5 text-slate-700 transition-colors duration-300 group-hover:text-slate-900 dark:text-white/80 dark:group-hover:text-white font-medium">
            Graphic Design
          </p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
          <div className="overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-2xl dark:bg-white/[0.02] dark:border-white/8">
            <img
              className="w-full max-w-[450px] h-auto mx-auto transition-transform duration-500 group-hover:scale-105 rounded-lg"
              src={SMfol}
              alt="Project 3"
            />
          </div>
          <p className="text-xl text-center mt-5 text-slate-700 transition-colors duration-300 group-hover:text-slate-900 dark:text-white/80 dark:group-hover:text-white font-medium">
            Studio Multi Media
          </p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
          <div className="overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-2xl dark:bg-white/[0.02] dark:border-white/8">
            <img
              className="w-full max-w-[450px] h-auto mx-auto transition-transform duration-500 group-hover:scale-105 rounded-lg"
              src={UIfol}
              alt="Project 4"
            />
          </div>
          <p className="text-xl text-center mt-5 text-slate-700 transition-colors duration-300 group-hover:text-slate-900 dark:text-white/80 dark:group-hover:text-white font-medium">
            UX/UI Design
          </p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
          <div className="overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-2xl dark:bg-white/[0.02] dark:border-white/8">
            <img
              className="w-full max-w-[450px] h-auto mx-auto transition-transform duration-500 group-hover:scale-105 rounded-lg"
              src={Spfol}
              alt="Project 5"
            />
          </div>
          <p className="text-xl text-center mt-5 text-slate-700 transition-colors duration-300 group-hover:text-slate-900 dark:text-white/80 dark:group-hover:text-white font-medium">
            Studio Photography
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
