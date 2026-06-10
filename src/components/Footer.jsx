import { FaGithub, FaTelegram, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-100 text-slate-900 py-20 px-6 sm:px-12 overflow-hidden border-t border-slate-200/70 dark:bg-[#06060a] dark:text-white/92 dark:border-white/10">
      {/* Subtle Background Glow - updated for both themes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.06),_transparent_70%)] blur-[100px] -z-10 pointer-events-none dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_70%)]" />

      <div className="max-w-7xl mx-auto flex flex-col items-center z-10 relative">
        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-semibold text-[#0f1f4f] tracking-[-0.05em] leading-[0.92] dark:text-white">
            Let's create something <br className="hidden md:block" />
            <span className="text-[#f5c542] dark:text-[#f5c542]">
              extraordinary.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-[1.55] dark:text-slate-300">
            I'm currently available for freelance work and open to new
            opportunities. Whether you have a project to discuss or just want to
            say hi, my inbox is open!
          </p>
          <motion.a
            href="mailto:songsovannreach681@gmail.com"
            whileHover={{ y: -4, backgroundColor: "rgba(15,23,42,0.08)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex text-white items-center gap-3 px-6 py-4 rounded-lg border border-[#0f1f4f]/15 bg-[#0f1f4f] text-white font-medium transition duration-150 mt-4 hover:bg-[#081433] dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            <span className="text-white">Say Hello</span>
          </motion.a>
        </motion.div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent mb-12 dark:via-white/15"></div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-semibold text-[#0f1f4f] tracking-tight dark:text-white">
              V. Sovannreach
            </span>
            <span className="text-[0.95rem] text-slate-500 mt-1 font-light dark:text-white/50">
              Frontend Developer & Designer
            </span>
          </div>

          <div className="flex gap-8">
            {[
              { icon: FaGithub, href: "https://github.com/vongsovannreach681-crypto", label: "GitHub" },
              {
                icon: FaTelegram,
                href: "https://t.me/VORNG_SOVANNREACH",
                label: "Telegram",
              },
              {
                icon: FaEnvelope,
                href: "mailto:songsovannreach681@gmail.com",
                label: "Email",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -4, color: "#f5c542" }}
                className="text-slate-600 transition-colors hover:text-[#0f1f4f] dark:text-white/60 dark:hover:text-[#f5c542]"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="w-full text-center md:text-left mt-16 text-sm text-slate-500 dark:text-white/40 flex flex-col md:flex-row justify-between items-center font-light">
          <p>&copy; {currentYear} Vorng Sovannreach. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Crafted with using React & Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
