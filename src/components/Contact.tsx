"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to work together? Feel free to reach out.
          </p>
        </motion.div>

        {/* Left card aur Contact Form yahan add karenge */}
        <div className="grid lg:grid-cols-2 gap-10">

  {/* Left Side */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-8"
  >
    <h3 className="text-3xl font-bold mb-6">
      Let's Work Together
    </h3>

    <p className="text-gray-400 leading-8 mb-8">
      I'm available for freelance projects, front-end development and
      exciting opportunities. Feel free to contact me anytime.
    </p>

    <div className="space-y-6">

      <div className="flex items-center gap-4">
        <FaEnvelope className="text-cyan-400 text-2xl" />
        <span>rizvinazneen896@gmail.com</span>
      </div>

      <div className="flex items-center gap-4">
        <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
        <span>Karachi, Pakistan</span>
      </div>

      <div className="flex items-center gap-4">
        <FaGithub className="text-cyan-400 text-2xl" />
        <a
          href="https://github.com/NazneenRizvi"
          target="_blank"
            rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          GitHub
        </a>
      </div>

<div className="flex items-center gap-4">
  <FaLinkedin className="text-cyan-400 text-2xl" />

  <a
    href="https://www.linkedin.com/in/nazneen-rizvi-2bb237208/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400 transition"
  >
    LinkedIn
  </a>
</div>
</div>
  </motion.div>

  {/* Right Side */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-8"
  >
<form className="space-y-6">

  <input
    type="text"
    placeholder="Your Name"
    className="w-full bg-slate-800 border border-cyan-500/20 rounded-xl px-5 py-3 focus:outline-none focus:border-cyan-400"
  />

  <input
    type="email"
    placeholder="Your Email"
    className="w-full bg-slate-800 border border-cyan-500/20 rounded-xl px-5 py-3 focus:outline-none focus:border-cyan-400"
  />

  <textarea
    rows={6}
    placeholder="Your Message"
    className="w-full bg-slate-800 border border-cyan-500/20 rounded-xl px-5 py-3 focus:outline-none focus:border-cyan-400 resize-none"
  />

  <button
    type="submit"
    className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold py-3 rounded-xl transition"
  >
    Send Message
  </button>

</form>

  </motion.div>

</div>

      </div>
    </section>
  );
}