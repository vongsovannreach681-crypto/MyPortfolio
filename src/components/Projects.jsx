import React from "react";
import WebFol from "../assets/Image/WebFol.png";
import GDfol from "../assets/Image/GDfol.png";
import SMfol from "../assets/Image/SMfol.png";
import UIfol from "../assets/Image/UXUIFol.png";
import Spfol from "../assets/Image/SPFol.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <section id="projects" className="px-6 py-10">
      <h2 className="text-3xl font-bold text-left mb-8 border-b-4 border-white w-fit pb-2 text-[#f5f5f5]">
        View My Projects
      </h2>

      {/* project Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
          <div className="overflow-hidden  shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/10 border border-transparent group-hover:border-white/10">
            <img
              className="w-[450px] h-auto transition-transform duration-500 group-hover:scale-105"
              src={WebFol}
              alt="Project 1"
            />
          </div>
          <p className="text-xl text-center mt-5 text-gray-300 transition-colors duration-300 group-hover:text-white font-medium">
            Web Development{" "}
          </p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
          <div className="overflow-hidden  shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/10 border border-transparent group-hover:border-white/10">
            <Link to="/GDProjects" className="w-full h-full block">
              <img
                className="w-[450px] h-auto transition-transform duration-500 group-hover:scale-105"
                src={GDfol}
                alt="Project 2"
              />
            </Link>
          </div>
          <p className="text-xl text-center mt-5 text-gray-300 transition-colors duration-300 group-hover:text-white font-medium">
            Graphic Design{" "}
          </p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
          <div className="overflow-hidden  shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/10 border border-transparent group-hover:border-white/10">
            <img
              className="w-[450px] h-auto transition-transform duration-500 group-hover:scale-105"
              src={SMfol}
              alt="Project 3"
            />
          </div>
          <p className="text-xl text-center mt-5 text-gray-300 transition-colors duration-300 group-hover:text-white font-medium">
            Studio Multi Media{" "}
          </p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
          <div className="overflow-hidden  shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/10 border border-transparent group-hover:border-white/10">
            <img
              className="w-[450px] h-auto transition-transform duration-500 group-hover:scale-105"
              src={UIfol}
              alt="Project 4"
            />
          </div>    
          <p className="text-xl text-center mt-5 text-gray-300 transition-colors duration-300 group-hover:text-white font-medium">
            UX/UI Design{" "}
          </p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-3">
          <div className="overflow-hidden  shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/10 border border-transparent group-hover:border-white/10">
            <img
              className="w-[450px] h-auto transition-transform duration-500 group-hover:scale-105"
              src={Spfol}
              alt="Project 5"
            />
          </div>
          <p className="text-xl text-center mt-5 text-gray-300 transition-colors duration-300 group-hover:text-white font-medium">
            Studio Photography{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
