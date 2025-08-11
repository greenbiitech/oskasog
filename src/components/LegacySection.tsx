"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import legacyImage from "../../public/images/legacy-bg.png"

const LegacySection = () => {
  return (
    <motion.section
      className="py-24 relative overflow-hidden" // Set white background
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image with White Base */}
      <div className="absolute inset-0 z-0">
        <Image
          src={legacyImage}// Replace with your background image path
          alt="Legacy Section Background"
          fill // Fills the parent container
          className="object-cover opacity-60" // Reduced opacity to preserve white background
          priority // Loads eagerly for above-the-fold content
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images and Coat of Arms */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Portrait */}
              <div className="relative rounded-2xl overflow-hidden">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/oba-image.png"
                  alt="Oba (Dr.) Sikiru Kayode Adetona in traditional royal attire"
                  fill
                  className="object-cover" // Removed w-full h-auto
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" 
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <motion.p
                className="text-sm uppercase tracking-wide text-gray-600 mb-4" // Adjusted for white background
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Founder&#39;s Vision
              </motion.p>

              <motion.h2
                className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight" // Adjusted for white background
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                A Royal Legacy
              </motion.h2>
            </div>

            <motion.div
              className="space-y-6 text-gray-700 leading-relaxed" // Adjusted for white background
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p>
                Founded under the visionary leadership of Oba (Dr.) Sikiru
                Kayode Adetona, the Awujale of Ijebuland, our institution is a
                living testament to his unwavering commitment to addressing
                leadership failures and governance deficit in Nigeria and the
                African continent.
              </p>

              <p>
                Oba Adetona&#39;s dedication to fostering a new era of accountable
                and effective leadership is woven into the fabric of our
                programmes, ensuring that each student is equipped to drive
                change and promote good governance. We are proud to continue
                this legacy, upholding the values of integrity, responsibility,
                and service in every aspect of our teaching and community
                engagement.
              </p>
            </motion.div>

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>LEARN MORE</span>
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default LegacySection