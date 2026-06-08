import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#06060a] text-white/92 py-20 px-6 sm:px-12 overflow-hidden border-t border-white/10">
      {/* Subtle Background Glow - Updated to match theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.03),_transparent_70%)] blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center z-10 relative">
        
        {/* Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-[-0.05em] leading-[0.92]">
            Let's create something <br className="hidden md:block" />
            <span className="text-white/80">
              extraordinary.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-[1.55]">
            I'm currently available for freelance work and open to new opportunities. 
            Whether you have a project to discuss or just want to say hi, my inbox is open!
          </p>
          <motion.a 
            href="mailto:sovannreach@example.com"
            whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-lg border border-white/20 bg-white/10 text-white font-medium transition duration-150 mt-4"
          >
            Say Hello <FaArrowRight />
          </motion.a>
        </motion.div>

        {/* Separator - matched with HeroSection separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-semibold text-white tracking-tight">V. Sovannreach</span>
            <span className="text-[0.95rem] text-white/50 mt-1 font-light">Frontend Developer & Designer</span>
          </div>

          {/* Socials */}
          <div className="flex gap-8">
            {[
              { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -4, color: '#ffffff' }}
                className="text-white/60 transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center md:text-left mt-16 text-sm text-white/40 flex flex-col md:flex-row justify-between items-center font-light">
          <p>&copy; {currentYear} Vorng Sovannreach. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Crafted with using React & Motion
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;