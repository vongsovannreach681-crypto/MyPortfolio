import React from "react";
import Avar from "../assets/Av2.png";

const AboutMe = () => {
  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold text-left mb-8 border-b-4 border-white w-fit pb-2 text-[#f5f5f5]">
        Something About Me
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 flex justify-center">
          <div className="relative max-w-md">
            {/* Background blobs */}
            
            <img
              src={Avar}
              alt="Avar"
              className="relative w-full max-w-sm rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="max-w-xl rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 shadow-2xl backdrop-blur-xl">
            <div className="bg-white/20 w-full h-12 px-3 py-2 rounded-md mb-6 flex items-center justify-between">
              <span className="text-sm  font-semibold text-[#f5f5f5]">
                Message From Reach...
              </span>

              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              </div>
            </div>

            <p className="text-base leading-8 text-slate-200">
              Ready to see what I’ve been working on? Scroll down to explore my
              latest projects, or click the button below to dive straight into
              my work!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
