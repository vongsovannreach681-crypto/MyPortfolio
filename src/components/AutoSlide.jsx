import { FiCamera, FiCode, FiServer, FiVideo } from "react-icons/fi";
const marqueeItems = [
  { icon: FiCode, label: "Web Development" },
  { icon: FiCamera, label: "Graphic Design" },
  { icon: FiVideo, label: "Video Editing" },
  { icon: FiServer, label: "Network and Server Management" },
  { icon: FiCamera, label: "Photography" },
];

const AutoSlide = () => {
  return (
    <div>
      <div className="mt-12 border-t border-slate-300/30 pt-6 md:mt-14 dark:border-white/10">
        <div className="relative overflow-hidden border-y border-slate-300/30 bg-slate-100/50 px-1 py-4 dark:border-white/12 dark:bg-white/5">
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {[...marqueeItems, ...marqueeItems].map(
              ({ icon: Icon, label }, index) => (
                <div
                  key={`${label}-${index}`}
                  className="inline-flex min-w-max items-center gap-3 rounded-full border border-slate-300/30 bg-slate-950/5 px-5 py-2 text-[1.02rem] font-medium text-slate-950 shadow-[0_1px_0_rgba(15,23,42,0.06)_inset] dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  <Icon className="text-[1.2rem]" aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSlide;
