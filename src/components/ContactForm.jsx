import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you would handle form submission here (e.g., using EmailJS or a backend API)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact-form" className="px-6 py-16 max-w-4xl mx-auto w-full">
      <h2 className="text-3xl font-bold text-left mb-8 border-b-4 border-[#0f1f4f] w-fit pb-2 text-[#0f1f4f] dark:border-white dark:text-white">
        Send Me a Message
      </h2>

      <div className="bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm p-8 md:p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-white/80">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0f1f4f] focus:border-transparent transition-all dark:bg-black/20 dark:border-white/10 dark:text-white dark:focus:ring-white/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-white/80">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0f1f4f] focus:border-transparent transition-all dark:bg-black/20 dark:border-white/10 dark:text-white dark:focus:ring-white/30"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-white/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="How can I help you?"
              className="px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0f1f4f] focus:border-transparent transition-all resize-none dark:bg-black/20 dark:border-white/10 dark:text-white dark:focus:ring-white/30"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f1f4f] px-8 py-4 text-white font-medium shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-[#0b1738] dark:bg-white/10 dark:hover:bg-white/20 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] w-full md:w-auto md:self-start mt-2"
          >
            <span>Send Message</span>
            <FaPaperPlane className="text-sm" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
