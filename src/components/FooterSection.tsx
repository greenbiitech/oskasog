"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import XIcon from "./ui/XIcon";

const FooterSection = () => {
    return (
        <motion.footer
        className="bg-slate-800 text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Address Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Logo placeholder - replace with actual logo */}
                <Image
                  src="/images/logo-light.png"
                  alt="OSKASOG Logo"
                  width={340}
                  height={100}
                  className="h-14 w-auto object-contain" // Adjusted for larger navbar
                  priority // Load eagerly for navbar
                />
              </motion.div>

              <motion.div
                className="space-y-2 text-gray-400 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <p>Road 9,</p>
                <p>Olabisi Onabanjo University, Main</p>
                <p>Campus,</p>
                <p>Ago Iwoye, Ogun State,</p>
                <p>Nigeria.</p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h3
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Quick Links
              </motion.h3>
              <ul className="space-y-3">
                {["Home", "About us", "Admission", "Portal", "Contact us"].map(
                  (link, index) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </div>

            {/* Our Programmes */}
            <div>
              <motion.h3
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Our Programmes
              </motion.h3>
              <ul className="space-y-3">
                {[
                  "PG Diplomas & Masters",
                  "PhD Programmes",
                  "Short-Term Courses",
                  "Research",
                ].map((programme, index) => (
                  <motion.li
                    key={programme}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {programme}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact and CTA */}
            <div>
              <motion.h3
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Contact
              </motion.h3>

              <div className="space-y-4 mb-8">
                <motion.div
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p>info@oskasog.org</p>
                </motion.div>

                <motion.div
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <p>+234 811 111 3080</p>
                </motion.div>

                {/* Social Media Icons */}
                <motion.div
                  className="flex space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {[
                    { icon: Facebook, href: "https://facebook.com/oskasog" },
                    { icon: Instagram, href: "https://instagram.com/oskasog" },
                    { icon: XIcon, href: "https://x.com/oskasog" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Transform Your Future CTA */}
              <motion.div
                className="bg-slate-700 rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h4 className="text-white font-semibold mb-2">
                  Transform Your future Now !!!
                </h4>
                <motion.button
                  className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>APPLY</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <motion.div
            className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 text-sm">
              © 2024 Oba (Dr.) S.K Aderona School of Governance. All Rights
              Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Settings
              </a>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    )
}

export default FooterSection