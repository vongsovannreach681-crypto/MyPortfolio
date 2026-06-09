import { useMemo, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Component for individual items to track their own loading state
const ProjectCard = ({ item, index, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback for PDFs if the browser's PDF plugin doesn't reliably fire onLoad
  useEffect(() => {
    if (item.isPdf) {
      const timer = setTimeout(() => setIsLoaded(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [item]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      onClick={() => onClick(item)}
      className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-colors duration-300 shadow-sm cursor-pointer break-inside-avoid hover:border-[#0f1f4f] dark:bg-white/[0.02] dark:border-white/6 dark:hover:border-[#f5c542]/40"
    >
      <div className="w-full bg-slate-50 dark:bg-black/30 relative flex items-center justify-center min-h-[250px]">
        {/* Loading Spinner */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-8 h-8 border-2 border-slate-300/30 border-t-slate-600/60 rounded-full animate-spin dark:border-white/10 dark:border-t-white/60"></div>
          </div>
        )}

        {item.isPdf ? (
          <div
            className={`w-full h-[400px] relative bg-white overflow-hidden transition-opacity duration-700 z-10 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <iframe
              src={`${item.url}#toolbar=0&navpanes=0&scrollbar=0`}
              title={item.filename}
              className="w-full h-[120%] -mt-[10%] pointer-events-none border-none"
              onLoad={() => setIsLoaded(true)}
            />
            {/* Invisible overlay to catch clicks instead of the PDF viewer */}
            <div className="absolute inset-0 z-20 bg-transparent"></div>
          </div>
        ) : (
          <img
            src={item.url}
            alt={item.filename}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-auto object-contain transition-all duration-700 group-hover:scale-[1.02] relative z-10 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            loading="lazy"
          />
        )}

        {/* Gradient overlay for filename readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f4f]/15 dark:from-[#0f1f4f]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30"></div>
      </div>

      {/* Filename Tag */}
      <div className="absolute bottom-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none text-center z-40">
        <p className="text-sm font-medium text-[#0f1f4f] drop-shadow-md truncate dark:text-[#f5c542]">
          {item.filename.split(".")[0]}
        </p>
      </div>
    </motion.div>
  );
};

const GDProjects = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsLoaded, setModalIsLoaded] = useState(false);

  // We reset modal loading state alongside setSelectedItem
  const handleItemClick = (item) => {
    setModalIsLoaded(false);
    setSelectedItem(item);
  };

  // Fallback for modal PDFs
  useEffect(() => {
    if (selectedItem?.isPdf) {
      const timer = setTimeout(() => setModalIsLoaded(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedItem]);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    if (selectedItem) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  const projectsData = useMemo(() => {
    const modules = import.meta.glob(
      "../assets/GDFolder/**/*.{png,jpg,jpeg,pdf}",
      { eager: true },
    );

    const categories = {};

    for (const path in modules) {
      const url = modules[path]?.default || modules[path];
      const parts = path.split("/");
      const category = parts[3];
      const filename = parts[parts.length - 1];
      const isPdf = filename.toLowerCase().endsWith(".pdf");

      if (!categories[category]) {
        categories[category] = [];
      }

      categories[category].push({
        url,
        filename,
        isPdf,
      });
    }

    return Object.entries(categories).map(([name, items]) => ({
      name,
      items,
    }));
  }, []);

  const formatCategoryName = (name) => {
    if (!name) return "";
    return name
      .replace(/-/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900 dark:bg-[#050507] dark:text-white/92 relative">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        {/* Banner Section */}
        <section className="relative w-full py-20 lg:py-24 overflow-hidden border-b border-slate-200/70 dark:border-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_60%)] blur-[80px] -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 text-center">
            <h4 className="text-[#f5c542] text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-4 dark:text-[#f5c542]/80">
              Portfolio
            </h4>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-[#0f1f4f] dark:text-white mb-6 leading-tight">
              Graphic <span className="text-[#f5c542]">Design</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-white/70 max-w-2xl mx-auto font-light leading-[1.6]">
              A showcase of my creative graphic design works, including posters,
              cards, PDFs, and more.
            </p>
          </div>
        </section>

        {/* Projects Display */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16 space-y-24">
          {projectsData.length === 0 && (
            <div className="w-full flex items-center justify-center min-h-[30vh] border border-dashed border-slate-300/40 rounded-2xl bg-slate-100/60 dark:border-white/20 dark:bg-white/[0.05]">
              <p className="text-slate-600 font-light text-lg dark:text-white/40">
                No projects found in the GDFolder.
              </p>
            </div>
          )}

          {projectsData.map((category, idx) => (
            <div key={idx} className="space-y-10">
              <div className="border-b border-slate-200/70 pb-4 dark:border-white/10">
                <h2 className="text-3xl font-medium text-slate-950 tracking-tight dark:text-white">
                  {formatCategoryName(category.name)}
                </h2>
              </div>

              {/* Responsive Columns / Masonry Grid */}
              <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
                {category.items.map((item, itemIdx) => (
                  <ProjectCard
                    key={itemIdx}
                    item={item}
                    index={itemIdx}
                    onClick={handleItemClick}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 sm:top-8 sm:right-10 z-50 p-3 bg-slate-50/60 hover:bg-slate-50/80 text-slate-900 rounded-full transition-colors backdrop-blur-md dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(null);
              }}
              aria-label="Close fullscreen"
            >
              <FaTimes size={20} />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking on the content
            >
              {/* Loading Spinner for Modal */}
              {!modalIsLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-12 h-12 border-4 border-slate-300/40 border-t-slate-700/80 rounded-full animate-spin dark:border-white/10 dark:border-t-white/80"></div>
                </div>
              )}

              {selectedItem.isPdf ? (
                <iframe
                  src={selectedItem.url}
                  title={selectedItem.filename}
                  onLoad={() => setModalIsLoaded(true)}
                  className={`w-full h-full rounded-lg shadow-2xl bg-white border-none transition-opacity duration-500 relative z-10 ${modalIsLoaded ? "opacity-100" : "opacity-0"}`}
                />
              ) : (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.filename}
                  onLoad={() => setModalIsLoaded(true)}
                  className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-opacity duration-500 relative z-10 ${modalIsLoaded ? "opacity-100" : "opacity-0"}`}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GDProjects;
