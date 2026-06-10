import Achivment from '../assets/PDF/Reach.pdf'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReachImg from '../assets/Reach.png'
import { motion } from 'framer-motion'

const Achivement = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900 dark:bg-[#050507] dark:text-white/92">
      <Header />
      
      <main className="flex-grow pt-24 pb-20">
        {/* Banner Section */}
        <section className="relative w-full py-20 lg:py-24 overflow-hidden border-b border-slate-200/70 dark:border-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_60%)] blur-[80px] -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <img
                src={ReachImg}
                alt="Vorng Sovannreach"
                className="w-48 md:w-64 h-auto rounded-xl object-cover shadow-[0_20px_50px_rgba(148,163,184,0.3)] dark:shadow-[0_0px_55px_rgba(255,255,255,0.2)] border-4 border-slate-200 dark:border-white/10"
              />
            </motion.div>
            
            <div className="max-w-2xl">
              <h4 className="text-[#f5c542] text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-4 dark:text-white/50">
                My Journey
              </h4>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-[#0f1f4f] dark:text-white mb-6 leading-tight">
                Certifications & <span className="text-[#f5c542]">Achievements</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 font-light leading-[1.6]">
                As a passionate Frontend Developer and Designer, continuous learning is at the core of my journey. I constantly strive to upgrade my skills in web development, UX/UI design, and emerging technologies. Below is a collection of my formal certifications and milestones that reflect my dedication to excellence and professional growth.
              </p>
            </div>
          </div>
        </section>

        {/* Certificate Display Section */}
        <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full bg-slate-200/50 dark:bg-white/5 p-4 md:p-6 rounded-3xl border border-slate-300/50 dark:border-white/10 shadow-xl"
          >
            <iframe 
              src={Achivment} 
              title="Certificates and Achievements" 
              className="w-full h-[60vh] md:h-[80vh] rounded-2xl bg-white dark:bg-black/40 border-none" 
              allowFullScreen>
            </iframe>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Achivement